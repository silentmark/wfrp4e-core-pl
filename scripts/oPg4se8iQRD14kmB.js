let filters = [
    {
        property : "type",
        value : "weapon"
    },
    {
        property : "system.weaponGroup.value",
        value : ["twohanded", "polearm"]
    }
]

let items = await ItemDialog.createFromFilters(filters, 1, { text : "Wybierz odpowiednią broń drzewcową lub dwuręczną" })
items = items.map(i => i.toObject())

items.forEach(i => i.system.equipped.value = true);

this.actor.createEmbeddedDocuments("Item", items);
