if (args.opposedTest.result.differenceSL >= 0 && args.opposedTest.result.differenceSL <= 3 && args.opposedTest.result.winner == "attacker")
{ 
    this.script.message(`Wszyscy w zasięgu 20 metrów otrzymują 1 Ranę oraz muszą wykonać <strong>Wymagający (-10) Test Odporności</strong> lub otrzymają Stan @Condition[Ogłuszenie]`, {blind : true,  whisper : ChatMessage.getWhisperRecipients("GM")})
}
    