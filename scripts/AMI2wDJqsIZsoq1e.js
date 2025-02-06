if (args.opposedTest.result.differenceSL >= 0 && args.opposedTest.result.differenceSL <= 2 && args.opposedTest.result.winner == "attacker")
{ 
    this.script.message(`Emituje chmurę śmierdzącego proszku. Aktywuj Efekt <strong>Kary do Ogłady</strong> na @UUID[${this.actor.uuid}].`, {blind : true, whisper : ChatMessage.getWhisperRecipients("GM")})
}