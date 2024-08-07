//*** Dotyk Rhyi
let caster = this.effect.sourceActor;

this.actor.modifyWounds(caster.system.characteristics.fel.bonus);

this.script.scriptMessage(`Uleczone Punkty Żywotności: ${caster.system.characteristics.fel.bonus}`);