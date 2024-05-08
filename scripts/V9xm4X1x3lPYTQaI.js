if (args.extendedTest?.getFlag("wfrp4e", "fear"))
{
	this.script.scriptNotification("Niewrażliwy na Strach");
	args.extendedTest.delete();
	args.abort = true;
}