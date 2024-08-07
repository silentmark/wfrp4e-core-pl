//*** Zestaw na zatrucia
let poisoned = args.actor.hasCondition("poisoned")
if (poisoned)
{
   this.script.scriptNotification(`Usunięto liczbę stanów Zatrucia: ${poisoned.conditionValue}`)
   poisoned.delete();  
}
else
  this.script.scriptNotification(`Brak stanów Zatrucia`)