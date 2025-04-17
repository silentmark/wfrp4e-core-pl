let spells = await warhammer.utility.findAllItems("spell", "Wyszkukuję zaklęcia...", true, ["system.lore.value"])
spells = spells.filter(s => ["slaanesh"].includes(s.system.lore.value))

let choice = await ItemDialog.create(spells, 1, {text : "Wybierz Zaklęcie", title : this.effect.name});
if (choice[0])
{
    this.item.updateSource({name : this.item.name + ` (${choice[0].name})`})
    this.actor.addEffectItems(choice.map(i => i.uuid), this.effect)
}
