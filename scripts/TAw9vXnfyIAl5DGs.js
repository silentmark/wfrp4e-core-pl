if (this.item.system.quantity.value)
{
    CorruptionMessageModel.createCorruptionMessage("minor", this.script.getChatData());
	this.item.system.reduceQuantity();
	let actor = Array.from(game.user.targets)[0]?.actor || this.actor;
	actor.applyEffect({effectData : [this.item.effects.contents[1].convertToApplied()]})
}
else
{
	this.script.notification("None left!", "error")
}