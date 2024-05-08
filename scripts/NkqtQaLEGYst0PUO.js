if (this.actor.has("Odporność na Magię", "talent")) 
    return

let item = await fromUuid("Compendium.wfrp4e-core.items.eowbsW6oHGSNJmxV")
this.actor.createEmbeddedDocuments("Item", [item], {fromEffect : this.effect.id})