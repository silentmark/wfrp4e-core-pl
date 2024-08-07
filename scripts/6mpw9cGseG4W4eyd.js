//*** Lodowaty Uścisk
if (this.actor.system.status.advantage.value >= 2)
{
    await this.actor.modifyAdvantage(-2);
    this.script.scriptNotification("Zmniejszono Punkty Przewag")
}
else 
{
    return this.script.scriptNotification("Brak Wymaganych Punktów Przewag!", "error")
}

let test = await this.actor.setupTrait(this.item)
await test.roll();