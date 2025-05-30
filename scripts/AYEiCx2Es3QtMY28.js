let choice1 = [
    {
        type: "trait",
        name: "Zwierzęcy",
    },
    {
        type: "trait",
        name: "Regeneracja",
    },
    {
        type: "trait",
        name: "Rozmiar (Duży)",
    },
    {
        type: "trait",
        name: "Terytorialny",
    }
]

let updateObj;
let actor;

async function addTrait(c) {
    let items = [];
    let existing;
    if (c.type == "trait") {
        existing = updateObj.items.find(i => i.name == c.name && i.type == c.type);
    }
    if (!existing) {
        let item = await game.wfrp4e.utility.find(c.name, c.type);
        if (item) {
            item = item.toObject();
            items.push(item);
        }
        else
            ui.notifications.warn(`Could not find ${c}`, { permanent: true });
    }
    actor.createEmbeddedDocuments("Item", items);
}

async function dialogChoice() {
    for (let c of choice1) 
    {
        if (await foundry.applications.api.DialogV2.confirm({window : {title: "Opcje"}, content:`<p>Dodajć opcje?</p><ol><li>${c.name}</li></ol>`}))
        {
            addTrait(c)
            c.valid = true;
        }
    }
}

updateObj = this.actor.toObject();
actor = this.actor
await dialogChoice();

