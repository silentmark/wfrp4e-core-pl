// Victims that take at least 1 Wound from a Fell Dagger
// immediately take a Poisoned Condition 
// resisted with a Difficult (-10) Endurance Test. 

// TODO: Add Venom strength to message

if (args.totalWoundLoss > 0) 
{
  args.actor.addCondition("poisoned")
  this.script.message(`
      <strong>${this.effect.name}</strong>:<br>
      <strong>${args.actor.name}</strong>: otrzymano Stan @Condition[Zatrucie], który może zostać odparty <strong>Wymagającym (-10) Testem Odporności </strong>.`, 
      {whisper: ChatMessage.getWhisperRecipients("GM")})
}
