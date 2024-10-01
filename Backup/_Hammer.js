let changes = [];
if (args.opposedTest.attackerTest.weapon) {
    if (args.opposedTest.opposeResult.winner == "attacker") {
        let modifier = 1; 
        let change = {  key: "system.characteristics.s.calculationBonusModifier",
                        mode: 2,
                        value: "1" };
        if (this.effect.changes.length > 0) {
            modifier = parseInt(this.effect.changes[0].value) + 1;
            change = this.effect.changes[0];
            change.value = modifier.toString();
        }
        changes.push(change);
    }
    this.effect.update({ changes: changes });
}

if (this.effect.changes.length > 0) {
    this.effect.update({ changes: [] });
}
if (this.effect.sourceItem.parent.id == this.actor.id) {
    let effect = this.effect.sourceItem.effects.find(x => x.name == 'Młot bojowy "Furia Sigmara"');
    effect.update({changes: []});
}
if (this.effect.sourceItem.parent.system.characteristics.s.calculationBonusModifier > 0) {
 let damage = this.effect.sourceItem.parent.characteristics.s.bonus;
  await this.actor.applyBasicDamage(damage, { damageType: game.wfrp4e.config.DAMAGE_TYPE.IGNORE_ALL, minimumOne: true, loc: "body", suppressMsg: false, hideDSN: true});
  let test = await this.actor.setupCharacteristic("s", {fields: {difficulty: "average" }});
  await test.roll();
  if (test.failed) {
     await this.actor.addCondition("prone");
  }
}