let item = await fromUuid("Compendium.wfrp4e-core.items.kKccDTGzWzSXCBOb")
item = item.toObject();
this.actor.createEmbeddedDocuments("Item", [item], {fromEffect: this.effect.id})