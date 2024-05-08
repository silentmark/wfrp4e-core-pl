let ablaze = this.actor.hasCondition("ablaze")
if (ablaze)
{
    this.script.scriptNotification("Niewrażliwość na Podpalenie");
    ablaze.delete()
}