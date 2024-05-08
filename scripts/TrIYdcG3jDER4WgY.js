let item = await fromUuid("Compendium.wfrp4e-core.items.xsGbDFqK2qh7lsIj")
let data = item.toObject();
data.system.specification.value = "Pomniejsza"
this.actor.createEmbeddedDocuments("Item", [data], {fromEffect : this.effect.id})