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

let petty = await ItemDialog.createFromFilters(filters, 6, {text :"Wybierz 6 Zaklęć Magii Prostej"})


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

let arcane = await ItemDialog.createFromFilters(filters, 9, {text : "Wybierz 9 Zaklęć Magii Tajemnej"})

let items = petty.concat(arcane).map(i => i.toObject())

this.actor.createEmbeddedDocuments("Item", items);