//*** Ziejąca rana korpusu
if (args.opposedTest.result.hitloc.value == "body" && args.totalWoundLoss > 0)
{
    args.actor.addCondition("bleeding", 1);
    this.script.scriptNotification("Dodano Stan Krwawienie");
}
