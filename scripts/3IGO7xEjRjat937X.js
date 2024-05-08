let fatigue = this.actor.hasCondition("fatigued")
if (fatigue)
{
   this.script.scriptNotification("Usunięto Stan Zmęczenia, Efekt zdeaktywowany.")
    this.effect.update({disabled : true})
   await this.actor.removeCondition("fatigued")
}