let halve;
if (args.opposedTest.attackerTest.item?.type != "spell")
{
    halve = await foundry.applications.api.DialogV2.confirm({window : {title : this.effect.name}, content : "Obrażenia obniżone o połowę? (Zmniejsza obrażenia, które nie pochodzą od ognia, zimna i magii)"})
}
else
{
    halve = false;
}

if (halve)
{
    args.totalWoundLoss /= 2;
    args.modifiers.other.push({label : this.effect.name, details : "Zmniejszono o Połowę", value : "× 0.5"})
}