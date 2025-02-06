if(args.opposedTest.result.winner == "defender")
{
    let roll = Math.ceil(CONFIG.Dice.randomUniform() * 10)
    let msg = `Rzut: ${roll}.`
    if (roll >= 7)
    {
          msg = `Atak uderza z PS w wysokości: ${roll - 6}.`
    }
    this.script.message(msg, {blind: true,  whisper : ChatMessage.getWhisperRecipients("GM")})
}