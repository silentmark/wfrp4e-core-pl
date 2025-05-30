let addOption = await foundry.applications.api.DialogV2.confirm({
    window : {title : "Opcjonalne"},
    content : 
    `
    Dodać opcjonalne przedmioty?
    <p>
    Broń Zasięgowa (Łuk) +10 oraz długi łuk z 12 strzałami
    </p>
    `,
})

let choice = []

if (addOption)
{
    choice = [
        {
            type : "skill",
            name : "Broń Zasięgowa (Łuk)",
            diff : {
                system : {
                    advances : {
                        value : 10
                    }
                }
            }
        },
        {
            type : "weapon",
            name : "Łuk długi",
        },
        {
            type : "ammunition",
            name : "Strzała",
        }
    ];
}



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
            let equip = item.system.tags.has("equippable");
            item = item.toObject()
            if (equip)
            {
                item.system.equipped.value = true;
            }
            items.push(foundry.utils.mergeObject(item, (c.diff || {})))
        }
        else
            ui.notifications.warn(`Could not find ${talent}`, {permanent : true})
    }

}
await this.actor.update(updateObj)
this.actor.createEmbeddedDocuments("Item", items);
