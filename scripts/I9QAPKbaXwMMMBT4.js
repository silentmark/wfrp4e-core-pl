let test = await this.actor.setupSkill(game.i18n.localize("NAME.Cool"), {fields : {difficulty: "average"}, skipTargets: true, appendTitle :  " - " + this.effect.name})
await test.roll();
if(test.failed)
{
    await this.actor.addCondition("stunned");
    let secondTest = await this.actor.setupSkill(game.i18n.localize("NAME.Cool"), {fields : {difficulty: "easy"}, skipTargets: true, appendTitle :  " - Rozpacz"})
    await secondTest.roll();
    if(secondTest.failed)
    {
        this.effect.updateSource({name : "Smak Śmierci"})
         await this.actor.addCondition("fatigued");
    }
    else 
    {
        return false;
    }
}