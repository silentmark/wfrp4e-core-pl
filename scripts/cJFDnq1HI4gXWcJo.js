if (isNaN(parseInt(this.item.system.specification.value)))
{
    let value = await ValueDialog.create("Wartość Ochrony", "Podaj Wartość Cechy Stworzenia Ochrona");
    if (value)
    {
     this.item.updateSource({"system.specification.value" : value});
    }
}