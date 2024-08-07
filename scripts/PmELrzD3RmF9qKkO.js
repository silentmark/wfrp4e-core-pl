//*** Rozmiar
if (this.item.system.specification.value == "Rozmiar")
{
    let choice = await ItemDialog.create(ItemDialog.objectToArray(game.wfrp4e.config.actorSizes, this.item.img), 1, "Wybierz rozmiar");
    if (choice[0])
    {
        this.item.updateSource({"system.specification.value" : choice[0].name})
        this.effect.updateSource({name : this.effect.name + ` (${choice[0].name})`})
    }
}