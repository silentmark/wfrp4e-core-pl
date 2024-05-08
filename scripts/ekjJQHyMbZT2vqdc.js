let uses = this.item.getFlag("wfrp4e", "uses") || 0;
uses++;
this.script.scriptNotification(`Wykorzystano: ${uses}`)
this.item.setFlag("wfrp4e", "uses", uses);
if (uses >= 3)
{
	this.effect.update({"flags.wfrp4e.applicationData.type" : "other"})
	this.script.scriptNotification(`Zurzyty`);
}
