if (this.item.system.tests.value.includes("(Grupa Społeczna)"))
{
    let tests = this.item.system.tests.value
    let name = this.item.name

    // If name already specifies, make sure tests value reflects that
    if (name.includes("(") && !name.toLowerCase().includes("(dowolna grupa)"))
    {
        let group = name.split("(")[1].split(")")[0]
        tests = `${tests.split("(")[0].trim()} (${group})`
    }
    else
    {
        let value = await ValueDialog.create("Napisz, czyjej Etykiety dotyczy talentu", name);
        if (value)
        {
            if (name.includes("("))
            {
                name = `${name.split("(")[0].trim()} (${value})`
                tests = `${tests.split("(")[0].trim()} (${value})`
            }
            else 
            {
                name = `${name} (${value})`
                tests = `${tests.split("(")[0].trim()} (${value})`
            }
        }
    }
    this.item.updateSource({"system.tests.value" : tests});
    this.item.updateSource({"name" : name});
}
