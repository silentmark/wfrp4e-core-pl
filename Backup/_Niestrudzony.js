debugger;
if (!args.options.indefatigable) {
    args.options.indefatigable = true;

    let actorFatigueCondition = this.actor.hasCondition("fatigued").conditionValue ?? 0;    
    let actorIndefatigableTalentLevel = this.item.Advances;
    
    // Then take the difference, ensuring that if the talent level exceeds fatigue it's simply 0.
    if (actorFatigueCondition > actorIndefatigableTalentLevel) {
      args.prefillModifiers.modifier += actorIndefatigableTalentLevel * 10
    } else {
      args.prefillModifiers.modifier += actorFatigueCondition * 10;
    }
}