let menacing = (await fromUuid("Compendium.wfrp4e-core.items.Item.0hn6UaKq8CoZP2zD")).toObject();
let sense = (await fromUuid("Compendium.wfrp4e-core.items.Item.9h82z72XGo9tfgQS")).toObject();

sense.name += " (Wzrok)";
sense.system.tests.value = sense.system.tests.value.replace("Zmysł", "Wzrok")

this.actor.createEmbeddedDocuments("Item", [menacing, sense], {fromEffect : this.effect.id})