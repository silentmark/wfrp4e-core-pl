//*** Drugie proroctwo Amul
let fortunePoints = this.effect.sourceTest.result.overcast.usage.other.current
let current = this.actor.status.fortune.value

this.actor.update({"system.status.fortune.value" : fortunePoints + current})

this.script.scriptMessage(`<b>${this.actor.prototypeToken.name}</b>: Punkty Szczęścia zwiększone z ${current} do ${fortunePoints + current}`)