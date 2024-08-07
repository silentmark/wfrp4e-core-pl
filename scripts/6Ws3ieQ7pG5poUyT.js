//*** Rzucanie Czarów
if (isNaN(parseInt(this.item.system.specification.value)))
{
    let value = await ValueDialog.create("Podaj Tradycję Magiczną", this.effect.name, "", Object.values(game.wfrp4e.config.magicLores));
    if (value)
    {
     this.item.updateSource({"system.specification.value" : value});
    }
}