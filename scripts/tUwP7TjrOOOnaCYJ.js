//*** Eliksir żywotności
let fatigued = this.actor.hasCondition("fatigued")
if (fatigued)
{
   this.script.scriptNotification(`Usunięte Stany Zmęczenia: ${fatigued.conditionValue}`)
   fatigued.delete();  
}
else 
{
   this.script.scriptNotification(`Brak Stanów Zmęczenia do usunięcia`)
}