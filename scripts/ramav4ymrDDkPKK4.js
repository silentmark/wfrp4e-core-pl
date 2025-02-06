if (this.actor.hasCondition("bleeding"))
{
    this.actor.removeCondition("bleeding");
    this.script.notification("Usunięto 1 Stan Krwawienia");
}
else 
{
    this.script.notification("Brak Stanów Krwawienia do usunięcia");
}