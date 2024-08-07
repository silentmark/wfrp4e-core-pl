//*** Salwort
let stunned = this.actor.hasCondition("stunned")
if (stunned)
{
   this.script.scriptNotification(`Usunięto 1 Stan Oszołomienia`);
   this.actor.removeCondition("stunned");
}
else 
{
	this.script.scriptNotification(`Brak Stanów Oszołomienia do usunięcia`);
}