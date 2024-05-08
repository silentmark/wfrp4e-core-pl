let criticals = this.actor.itemTypes.critical;

if (criticals.length)
{
    this.script.scriptNotification("Nie może doznać krytycznych ran");
    this.actor.deleteEmbeddedDocuments("Item", criticals.map(i => i.id))
}

if (getProperty(args.data, "system.status.wounds.value") == 0)
{
    this.script.scriptNotification(`Uśpiony na ${Math.ceil(CONFIG.Dice.randomUniform() * 10)} Rund`)
}