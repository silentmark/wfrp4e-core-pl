let test = await this.actor.setupCharacteristic("wp", {skipTargets: true, appendTitle :  ` - ${this.effect.name}`})
await test.roll();
if (test.succeeded)
{
    this.script.scriptMessage("Można wykonać Akcję lub Ruch w tej rundzie (wybierz jedno)")
}
else 
{
    this.script.scriptMessage("Nie można wykonać Akcji ani Ruchu w tej rundzie")    
}