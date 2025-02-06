if (args.opposedTest.result.differenceSL >= 0 && args.opposedTest.result.differenceSL <= 2 && args.opposedTest.result.winner == "attacker")
{ 
    this.script.message(`Staje się zatrzymany w zbroi lub ciele przeciwnika. See @UUID[${this.item.uuid}]{${this.item.name}}.`, {speaker : {alias : this.item.name}, blind: true, whisper : ChatMessage.getWhisperRecipients("GM")});
}
    