let halve;
if (args.opposedTest.attackerTest.item?.type != "spell")
{
    halve = await foundry.applications.api.DialogV2.confirm({window : {title : this.effect.name}, content : "Zmniejszyć obrażenia o połowę? (Zmniejsza obrażenia zadane od ognia o połowę)"})
}
else
{
    halve = args.opposedTest.attackerTest.item?.system.lore?.value == "fire";
}

if (halve)
{
    args.totalWoundLoss /= 2;
    args.modifiers.other.push({label : this.effect.name, details : "Zmniejszono o połowę", value : "× 0.5"})
}