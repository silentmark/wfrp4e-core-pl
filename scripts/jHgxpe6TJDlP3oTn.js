let spells = await game.wfrp4e.utility.findAll("spell", "Wyszkukuję zaklęcia...");
spells = spells.filter(s => ["slaanesh"].includes(s.system.lore.value))

let choice = await ItemDialog.create(spells, 1, "Wybierz Zaklęcie");
if (choice[0])
{
    this.item.updateSource({name : this.item.name + ` (${choice[0].name})`})
    this.actor.createEmbeddedDocuments("Item", choice, {fromEffect: this.effect.id})
}
