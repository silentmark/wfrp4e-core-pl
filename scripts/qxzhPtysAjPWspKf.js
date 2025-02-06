if (this.actor.has(game.i18n.localize("NAME.Undead")) || this.actor.has(game.i18n.localize("NAME.Daemonic")))
{
    this.script.notification(`Nie może wejśc ze względu na: ${this.effect.name}!`);
}