if (args.opposedTest.result.differenceSL >= 0 && args.opposedTest.result.differenceSL <= 2 && args.opposedTest.result.winner == "attacker")
{ 
   this.actor.update({"system.status.fortune.value" : Math.max(0, (this.actor.system.status.fortune?.value - 1) || 0)})
    this.script.scriptMessage(`Skradziono 1 Punkt Szczęścia od <strong>${this.actor.name}</strong>`, {blind : true, whisper : ChatMessage.getWhisperRecipients("GM")})

}