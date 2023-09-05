Hooks.on("init", () => {
	if (typeof Babele !== "undefined") {
		Babele.get().register({
			module: "wfrp4e-core-pl",
			lang: "pl",
			dir: "compendium",
		});
	}

	Babele.get().loadTranslations = async function () {
        const lang = game.settings.get('core', 'language');
        const directory = game.settings.get('babele', 'directory');
        const directories = this.modules
            .filter(module => module.lang === lang)
            .map(module => `modules/${module.module}/${module.dir}`);

        if(directory && directory.trim && directory.trim()) {
            directories.push(`${directory}/${lang}`);
        }

        if(this.systemTranslationsDir) {
            directories.push(`systems/${game.system.id}/${this.systemTranslationsDir}/${lang}`);
        }

        let files = [];
        if(game.user.hasPermission('FILES_BROWSE')) {
            for(let i=0; i<directories.length; i++) {
                try {
                    let result = await FilePicker.browse("data", directories[i]);
                    result.files.forEach(file => files.push(file));
                } catch (err) {
                    console.warn("Babele: " + err)
                }
            }
            if(game.user.isGM) {
                game.settings.set('babele', 'translationFiles', files);
            }
        } else {
            files = game.settings.get('babele', 'translationFiles');
        }

        let allTranslations = [];
        if(files.length === 0) {
            console.log(`Babele | no compendium translation files found for ${lang} language.`);
        } else {
            for ( let metadata of game.data.packs ) {
                const collection = this.getCollection(metadata);
                if(this.supported(metadata)) {
                    const urls = files.filter(file => file.endsWith(`${collection}.json`));
                    if(urls.length === 0) {
                        console.log(`Babele | no translation file found for ${collection} pack`);
                    } else {
                        const [translations] = await Promise.all(
                                [Promise.all(urls.map((url) => fetch(url).then((r) => r.json()).catch(e => {})))]
                        );
						
						let translation = {};
						translations.forEach(t => {mergeObject(translation, t)})
						console.log(`Babele | translation for ${collection} pack successfully loaded`);
						allTranslations.push(mergeObject(translation, { collection: collection }));
                    }
                }
            }
        }
        return allTranslations;
    }


	Babele.get().registerConverters({
		effects: (effects, translations) => {
			return effects.map((data) => {
				//TODO: map script.
				const translation = translations[data.name] || translations[data.id] || translations[data._id];
				if (translations && translation) {
				 	const newEffect = mergeObject(
						data,
						mergeObject(translation, { translated: true }),
					);
					if (translation.script) {
						newEffect.flags.wfrp4e.script = translation.script;
					}
					if (translation.secondaryScript) {
						newEffect.flags.wfrp4e.secondaryEffect.script = translation.secondaryScript;
					}
					if (translation.description) {
						newEffect.flags.wfrp4e.effectData.description = translation.description;
					}
					return newEffect;
				}
				return data;
			});
		},

		notes: (notes, translations) => {
			// TODO: notes on map.
			return notes.map((data) => {
				const translation = translations[data.id] ?? translations[data._id];
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
			const toTranslate = translatedItems.filter(x=> translations[x.id] != null || translations[x._id] != null)

			for (let i = 0; i < toTranslate.length; i++) {
				const item = toTranslate[i];
				const pack = game.babele.packs.find(pack => pack.translated && pack.hasTranslation(item));
				if(pack) {
					let translatedItem = pack.translations[item.name];
					const translatedData = dynamicMapping.map(item, translatedItem);
					translatedItem = mergeObject(item, translatedData);
					translatedItem.system.specification.value = (translations[translatedItem.id] ?? translations[translatedItem._id]).specification;
					if ((translations[translatedItem.id] ?? translations[translatedItem._id]).tests) {
						translatedItem.system.tests.value = (translations[translatedItem.id] ?? translations[translatedItem._id]).tests;
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