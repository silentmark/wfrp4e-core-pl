//*** Pożoga zagłady U’zhula
this.script.message(await this.actor.applyBasicDamage(Math.ceil(CONFIG.Dice.randomUniform() * 10) + 6, {damageType : game.wfrp4e.config.DAMAGE_TYPE.IGNORE_AP, suppressMsg : true}))
this.actor.addCondition("ablaze");