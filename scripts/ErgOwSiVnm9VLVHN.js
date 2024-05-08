let item = await fromUuid("Compendium.wfrp4e-core.items.Item.DrNUTPeodEgpWTnT")
item = item.toObject();
this.actor.createEmbeddedDocuments("Item", [item], {fromEffect : this.effect.id})