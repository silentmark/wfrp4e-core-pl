const talents = await Promise.all(["Intrygant", "Percepcja Magiczna"].map(game.wfrp4e.utility.findTalent))
this.actor.createEmbeddedDocuments("Item", talents, {fromEffect : this.effect.id})