//*** Zimowy chłód
if (this.actor.status.advantage.value && !this.actor.sameSideAs(this.effect.sourceActor))
{
    this.actor.modifyAdvantage(-1);
    this.script.scriptNotification(`${this.actor.name}: utracono 1 Punkt Przewag`);
}