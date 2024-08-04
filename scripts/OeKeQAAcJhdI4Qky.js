if (this.actor.hasCondition("stunned") || this.actor.hasCondition("unconscious"))
{
	this.script.scriptNotification("Przerwany!");
	await this.effect.update({"disabled" : true})
}
