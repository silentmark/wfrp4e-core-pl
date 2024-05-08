let item = await fromUuid("Compendium.wfrp4e-core.items.rOV2s6PQBBrhpMOv");
this.actor.createEmbeddedDocuments("Item", [item], {fromEffect : this.effect.id});