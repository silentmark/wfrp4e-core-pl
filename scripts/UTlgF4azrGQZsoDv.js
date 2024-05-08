const talents = await Promise.all(["Oburęczność", "Rozproszenie Uwagi"].map(game.wfrp4e.utility.findTalent))
this.actor.createEmbeddedDocuments("Item", talents, {fromEffect : this.effect.id})