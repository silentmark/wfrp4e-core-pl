let test = await this.actor.setupSkill(game.i18n.localize("NAME.Cool"), {fields: {difficulty : "average"}, skipTargets: true, appendTitle :  ` - ${this.effect.name}`, context : {failure : "Cierpisz na Irraconalne Lęki"}})
await test.roll();
if (test.failed)
{
    msg = `<p>@UUID[${this.effect.sourceItem.uuid}]{Irraconalne Lęki} Roll: <a class="inline-roll"><i class="fas fa-dice-d20"></i>${Math.ceil(CONFIG.Dice.randomUniform() * 10)}</a></p>`
    if (test.result.roll % 11 == 0 || test.result.roll == 100)
    {
        msg += `<p><b>${this.actor.prototypeToken.name}</b>: Dodatkowo, otrzymuje 1 punkt zepsucia. W przypadku mutacji, wylosuj @Table[mutatemental]{Psychiczną Mutację}</p>`
        let newCorruption = Number(this.actor.status.corruption.value) + 1
        this.actor.update({"system.status.corruption.value" : newCorruption})
    }

    this.script.message(msg);
}
