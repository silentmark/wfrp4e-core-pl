let actorSize = game.wfrp4e.config.actorSizeNums[args.actor.details.size.value]
let attackerSize = game.wfrp4e.config.actorSizeNums[args.attacker.details.size.value]

if (attackerSize > actorSize)
{
   let msg = `<b>Atak Językiem</b>: ${args.actor.prototypeToken.name} otrzymuje Stan @Condition[Pochwycenie]`;
   await args.actor.addCondition("entangled");
   if (actorSize <= 2)
   {
       msg += `oraz Stan @Condition[Związany Walką]`;
   }
   this.script.message(msg, {speaker : {alias: args.attacker.prototypeToken.name}})
}