//*** Tarcza Aqshy
let ablaze = this.actor.hasCondition("ablaze");
if (ablaze)
{
	ablaze?.delete();
	this.script.scriptNotification("Ingoruje Podpalenie");
}
