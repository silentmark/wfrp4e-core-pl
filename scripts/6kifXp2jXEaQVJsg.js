let useWard = await Dialog.wait({
	title : this.effect.name,
	content : `<p>Czy wziąć pod uwagę Ochronę otrzymaną z: <strong>${this.effect.name}</strong>?`,
	buttons : {
		yes : {
			label : "Tak",
			callback: () => {
				return true;
			}
		},
		no : {
			label: "Nie",
			callback: () => {
				return false;
			}
		}
	}
})

if (useWard)
	args.ward = 9;