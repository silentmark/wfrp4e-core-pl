let chatData = { whisper: ChatMessage.getWhisperRecipients("GM") }
let message = ""

let wounds = duplicate(this.actor.status.wounds)
let regenRoll = await new Roll("1d10").roll();
let regen = regenRoll.total;

if (wounds.value >= wounds.max)
    return

if (wounds.value > 0) 
{
    wounds.value += regen
    if (wounds.value > wounds.max)
    {
        wounds.value = wounds.max
    }
    message += `<b>${this.actor.name}</b>: Odzyskane punkty Żywotności: ${regen}.`

    if (regen == 10)
    {
        message += `<br>Dodatkowo zregenerowano krytyczną ranę.`
    }
}
else if (regen >= 8) 
{
    message += `<b>${this.actor.name}</b>: wylosowano ${regen} i odzyskano 1 punkt Żywotności.`
    wounds.value += 1
    if (regen == 10)
    {
        message += `<br>Dodatkowo zregenerowano krytyczną ranę.`
    }
}
else 
{
    message += `<b>${this.actor.name}</b>: wylosowano ${regen} - brak efektu.`
}

await this.actor.update({ "system.status.wounds": wounds })
this.script.scriptMessage(message, { whisper: ChatMessage.getWhisperRecipients("GM") })