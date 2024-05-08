if (this.actor.hasCondition("ablaze"))
{
    this.script.scriptNotification("Niewrażliwość na Podpalenie")
    await this.actor.hasCondition("ablaze")?.delete()
}