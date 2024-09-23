//*** Błogosławieństwo Nieustępliwości
if (!this.actor.effects.find(e => e.isCondition))
{
	return this.script.notification("Aktor nie posiada żadnych Stanów")
}

let choice = await ItemDialog.create(this.actor.effects.filter(i => i.isCondition), 1, "Wybierz Stan")

if (choice[0])
{
	this.actor.removeCondition(choice[0].conditionId)
}
