let invocationBonus = isNaN(parseInt(this.item.flags.wfrp4e?.invocationBonus)) ? this.actor.characteristics.fel.bonus : parseInt(this.item.flags.wfrp4e?.invocationBonus);
let value = await ValueDialog.create(`Podaj liczbę dostępnych bonusów (domyślnie Bonus z Ogd - ${this.actor.characteristics.fel.bonus} `, this.effect.name, invocationBonus);
if (parseInt(value) !== NaN){
    this.item.setFlag("wfrp4e", "invocationBonus", parseInt(value));
}