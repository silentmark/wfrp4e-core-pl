if (this.actor.hasCondition("bleeding"))
{
    this.actor.removeCondition("bleeding");
    this.script.scriptNotification("Usunięto 1 Stan Krwawienia");
}
else 
{
    this.script.scriptNotification("Brak Stanów Krwawienia do usunięcia");
}