let wounds = this.actor.status.wounds.value;
let max = this.actor.status.wounds.max;


if (wounds === 0)
  return ui.notifications.error("Brak efektu, ponieważ Żywotności wynosi 0, zużyto dawkę")
if (wounds === max)
  return ui.notifications.error("Brak efektu, ponieważ Żywotności wynosi już max, zużyto dawkę")


let tbonus = this.actor.characteristics.t.bonus;
let missing = max - wounds;
let recovered = missing < tbonus ? missing : tbonus;

this.actor.modifyWounds(recovered);
return ui.notifications.notify(`Wyleczono ${recovered} Żywotności`);
