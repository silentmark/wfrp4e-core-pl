//*** On Deadly Ground
if (this.actor.hasCondition("broken"))
{
    this.actor.removeCondition("broken")
    this.script.scriptNotification(`Nie można otrzymać stanu Panika`);
}