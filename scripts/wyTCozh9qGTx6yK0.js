if (args.options.terror || args.extendedTest?.getFlag("wfrp4e", "fear"))
{
	args.abort = true;
	this.script.scriptNotification("Nie musi robić testów strachu lub grozy");
}