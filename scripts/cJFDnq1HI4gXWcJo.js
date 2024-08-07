//*** Ochrona
if (isNaN(parseInt(this.item.system.specification.value)))
{
    let value = await ValueDialog.create("Podaj Wartość Cechy Stworzenia Ochrona", this.effect.name);
    if (value)
    {
     this.item.updateSource({"system.specification.value" : value});
    }
}