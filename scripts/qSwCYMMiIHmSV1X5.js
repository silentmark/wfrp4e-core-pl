if (this.item.system.quantity.value)
{
	this.item.system.reduceQuantity();
	let actor = Array.from(game.user.targets)[0]?.actor || this.actor;
     let effectData = this.item.effects.contents[0].convertToApplied();
	 effectData.system.sourceData.item = this.item.uuid
     effectData.duration.seconds = 10800
	actor.applyEffect({effectData : [effectData]})
}
else
{
	this.script.notification("Nic nie zostało!", "error")
}