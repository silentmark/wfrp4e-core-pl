let characteristics = {
    "ws" : 10,
    "bs" : 0,
    "s" : 5,
    "t" : 15,
    "i" : 20,
    "ag" : 15,
    "dex" : 20,
    "int" : 35,
    "wp" : 30,
    "fel" : 10
}
let skills = ["Splatanie Magii", "Opanowanie", "Unik", "Występy (Gawędziarstwo)", "Intuicja", "Język (Magiczny)", "Dowodzenie", "Wiedza (Magia)", "Wiedza (Teologia)", "Percepcja"]
let skillAdvancements = [20, 25, 20, 25, 30, 25, 15, 20, 10, 30]
let talents = ["Zmysł Magii", "Magia Tajemna (Dowolna Tradycja)", "Precyzyjne Inkantowanie", "Precyzyjne Inkantowanie", "Szczęście", "Wykrywanie Magii", "Groźny", "Magia Prosta", "Percepcja Magiczna", "Szósty Zmysł"]
let trappings = ["Broń ręczna", "Kostur", "Rytualna szata zawierająca wiele ornamentów i zdobień"]
let items = [];

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

        trappingItem.system.equipped.value = true;

        items.push(trappingItem);
    }
    else 
    {
        items.push({name : trapping, type : "trapping", "system.trappingType.value" : "clothingAccessories"})
        //ui.notifications.warn(`Could not find ${trapping}`, {permanent : true})
    }
}

updateObj.name = updateObj.name += " " + this.effect.name

await this.actor.update(updateObj)
this.actor.createEmbeddedDocuments("Item", items);
