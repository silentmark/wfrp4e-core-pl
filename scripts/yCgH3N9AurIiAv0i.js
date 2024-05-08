if (!this.item.name.includes("(") || this.item.system.tests.value.includes("(Zmysł)"))
{
    let tests = this.item.system.tests.value
    let name = this.item.name

    // If name already specifies, make sure tests value reflects that
    if (name.includes("("))
    {
        let sense = name.split("(")[1].split(")")[0]
        tests = `${tests.split("(")[0].trim()} (${sense})`;
    }
    else // If no sense specified, provide dialog choice
    {
        let choice = await ItemDialog.create(ItemDialog.objectToArray({
            taste : "Smak",
            sight : "Wzrok",
            smell : "Węch",
            hearing : "Słuch",
            touch : "Dotyk"
        }, this.item.img), 1, "Wybierz Zmysł");
        if (choice[0])
        {
            name = `${name.split("(")[0].trim()} (${choice[0].name})`
            tests = `${tests.split("(")[0].trim()} (${choice[0].name})`
        }
    }

        this.item.updateSource({name, "system.tests.value" : tests})
}