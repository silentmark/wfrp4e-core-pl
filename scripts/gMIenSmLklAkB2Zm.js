//*** Jad
if (isNaN(parseInt(this.item.system.specification.value)))
{
    let value = await ValueDialog.create("Podaj Siłe Jadu", this.effect.name, "", Object.values(game.wfrp4e.config.difficultyNames));
    if (value)
    {
     this.item.updateSource({"system.specification.value" : value});
    }
}