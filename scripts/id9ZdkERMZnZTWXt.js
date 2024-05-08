if (args.extendedTest?.getFlag("wfrp4e", "fear"))
{
	this.script.scriptNotification("Niewrażliwy na Strach");
	args.extendedTest.delete();
	args.abort = true;
}
return args.options.terror || args.extendedTest?.getFlag("wfrp4e", "fear")