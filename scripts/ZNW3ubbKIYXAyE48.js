let wounds = this.actor.itemTypes.disease.filter(i => i.name == "Ropiejąca Rana" && i.system.duration.active);
let selected;
if (wounds.length == 0)
{
    return this.script.scriptNotification("Brak Ropiejących Ran!");
}
else if (wounds.length == 1)
{
    selected = wounds[0];
}
else if (wounds.length >= 2)
{
    selected = (await ItemDialog.create(wounds, 1))[0];
}

if (selected)
{
    let test = await this.actor.setupSkill(game.i18n.localize("NAME.Endurance"), {fields: {difficulty : "average"}})
    await test.roll();
    if (test.succeeded)
    {
        let SL = parseInt(test.result.SL);
        if (SL >= 0)
        {
            selected.update({"system.duration.value" : selected.system.duration.value - SL})
            this.script.message(`<strong>${selected.name}</strong> czas trwania choroby zmniejszony o ${SL}!`)
        }
    }
}