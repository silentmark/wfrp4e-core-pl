if (args.test.characteristicKey == "wp" && args.test.failed && args.test.result.SL <= -3)
{
    this.script.scriptNotification("Dodano: Powalenie");
    this.actor.addCondition("prone")
}