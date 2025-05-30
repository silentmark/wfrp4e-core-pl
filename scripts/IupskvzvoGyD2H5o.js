if (this.actor.type != "character")
{
    return;
}

let god = await ValueDialog.create({text : "Wybierz Bóstwo", title :  "Błogosławieństwo (Boska Tradycja)"})

if (god)
{
    let prayers = await warhammer.utility.findAllItems("prayer", "Wyszukiwanie Błogosławieństw...", true, ["system.type.value", "system.god.value"])
    let blessings = prayers.filter(p => p.system.god.value.split(",").map(i => i.trim().toLowerCase()).includes(god.toLowerCase()) && p.system.type.value == "blessing")
    let configBlessings = await Promise.all((game.wfrp4e.config.godBlessings[god.toLowerCase()] || []).map(fromUuid));
    if (god == "Stara Wiara")
    {
        blessings = await ItemDialog.create(prayers.filter(i => i.system.type.value == "blessing"), 6, {text : "Wybierz 6 Błogosławieństw", title :  "Blessed"})
    }
    if (configBlessings.length)
    {
        // Combine blessings defined by config with actual blessing items found that specify this god, avoiding duplicates
        blessings = blessings.concat(
            configBlessings.map(i => {return {uuid : i.uuid, name : i.name}})
            .filter(bls => !(blessings.find(i => i.uuid == bls.uuid)))
        );
    }
    if (blessings.length)
    {
        this.script.notification("Dodaję " + blessings.map(i => i.name).join(", "))
        await this.actor.addEffectItems(blessings.map(i => i.uuid), this.effect)
    }
    else 
    {
        this.script.notification(`Nie mogłem znaleźć żadnych błogosławieństw związanych z ${god}.`)
    }
    if (this.item.name.includes("Boska Tradycja"))
        this.item.updateSource({name: this.item.name.replace("Boska Tradycja", god)});
    else if (this.item.name.includes("Dowolne Bóstwo"))
        this.item.updateSource({name: this.item.name.replace("Dowolne Bóstwo", god)});
    else
        this.item.updateSource({name: this.item.name + ` (${god})`});
    await this.actor.update({"system.details.god.value": god})
}