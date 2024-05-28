if (this.actor.type != "character")
{
    return;
}

let god = await ValueDialog.create("Wybierz Bóstwo", "Błogosławieństwo (Boska Tradycja)")

if (god)
{
    let prayers = await game.wfrp4e.utility.findAll("prayer", "Ładuję błogosławienia...")
    let blessings = prayers.filter(p => p.system.god.value.split(",").map(i => i.trim().toLowerCase()).includes(god.toLowerCase()) && p.system.type.value == "blessing")
    if (blessings.length)
    {
        this.script.scriptNotification("Dodaję: " + blessings.map(i => i.name).join(", "))
        await this.actor.createEmbeddedDocuments("Item", blessings, {fromEffect : this.effect.id})
    }
    else 
    {
        this.script.scriptNotification(`Nie mogłem znaleźć żadnych błogosławieństw związanych z ${god}.`)
    }
    this.item.updateSource({name : this.item.name.replace("Boska Tradycja", god)})
    await this.actor.update({"system.details.god.value": god})
}