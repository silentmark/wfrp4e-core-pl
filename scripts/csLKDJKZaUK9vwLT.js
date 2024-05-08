let item = await fromUuid("Compendium.wfrp4e-core.items.7rBhIRo96Mydo0Cv")
let data = item.toObject();
data.system.location.value = "Plecy"
this.actor.createEmbeddedDocuments("Item", [data], {fromEffect: this.effect.id})
