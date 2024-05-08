
let item = await fromUuid("Compendium.wfrp4e-core.items.M8XyRs9DN12XsFTQ");
item = item.toObject();
this.actor.createEmbeddedDocuments("Item", [item], {fromEffect: this.effect.id});