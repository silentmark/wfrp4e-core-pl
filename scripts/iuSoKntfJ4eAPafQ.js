let spells = await game.wfrp4e.utility.findAll("spell", "Wyszukuję zaklęcia...");
spells = spells.filter(s => ["fire", "heavens", "beasts", "shadow", "light", "life", "death", "metal"].includes(s.system.lore.value)).sort((a, b) => a.system.lore.value > b.system.lore.value ?  1 : -1)

let choice = await ItemDialog.create(spells, 1, "Wybierz Zaklęcie");
if (choice[0])
{
    this.actor.createEmbeddedDocuments("Item", choice, {fromEffect: this.effect.id})
}
