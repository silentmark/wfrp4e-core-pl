if (isNaN(parseInt(this.item.system.specification.value)))
{
    let value = await ValueDialog.create("Ustal Poziom Strachu:", this.item.name);
    if (value)
    {
     this.item.updateSource({"system.specification.value" : value});
    }
}
