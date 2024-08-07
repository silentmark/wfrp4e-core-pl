//*** Zaraza
if (args.totalWoundLoss > 0)
{
    this.script.scriptMessage(`<b>${args.actor.name}</b> musi zdać <b>Prosty (+40) Test Odporności</b> lub otrzyma @UUID[Compendium.wfrp4e-core.items.kKccDTGzWzSXCBOb]{Ropiejącą Ranę}`, {whisper: ChatMessage.getWhisperRecipients("GM")});
}