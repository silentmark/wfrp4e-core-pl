const talents = await Promise.all(["Szał Bojowy", "Odporność na Magię"].map(game.wfrp4e.utility.findTalent))
this.actor.createEmbeddedDocuments("Item", talents, {fromEffect : this.effect.id})