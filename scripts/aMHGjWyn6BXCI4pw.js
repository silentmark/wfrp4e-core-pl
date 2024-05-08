let frenzy = await fromUuid("Compendium.wfrp4e-core.items.Item.hXcfygzujgyMN1uI");
frenzy = frenzy.toObject();
this.actor.createEmbeddedDocuments("Item", [frenzy], {fromEffect: this.effect.id})