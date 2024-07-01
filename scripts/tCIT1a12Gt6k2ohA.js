let resistance
if (this.item.name.includes("(") && !this.item.name.toLowerCase().includes("dowolna"))
{
	resistance = this.item.parenthesesText
}
else 
{
    resistance = await ValueDialog.create("Wybierz Odporność", "Odporność") 
    
    if (resistance)
    {
        this.item.updateSource({name : `${this.item.name.split("(")[0].trim()} (${resistance})`})
        this.effect.updateSource({name : this.effect.name + ` (${resistance})`})
    }
}    
this.item.updateSource({"system.tests.value" : this.item.system.tests.value.replace("przypisane Zagrożenie", resistance)})

if (resistance && !this.effect.name.includes("("))
{
    this.effect.updateSource({name : this.effect.name += ` (${resistance})`})
}