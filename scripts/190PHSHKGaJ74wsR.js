if (!this.item.name.includes("(") || this.item.system.tests.value.includes("Teren") || this.item.system.tests.value.toLowerCase().includes("(dowolny)"))
{
    let tests = this.item.system.tests.value
    let name = this.item.name

    // If name already specifies, make sure tests value reflects that
    if (name.includes("(") && !name.toLowerCase().includes("dowolny"))
    {
        let terrain = name.split("(")[1].split(")")[0]
        tests = tests.replace("terenie", "terenie: " + terrain)
    }
    else // If no sense specified, provide dialog choice
    {
        let choice = await ItemDialog.create(ItemDialog.objectToArray({
            coastal : "Wybrzeża",
            deserts : "Pustynie",
            marshes : "Bagna",
            rocky : "Skalisty",
            tundra : "Tundra",
            woodlands : "Lasy"
        }, this.item.img), 1, "Wybór terenu");
        if (choice[0])
        {
            name = `${name.split("(")[0].trim()} (${choice[0].name})`
            tests = tests.replace("terenie", "terenie: " + choice[0].name)
        }
    }

    this.effect.updateSource({name})
    this.item.updateSource({name, "system.tests.value" : tests})
}
