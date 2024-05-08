if (this.actor.hasCondition("surprised"))
{
    this.script.scriptNotification("Nie może zostać zaskoczony");
    this.actor.removeCondition("surprised");
}