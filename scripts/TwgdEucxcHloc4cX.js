let choice1 = [
    {
        type : "armour",
        name : "Nogawice kolcze"
    },
    {
        type : "armour",
        name : "Kolczuga"
    },
    {
        type : "armour",
        name : "Czepiec kolczy"
    },
]
let choice2 = [
    {
        type : "armour",
        name : "Nogawice kolcze"
    },
    {
        type : "armour",
        name : "Kolczuga"
    },
    {
        type : "armour",
        name : "Czepiec kolczy"
    },
    {
        type : "armour",
        name : "Skórzane nogawice"
    },
    {
        type : "armour",
        name : "Skórzany hełm"
    },
    {
        type : "armour",
        name : "Skórzana kurta"
    },
]
let choice3 = [
    {
        type : "armour",
        name : "Płytowy Napierśnik"
    },
    {
        type : "armour",
        name : "Płytowe Naramienniki"
    },
    {
        type : "armour",
        name : "Hełm płytowy"
    },
    {
        type : "armour",
        name : "Płytowe Nagolenniki"
    },
]

let choice = await new Promise((resolve, reject) => {
    new Dialog({
        title : "Wybór zbroi",
        content : 
        `<p>
        Wybierz
        </p>
        <ol>
        <li>Kolczuga</li>
        <li>Kolczuga i skóra</li>
        <li>Płyta</li>
        </ol> 
        `,
        buttons : {
            1 : {
                label : "Kolczuga",
                callback : () => {
                    resolve(choice1)
                }
            },
            2 : {
                label : "Kolczuga i skóra",
                callback : () => {
                    resolve(choice2)
                }
            },
            3 : {
                label : "Płyta",
                callback : () => {
                    resolve(choice3)
                }
            }
        }
    }).render(true)
}) 

let updateObj = this.actor.toObject();
let items = []
for (let c of choice)
{
    let existing 
    if (c.type == "skill")
    {
        existing = updateObj.items.find(i => i.name == c.name && i.type == c.type)
        if (existing && c.diff?.system?.advances?.value)
        {
            existing.system.advances.value += c.diff.system.advances.value
        }
    }

    if (!existing)
    {
        let item = await game.wfrp4e.utility.find(c.name, c.type)
        if (item)
        {
            item = item.toObject()
            equip(item);
                items.push(foundry.utils.mergeObject(item, (c.diff || {})))
        }
        else
            ui.notifications.warn(`Could not find ${c.name}`, {permanent : true})
    }

}
await this.actor.update(updateObj)
this.actor.createEmbeddedDocuments("Item", items);

function equip(item)
{
    if (item.type == "armour")
        item.system.worn.value = true
    else if (item.type == "weapon")
        item.system.equipped = true
    else if (item.type == "trapping" && item.system.trappingType.value == "clothingAccessories")
        item.system.worn = true
}