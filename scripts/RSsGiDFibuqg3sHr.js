let diseaseIndex = game.packs
.filter(i => i.metadata.type == "Item")
.reduce((acc, pack) => acc.concat(pack.index.contents), [])
.filter(i => i.type == "disease")
.map(i => {
	i.id = i._id
	return i
})

let choice = await ItemDialog.create(diseaseIndex , 1, "Wybierz Chorobę");

if (choice[0])
{
	await this.item.updateSource({"system.specification.value" : choice[0].name})
}