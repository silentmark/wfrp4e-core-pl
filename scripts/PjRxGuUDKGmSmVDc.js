//*** Lot (Zwierzęta)
let item = await fromUuid("Compendium.wfrp4e-core.items.EO05HX7jql0g605A")
item = item.toObject();
item.system.specification.value = this.actor.characteristics.ag.value;
this.actor.createEmbeddedDocuments("Item", [item], {fromEffect : this.effect.id});