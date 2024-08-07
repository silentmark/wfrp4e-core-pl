//*** Zniszczenie pomniejszego demona
let key = await ItemDialog.create(ItemDialog.objectToArray(game.wfrp4e.config.characteristics, this.effect.img), 1, "Wybierz Cechę");

this.effect.updateSource({changes : [{key : `system.characteristics.${key[0].id}.modifier`, mode : 2, value : 10}]})