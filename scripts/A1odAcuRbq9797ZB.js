let choice1 = [
    {
        type : "skill",
        name : "Broń Biała (Podstawowa)",
        diff : {
            system : {
                advances : {
                    value : 10
                }
            }
        }
    }
]
let choice2 = [
    {
        type : "skill",
        name : "Broń Biała (Drzewcowa)",
        diff : {
            system : {
                advances : {
                    value : 10
                }
            }
        }
    }
]

let choice = await Dialog.wait({
    title : "Choice",
    content : 
    `<p>
    Wybierz Umiejętność, której chcesz używać
    </p>
    <ol>
    <li>Broń Biała (Podstawowa)</li>
    <li>Broń Biała (Drzewcowa)</li>
    </ol> 
    `,
    buttons : {
        1 : {
            label : "Podstawowa",
            callback : () => {
                return choice1;
            }
        },
        2 : {
            label : "Drzewcowa",
            callback : () => {
                return choice2;
            }
        }
    }
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
                items.push(mergeObject(item, (c.diff || {})))
        }
        else
            ui.notifications.warn(`Nie odnaleziono umiejętności ${c.name}`, {permanent : true})
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