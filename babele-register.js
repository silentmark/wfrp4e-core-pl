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
				 	const newEffect = mergeObject(
						data,
						mergeObject(translation, { translated: true }),
					);
					if (translation.script?.indexOf("await ") > -1) {
						newEffect.flags.wfrp4e.isAsync = true;
					}
					if (translation.script) {
						newEffect.flags.wfrp4e.script = translation.script;
					}
					return newEffect;
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
		
		bestiary_traits: (items, translations) => {        
			const defaultMethod = Converters.fromPack();
			const translatedItems = defaultMethod(items, translations);
			const dynamicMapping = new CompendiumMapping("Item", null);
			const toTranslate = translatedItems.filter(x=> translations[x._id] != null)

			for (let i = 0; i < toTranslate.length; i++) {
				const item = toTranslate[i];
				const pack = game.babele.packs.find(pack => pack.translated && pack.hasTranslation(item));
				if(pack) {
					let translatedItem = pack.translations[item.name];
					const translatedData = dynamicMapping.map(item, translatedItem);
					translatedItem = mergeObject(item, translatedData);
					translatedItem.system.specification.value = translations[translatedItem._id].specification;
					if (translations[translatedItem._id].tests) {
						translatedItem.system.tests.value = translations[translatedItem._id].tests;
					}
				}
			}
			return translatedItems;
		  }
	});
});

(function disableCache() {
	console.log("BABELE: Disable cache");
	CompendiumCollection.CACHE_LIFETIME_SECONDS = 1;
})();


Hooks.on("ready", () => {
	setTimeout(() => {
		console.log("BABELE: Enable cache");
		CompendiumCollection.CACHE_LIFETIME_SECONDS = 300;

		game.packs.forEach(p => {
			p._flush = foundry.utils.debounce(p.clear.bind(p), CompendiumCollection.CACHE_LIFETIME_SECONDS * 1000);
		});
	}, 1000);
});