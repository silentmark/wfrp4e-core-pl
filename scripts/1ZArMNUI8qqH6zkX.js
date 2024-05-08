let test = await args.actor.setupCharacteristic("wp", {skipTargets: true, appendTitle :  " - " + this.effect.name, context : {failure: "Otrzymano Stan Oszołoemienia"}})
await test.roll();
if (test.failed)
{
    args.actor.addCondition("stunned")
}

