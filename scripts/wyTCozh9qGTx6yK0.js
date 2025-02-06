if (args.options.terror || args.extendedTest?.getFlag("wfrp4e", "fear"))
{
	args.abort = true;
	this.script.notification("Nie musi robić testów strachu lub grozy");
}