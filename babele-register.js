Hooks.on("init", () => {
	if (typeof Babele !== "undefined") {
		Babele.get().register({
			module: "wfrp4e-core-pl",
			lang: "pl",
			dir: "compendium",
		});
	}

	Babele.get().registerConverters({
		effects: (effects, translations) => {
			return effects.map((data) => {
				//TODO: map script.
				const translation = translations[data.label] || translations[data._id];
				if (translations && translation) {
					return mergeObject(
						data,
						mergeObject(translation, { translated: true }),
					);
				}

				return data;
			});
		},

		notes: (notes, translations) => {
			// TODO: notes on map.
			return notes.map((data) => {
				const translation = translations[data._id];
				if (translations && translation) {
					return mergeObject(
						data,
						mergeObject(translation, { translated: true }),
					);
				}
				return data;
			});
		},
	});
});
