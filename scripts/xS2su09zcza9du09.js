if (["Pomniejsze", "Umiarkowane", "Poważne"].includes(this.item.system.specification.value))
{
	return
}

let choice = await ItemDialog.create(ItemDialog.objectToArray({minor : "Pomniejsze", moderate : "Umiarkowane", major : "Poważne"}, this.item.img), 1, "Wybierz poziom Zepsucia");

this.item.updateSource({"system.specification.value" : choice[0]?.name || ""})