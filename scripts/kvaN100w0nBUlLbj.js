let poisoned = this.actor.hasCondition("poisoned")
if (poisoned)
{
    this.script.scriptMessage("Niewrażliwość na trucizny!")
    poisoned.delete()
}