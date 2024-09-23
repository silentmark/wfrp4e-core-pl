//*** Atak Ogonem - Bazyliszek
let actorSize = game.wfrp4e.config.actorSizeNums[args.actor.details.size.value]
let attackerSize = game.wfrp4e.config.actorSizeNums[args.attacker.details.size.value]

if (attackerSize > actorSize)
{
   args.actor.addCondition("prone")
   this.script.message(`<strong>Atak Ogonem</strong>: ${args.actor.prototypeToken.name} otrzymuje Stan @Condition[Powalenie]`);
}