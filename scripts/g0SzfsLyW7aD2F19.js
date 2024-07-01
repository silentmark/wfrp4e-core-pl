if (this.item.name.includes("(") && this.item.system.tests.value.includes("(Grupa Społeczna)"))
{
    let tests = this.item.system.tests.value
    let name = this.item.name

    // If name already specifies, make sure tests value reflects that
    if (name.includes("(") && !name.toLowerCase().includes("dowolna"))
    {
        let group = `${name.split("(")[0].trim()} (${value})`
        tests = `${tests.split("(")[0].trim()} (${group})`
    }
    this.item.updateSource({name, "system.tests.value" : tests})
}