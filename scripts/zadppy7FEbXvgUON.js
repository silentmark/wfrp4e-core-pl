//*** Zreformowany łotr
 let characteristics = {
                    "ws" : 5,
                    "bs" : 0,
                    "s" : 0,
                    "t" : 0,
                    "i" : 0,
                    "ag" : 10,
                    "dex" : 10,
                    "int" : 0,
                    "wp" : 0,
                    "fel" : 5
                }
let skills = ["Percepcja", "Zwinne Palce", "Skradanie (Miasto)"]
let skillAdvancements = [10, 10, 10]
let talents = ["Przestępca", "Etykieta (Przestępcy)"]
let trappings = ["Lina, 10 metrów", "Wytrychy", "Maska"]
let items = []

let updateObj = this.actor.toObject();

for (let ch in characteristics)
{
    updateObj.system.characteristics[ch].modifier += characteristics[ch];
}

for (let index = 0; index < skills.length; index++)
{
    let skill = skills[index]
    let skillItem;
    skillItem = updateObj.items.find(i => i.name == skill && i.type == "skill")
    if (skillItem)
        skillItem.system.advances.value += skillAdvancements[index]
    else 
    {
        skillItem = await game.wfrp4e.utility.findSkill(skill)
        skillItem = skillItem.toObject();
        skillItem.system.advances.value = skillAdvancements[index];
        items.push(skillItem);
    }
}

for (let talent of talents)
{
    let talentItem = await game.wfrp4e.utility.findTalent(talent)
    if (talentItem)
    {
        items.push(talentItem.toObject());
    }
    else 
    {
        ui.notifications.warn(`Could not find ${talent}`, {permanent : true})
    }
}

for (let trapping of trappings) 
{
    let trappingItem = await game.wfrp4e.utility.findItem(trapping)
    if (trappingItem)
    {
        trappingItem = trappingItem.toObject()

        equip(trappingItem)

        items.push(trappingItem);
    }
    else 
    {
        ui.notifications.warn(`Could not find ${trapping}`, {permanent : true})
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