let item = await fromUuid("Compendium.wfrp4e-core.items.EaqlLRQigwnsEAXX");
item = item.toObject();
this.actor.createEmbeddedDocuments("Item", [item], {fromEffect: this.effect.id})