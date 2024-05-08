const talents = await Promise.all(["Wściekły Atak", "Urodzony żeglarz"].map(game.wfrp4e.utility.findTalent))
this.actor.createEmbeddedDocuments("Item", talents, {fromEffect : this.effect.id})