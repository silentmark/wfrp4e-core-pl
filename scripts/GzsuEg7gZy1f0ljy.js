//*** Fakstoryl
let bleeding = this.actor.hasCondition("bleeding")
if (bleeding)
{
   this.script.scriptNotification(`Usunięte Stany Krwawienia: ${bleeding.conditionValue}`)
   bleeding.delete();  
}
else 
{
   this.script.scriptNotification(`Brak stanów krwawienia`)
}