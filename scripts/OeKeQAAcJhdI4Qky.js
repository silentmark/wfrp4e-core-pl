if (this.actor.hasCondition("stunned") || this.actor.hasCondition("unconscious"))
{
	this.script.scriptNotification("Wyłączony!");
	await this.effect.update({"disabled" : true})
}