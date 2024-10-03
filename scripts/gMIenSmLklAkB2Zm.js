//*** Jad
if (isNaN(parseInt(this.item.system.specification.value)))
{
    let value = await ValueDialog.create({text : "Podaj Siłe Jadu", title : this.effect.name}, "", Object.values(game.wfrp4e.config.difficultyNames));
    if (value)
    {
     this.item.updateSource({"system.specification.value" : value});
    }
}