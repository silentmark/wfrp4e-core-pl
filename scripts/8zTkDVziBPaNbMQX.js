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

let petty = await game.wfrp4e.apps.ItemDialog.createFromFilters(filters, 6, "Wybierz 6 Zaklęć Magii Prostej")


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

let arcane = await game.wfrp4e.apps.ItemDialog.createFromFilters(filters, 9, "Wybierz 9 Zaklęć Magii Tajemnej")

let items = petty.concat(arcane).map(i => i.toObject())

this.actor.createEmbeddedDocuments("Item", items);