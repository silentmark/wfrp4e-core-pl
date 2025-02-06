if (args.totalWoundLoss > 0) 
{
  args.opposedTest.result.other.push(
  `@Corruption[minor]{Wystawienie na pomniejsze zepsucie}`
  )
  this.script.message(
  `<strong>${this.effect.name}</strong>: 
    @Corruption[minor]{Pomniejsze Zepsucie} <br/>
    <strong>${args.actor.prototypeToken.name}</strong> musi wykonać  
    <strong>Przeciętny (+20) Test na Pomniejsze Zepsucie</strong>`, 
    {whisper: ChatMessage.getWhisperRecipients("GM")})
}