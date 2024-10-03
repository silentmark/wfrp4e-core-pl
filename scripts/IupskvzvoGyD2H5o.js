//*** Błogosławieństwo (Boska Tradycja)
if (this.actor.type != "character")
{
    return;
}

let god = await ValueDialog.create({text : "Wybierz Bóstwo", title :  "Błogosławieństwo (Boska Tradycja)"})

if (god)
{
    let prayers = await warhammer.utility.findAllItems("prayer", "Ładuję błogosławienia...")
    let blessings = prayers.filter(p => p.system.god.value.split(",").map(i => i.trim().toLowerCase()).includes(god.toLowerCase()) && p.system.type.value == "blessing")
    let godBlessings = game.wfrp4e.config.godBlessings[god.toLowerCase()] || [];
    if (god == "Stara Wiara")
    {
        blessings = await ItemDialog.create(prayers.filter(i => i.system.type.value == "blessing"), 6, {text : "Wybierz 6 Błogosławieństw", title :  "Blessed"})
    }
    if (godBlessings.length)
    {
        blessings = blessings.concat(await Promise.all(godBlessings.filter(bls => !(blessings.map(i => i.uuid).includes(bls.uuid))).map(fromUuid)));
    }
    if (blessings.length)
    {
        this.script.notification("Dodaję: " + blessings.map(i => i.name).join(", "))
        await this.actor.createEmbeddedDocuments("Item", blessings, {fromEffect : this.effect.id})
    }
    else 
    {
        this.script.notification(`Nie mogłem znaleźć żadnych błogosławieństw związanych z ${god}.`)
    }
    this.item.updateSource({name : this.item.name.replace("Boska Tradycja", god)})
    await this.actor.update({"system.details.god.value": god})
}