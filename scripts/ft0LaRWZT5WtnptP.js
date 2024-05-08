let advantage = this.actor.system.status.advantage.value;
if (advantage > 0)
{
    await this.actor.setAdvantage(0);
    this.script.scriptNotification("Zmniejszono Punkty Przewag")
}
else 
{
    return this.script.scriptNotification("Niewystarczająca liczba Punktów Przewag!", "error")
}

let test = await this.actor.setupTrait(this.item, {fields : {slBonus : advantage}})
await test.roll();