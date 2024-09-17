//*** Klątwa porażającego bólu
if (!["rLeg", "lLeg"].includes(this.effect.getFlag("wfrp4e", "location")))
	return true;

if (args.options.dodge)
{
	args.abort = true;
	this.script.notification("Nie można unikać!")
}
return ["t", "int", "wp", "fel"].includes(args.characteristic)