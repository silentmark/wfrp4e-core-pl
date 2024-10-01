debugger;

let advantage = game.settings.get("wfrp4e", "groupAdvantageValues");
if (advantage.enemies >= 2) {
  advantage.enemies = 0;
  game.wfrp4e.utility.updateGroupAdvantage(advantage);
  let advances = this.effect.sourceItem.Advances;
  await this.actor.addCondition("stunned", 3);
  if (advances > 1) {
      await this.actor.applyBasicDamage((await new Roll("1d10").roll()).total, { damageType: game.wfrp4e.config.DAMAGE_TYPE.IGNORE_ALL, minimumOne: true, loc: "body", suppressMsg: false, hideDSN: true});
  }
   if (advances > 2) {
      let test = await this.actor.setupSkill("Odporność", {fields: {difficulty: "average" }});
      await test.roll();
      if (test.failed) {
           await this.actor.applyBasicDamage((await new Roll("1d10").roll()).total, { damageType: game.wfrp4e.config.DAMAGE_TYPE.IGNORE_ALL, minimumOne: true, loc: "body", suppressMsg: false, hideDSN: true});
           await this.actor.addCondition("broken");
     }
   } 
   if (advances > 3) {
      let formula = (advances - 3).toString() + "d10";
      await this.actor.applyBasicDamage((await new Roll(formula).roll()).total, { damageType: game.wfrp4e.config.DAMAGE_TYPE.IGNORE_ALL, minimumOne: true, loc: "body", suppressMsg: false, hideDSN: true});
   }
}