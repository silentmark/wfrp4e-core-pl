let filters = [
    {
        property : "type",
        value : "spell"
    },
    {
        property : "system.lore.value",
        value : "petty"
    }
]

let petty = await ItemDialog.createFromFilters(filters, 3, {text :"Wybierz 3 Zaklęcia Proste"})


filters = [
    {
        property : "type",
        value : "spell"
    },
    {
        property : "system.lore.value",
        value : ""
    }
]

let arcane = await ItemDialog.createFromFilters(filters, 3, {text :"Wybierz 3 Zaklęcia Magii Tajemnej"})

let items = petty.concat(arcane).map(i => i.toObject())

this.actor.createEmbeddedDocuments("Item", items);