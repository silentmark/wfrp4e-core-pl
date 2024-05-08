if (this.actor.system.status.advantage.value >= 3)
{
    this.actor.modifyAdvantage(-3);
    this.script.scriptNotification("Odjęto Punkty Przewag")
}
else 
{
    return this.script.scriptNotification("Niewystarczająca liczba Punktów Przewag!", "error")
}

let test = await this.actor.setupTrait(this.item)
await test.roll();