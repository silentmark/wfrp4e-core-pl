let damage = 0
let test = await this.actor.setupSkill("Unik", {skipTargets: true, appendTitle :  ` - ${this.effect.name}`});
await test.roll();

if (test.succeeded)
{
    damage = 10;
}
else if (test.failed)
{
   damage = 20;
}

this.script.scriptMessage(await this.actor.applyBasicDamage(damage, {loc : "roll", hideDSN: true, suppressMsg : true}))