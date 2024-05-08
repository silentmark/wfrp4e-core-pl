let caster = this.effect.sourceActor;
if (caster)
{
    let healed= caster.system.characteristics.wp.bonus + caster.system.characteristics.int.bonus
    await this.actor.modifyWounds(healed);
    this.script.scriptMessage(`<strong>${this.actor.prototypeToken.name}</strong>: Uleczone Rany: ${healed}`)
}
 
 let test = await this.actor.setupSkill(game.i18n.localize("NAME.Endurance"), {fields : {difficulty : "vhard"}, context : {success : "1 Punkt Zepsucia otrzymany w ciągu ostatniej godziny może zostać usunięty.", failure: "Nic się nie dzieje"}})
 await test.roll();