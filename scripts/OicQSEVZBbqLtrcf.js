//*** Złote łzy
let choice = await ItemDialog.create(this.actor.itemTypes.critical, (this.effect.sourceTest.result.overcast.usage.other.current || 1), "Wybierz krytyczne rany do zagojenia (nie można zregenerować utraconych części ciała)");

this.script.scriptMessage(`Uleczono: <strong>${choice.map(i => i.name).join(`, `)}</strong>`);
this.actor.deleteEmbeddedDocuments("Item", choice.map(i => i.id));