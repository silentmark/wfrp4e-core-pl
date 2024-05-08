let current = this.actor.status.fortune.value

this.actor.update({"system.status.fortune.value" : 1 + current})

this.script.scriptMessage(`<b>${this.actor.prototypeToken.name}</b>: Punkty Szczęścia zwiększone z ${current} do ${1 + current}`)