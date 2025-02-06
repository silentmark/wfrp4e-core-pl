if (getProperty(args.data, "system.status.fortune.value"))
{
	this.script.notification("Nie można zmienić liczby Punktów Szczęścia!");
	delete args.data.system.status.wounds.value;
}