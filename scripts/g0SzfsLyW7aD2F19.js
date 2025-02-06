if (this.item.system.tests.value.includes("(Grupa Społeczna)"))
{
    let tests = this.item.system.tests.value
    let name = this.item.name

    // If name already specifies, make sure tests value reflects that
    if (name.includes("(") && !name.toLowerCase().includes("(grupa społeczna)"))
    {
        let group = name.split("(")[1].split(")")[0]
        tests = `${tests.split("(")[0].trim()} (${group})`
    }
    else
    {
        let value = await ValueDialog.create({text : "Napisz, czyjej Etykiety dotyczy talentu", title : this.effect.name});
        if (value)
        {
            name = `${name.split("(")[0].trim()} (${value})`
            tests = this.item.system.tests.value.replace("Grupa Społeczna", value);
        }
    }
    this.item.updateSource({name, "system.tests.value" : tests})
    this.item.updateSource({"name" : name});
}