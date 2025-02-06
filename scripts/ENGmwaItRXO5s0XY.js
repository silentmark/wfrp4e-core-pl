await this.actor.modifyWounds(this.actor.system.characteristics.t.bonus * 3)
this.script.message(`Uleczone Rany: ${this.actor.system.characteristics.t.bonus * 3}`)

this.actor.hasCondition("bleeding")?.delete()
this.actor.hasCondition("fatigued")?.delete()
