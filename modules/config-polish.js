Hooks.on("setup", async function () {
	const WFRP4E = {};

	CONFIG.JournalEntry.noteIcons = {
		Marker: "systems/wfrp4e/icons/buildings/point_of_interest.png",
		"Wioska 1": "systems/wfrp4e/icons/buildings/village1.png",
		"Wioska 2": "systems/wfrp4e/icons/buildings/village2.png",
		"Wioska 3": "systems/wfrp4e/icons/buildings/village3.png",
		"Imperialne Koszary": "systems/wfrp4e/icons/buildings/empire_barracks.png",
		"Nawiedzony Las": "systems/wfrp4e/icons/buildings/haunted_wood.png",
		Aptekarz: "systems/wfrp4e/icons/buildings/apothecary.png",
		Droga: "systems/wfrp4e/icons/buildings/roads.png",
		"Obóz Orków": "systems/wfrp4e/icons/buildings/orc_city.png",
		Cmentarz: "systems/wfrp4e/icons/buildings/cemetery.png",
		"Krasnoludzkie Piwo": "systems/wfrp4e/icons/buildings/dwarf_beer.png",
		"Bretońskie Miasto 1": "systems/wfrp4e/icons/buildings/bret_city1.png",
		"Bretońskie Miasto 2": "systems/wfrp4e/icons/buildings/bret_city2.png",
		"Bretońskie Miasto 3": "systems/wfrp4e/icons/buildings/bret_city3.png",
		"Imperialne Miasto 1": "systems/wfrp4e/icons/buildings/empire_city1.png",
		"Imperialne Miasto 2": "systems/wfrp4e/icons/buildings/empire_city2.png",
		"Imperialne Miasto 3": "systems/wfrp4e/icons/buildings/empire_city3.png",
		"Kislevickie Miasto 1": "systems/wfrp4e/icons/buildings/kislev_city1.png",
		"Kislevickie Miasto 2": "systems/wfrp4e/icons/buildings/kislev_city2.png",
		"Kislevickie Miasto 3": "systems/wfrp4e/icons/buildings/kislev_city3.png",
		"Wzgórze Zamkowe 1": "systems/wfrp4e/icons/buildings/castle_hill1.png",
		"Wzgórze Zamkowe 2": "systems/wfrp4e/icons/buildings/castle_hill2.png",
		"Wzgórze Zamkowe 3": "systems/wfrp4e/icons/buildings/castle_hill3.png",
		"Wzgórze z Wieżą": "systems/wfrp4e/icons/buildings/tower_hill.png",
		"Nawiedzone Wzgórze": "systems/wfrp4e/icons/buildings/haunted_hill.png",
		Jedzenie: "systems/wfrp4e/icons/buildings/food.png",
		"Jedzenie 2": "systems/wfrp4e/icons/buildings/food2.png",
		Dwór: "systems/wfrp4e/icons/buildings/court.png",
		"Jaskinia 1": "systems/wfrp4e/icons/buildings/cave1.png",
		"Jaskinia 2": "systems/wfrp4e/icons/buildings/cave2.png",
		"Jaskinia 3": "systems/wfrp4e/icons/buildings/cave3.png",
		"Miejsce Kultu Bretonii":
			"systems/wfrp4e/icons/buildings/bretonnia_worship.png",
		"Miejsce Kultu Chaosu": "systems/wfrp4e/icons/buildings/chaos_worship.png",
		Menhiry: "systems/wfrp4e/icons/buildings/standing_stones.png",
		"Leśne Elfy 1": "systems/wfrp4e/icons/buildings/welves1.png",
		"Leśne Elfy 2": "systems/wfrp4e/icons/buildings/welves2.png",
		"Leśne Elfy 3": "systems/wfrp4e/icons/buildings/welves3.png",
		Stajnia: "systems/wfrp4e/icons/buildings/stables.png",
		"Krasnoludzka Twierdza 1": "systems/wfrp4e/icons/buildings/dwarf_hold1.png",
		"Krasnoludzka Twierdza 2": "systems/wfrp4e/icons/buildings/dwarf_hold2.png",
		"Krasnoludzka Twierdza 3": "systems/wfrp4e/icons/buildings/dwarf_hold3.png",
		Farma: "systems/wfrp4e/icons/buildings/farms.png",
		Kowal: "systems/wfrp4e/icons/buildings/blacksmith.png",
		Strażnica: "systems/wfrp4e/icons/buildings/guards.png",
		Magia: "systems/wfrp4e/icons/buildings/magic.png",
		Metal: "systems/wfrp4e/icons/buildings/metal.png",
		"Góra 1": "systems/wfrp4e/icons/buildings/mountains1.png",
		"Góra 2": "systems/wfrp4e/icons/buildings/mountains2.png",
		"Mury Zamkowe": "systems/wfrp4e/icons/buildings/castle_wall.png",
		Orki: "systems/wfrp4e/icons/buildings/orcs.png",
		"Portal Chaosu": "systems/wfrp4e/icons/buildings/chaos_portal.png",
		"Zajazd 1": "systems/wfrp4e/icons/buildings/inn1.png",
		"Zajazd 2": "systems/wfrp4e/icons/buildings/inn2.png",
		Bagno: "systems/wfrp4e/icons/buildings/swamp.png",
		Zwoje: "systems/wfrp4e/icons/buildings/scroll.png",
		Port: "systems/wfrp4e/icons/buildings/port.png",
		"Obóz Zwierzoludzi 1": "systems/wfrp4e/icons/buildings/beastmen_camp1.png",
		"Obóz Zwierzoludzi 2": "systems/wfrp4e/icons/buildings/beastmen_camp2.png",
		Ruiny: "systems/wfrp4e/icons/buildings/ruins.png",
		Tartak: "systems/wfrp4e/icons/buildings/lumber.png",
		Sigmar: "systems/wfrp4e/icons/buildings/sigmar_worship.png",
		Świątynia: "systems/wfrp4e/icons/buildings/temple.png",
		Płótna: "systems/wfrp4e/icons/buildings/textile.png",
		"Wieża 1": "systems/wfrp4e/icons/buildings/tower1.png",
		"Wieża 2": "systems/wfrp4e/icons/buildings/tower2.png",
		"Wieża Czarownika": "systems/wfrp4e/icons/buildings/wizard_tower.png",
		Ulric: "systems/wfrp4e/icons/buildings/ulric_worship.png",
	};

	WFRP4E.species = {
		human: "Człowiek",
		dwarf: "Krasnolud",
		halfling: "Niziołek",
		helf: "Wysoki Elf",
		welf: "Leśny Elf",
	};

	WFRP4E.subspecies = {
		human: {
			reiklander: {
				name: "Reiklandczyk",
				skills: [
					"Opieka nad Zwierzętami",
					"Charyzma",
					"Opanowanie",
					"Wycena",
					"Plotkowanie",
					"Targowanie",
					"Język (bretoński)",
					"Język (Jałowej Krainy)",
					"Dowodzenie",
					"Wiedza (Reikland)",
					"Broń Biała (Podstawowa)",
					"Broń Zasięgowa (Łuk)",
				],
				talents: ["Wróżba Losu", "Błyskotliwość, Charyzmatyczny", 3],
			},
		},
	};

	WFRP4E.speciesCharacteristics = {
		human: {
			ws: "2d10+20",
			bs: "2d10+20",
			s: "2d10+20",
			t: "2d10+20",
			i: "2d10+20",
			ag: "2d10+20",
			dex: "2d10+20",
			int: "2d10+20",
			wp: "2d10+20",
			fel: "2d10+20",
		},
		dwarf: {
			ws: "2d10+30",
			bs: "2d10+20",
			s: "2d10+20",
			t: "2d10+30",
			i: "2d10+20",
			ag: "2d10+10",
			dex: "2d10+30",
			int: "2d10+20",
			wp: "2d10+40",
			fel: "2d10+10",
		},
		halfling: {
			ws: "2d10+10",
			bs: "2d10+30",
			s: "2d10+10",
			t: "2d10+20",
			i: "2d10+20",
			ag: "2d10+20",
			dex: "2d10+30",
			int: "2d10+20",
			wp: "2d10+30",
			fel: "2d10+30",
		},
		helf: {
			ws: "2d10+30",
			bs: "2d10+30",
			s: "2d10+20",
			t: "2d10+20",
			i: "2d10+40",
			ag: "2d10+30",
			dex: "2d10+30",
			int: "2d10+30",
			wp: "2d10+30",
			fel: "2d10+20",
		},
		welf: {
			ws: "2d10+30",
			bs: "2d10+30",
			s: "2d10+20",
			t: "2d10+20",
			i: "2d10+40",
			ag: "2d10+30",
			dex: "2d10+30",
			int: "2d10+30",
			wp: "2d10+30",
			fel: "2d10+20",
		},
	};

	WFRP4E.speciesSkills = {
		human: [
			"Opieka nad Zwierzętami",
			"Charyzma",
			"Opanowanie",
			"Wycena",
			"Plotkowanie",
			"Targowanie",
			"Język (bretoński)",
			"Język (Jałowej Krainy)",
			"Dowodzenie",
			"Wiedza (Reikland)",
			"Broń Biała (Podstawowa)",
			"Broń Zasięgowa (Łuk)",
		],
		dwarf: [
			"Mocna Głowa",
			"Opanowanie",
			"g",
			"Występy (Gawędziarstwo)",
			"Wycena",
			"Zastraszanie",
			"Język (Khazalid)",
			"Wiedza (Nains)",
			"Wiedza (Geologia)",
			"Wiedza (Metalurgia)",
			"Broń Biała (Podstawowa)",
			"Rzemiosło (Dowolne)",
		],
		halfling: [
			"Charyzma",
			"Mocna Głowa",
			"Hazard",
			"Unik",
			"Zwinne Palce",
			"Intuicja",
			"Język (Mootland)",
			"Wiedza (Reikland)",
			"Percepcja",
			"Targowanie",
			"Skradanie (Dowolne)",
			"Rzemiosło (Kucharz)",
		],
		helf: [
			"Broń Biała (Podstawowa)",
			"Broń Zasięgowa (Łuk)",
			"Dowodzenie",
			"Język (Eltharin)",
			"Muzyka (Dowolny instrument)",
			"Nawigacja",
			"Opanowanie",
			"Pływanie",
			"Percepcja",
			"Wycena",
			"Występy (Śpiewanie)",
			"Żeglarstwo",
		],
		welf: [
			"Atletyka",
			"Broń Biała (Podstawowa)",
			"Broń Zasięgowa (Łuk)",
			"Język (Eltharin)",
			"Odporność",
			"Percepcja",
			"Skradanie",
			"Sztuka Przetrwania",
			"Tropienie",
			"Wspinaczka",
			"Występy (Śpiewanie)",
			"Zastraszanie",
		],
	};

	WFRP4E.speciesTalents = {
		human: ["Wróżba Losu", "Błyskotliwość, Charyzmatyczny", 3],
		dwarf: [
			"Odporność na Magię",
			"Widzenie w Ciemności",
			"Czytanie/Pisanie, Nieustępliwy",
			"Odporność Psychiczna, Nieugięty",
			"Tragarz",
			0,
		],
		halfling: [
			"Wyczulony Zmysł (Smak)",
			"Widzenie w Ciemności",
			"Odporny na (Chaos)",
			"Mały",
			2,
		],
		helf: [
			"Wyczulony Zmysł (Wzrok)",
			"Błyskotliwość, Zimna Krew",
			"Widzenie w Ciemności",
			"Szósty Zmysł, Percepcja Magiczna",
			"Czytanie/Pisanie",
			0,
		],
		welf: [
			"Wyczulony Zmysł (Wzrok)",
			"Twardziel, Percepcja Magiczna",
			"Widzenie w Ciemności",
			"Czytanie/Pisanie, Niezwykle Odporny",
			"Włóczykij",
			0,
		],
	};

	WFRP4E.classTrappings = {
		Uczeni: "ClassTrappings.Academics",
		Uczony: "ClassTrappings.Academics",
		Mieszczanie: "ClassTrappings.Burghers",
		Mieszczanin: "ClassTrappings.Burghers",
		Dworzanie: "ClassTrappings.Courtiers",
		Dworzanin: "ClassTrappings.Courtiers",
		Pospólstwo: "ClassTrappings.Peasants",
		Wędrowcy: "ClassTrappings.Rangers",
		Wędrowiec: "ClassTrappings.Rangers",
		Wodniacy: "ClassTrappings.Riverfolk",
		Wodniak: "ClassTrappings.Riverfolk",
		Łotry: "ClassTrappings.Rogues",
		Łotr: "ClassTrappings.Rogues",
		Wojownicy: "ClassTrappings.Warriors",
		Wojownik: "ClassTrappings.Warriors",
	};

	// Weapon Group Descriptions
	WFRP4E.weaponGroupDescriptions = {
		basic: "Podstawowa",
		cavalry: "WFRP4E.GroupDescription.Cavalry",
		fencing: "Szermiercza",
		brawling: "Bijatyka",
		flail: "WFRP4E.GroupDescription.Flail",
		parry: "WFRP4E.GroupDescription.Parry",
		polearm: "Drzewcowa",
		twohanded: "Dwuręczna",
		blackpowder: "WFRP4E.GroupDescription.Blackpowder",
		bow: "Łuk",
		crossbow: "WFRP4E.GroupDescription.Crossbow",
		entangling: "Pętającą",
		engineering: "WFRP4E.GroupDescription.Engineering",
		explosives: "WFRP4E.GroupDescription.Explosives",
		sling: "Proca",
		throwing: "WFRP4E.GroupDescription.Throwing",
	};

	// Weapon reach descriptions
	WFRP4E.reachDescription = {
		personal: "WFRP4E.Reach.PersonalDescription",
		vshort: "WFRP4E.Reach.VShortDescription",
		short: "WFRP4E.Reach.ShortDescription",
		average: "WFRP4E.Reach.AverageDescription",
		long: "WFRP4E.Reach.LongDescription",
		vLong: "WFRP4E.Reach.VLongDescription",
		massive: "WFRP4E.Reach.MassiveDescription",
	};

	// Weapon Quality Descriptions (Used in dropdown info)
	WFRP4E.qualityDescriptions = {
		accurate: "WFRP4E.Properties.Accurate",
		blackpowder: "WFRP4E.Properties.Blackpowder",
		blast: "WFRP4E.Properties.Blast",
		damaging: "WFRP4E.Properties.Damage",
		defensive: "WFRP4E.Properties.Defensive",
		distract: "WFRP4E.Properties.Distract",
		entangle: "WFRP4E.Properties.Entangle",
		fast: "WFRP4E.Properties.Fast",
		hack: "WFRP4E.Properties.Hack",
		impact: "WFRP4E.Properties.Impact",
		impale: "WFRP4E.Properties.Impale",
		penetrating: "WFRP4E.Properties.Penetrating",
		pistol: "WFRP4E.Properties.Pistol",
		precise: "WFRP4E.Properties.Precise",
		pummel: "WFRP4E.Properties.Pummel",
		repeater: "WFRP4E.Properties.Repeater",
		shield: "WFRP4E.Properties.Shield",
		trapblade: "WFRP4E.Properties.Trapblade",
		unbreakable: "WFRP4E.Properties.Unbreakable",
		wrap: "WFRP4E.Properties.Wrap",
		flexible: "WFRP4E.Properties.Flexible",
		impenetrable: "WFRP4E.Properties.Impenetrable",
		durable: "WFRP4E.Properties.Durable",
		fine: "WFRP4E.Properties.Fine",
		lightweight: "WFRP4E.Properties.Lightweight",
		practical: "WFRP4E.Properties.Practical",
		slash: "WFRP4E.Properties.Slash",
	};

	// Weapon Flaw Descriptions (used in dropdown info)
	WFRP4E.flawDescriptions = {
		dangerous: "WFRP4E.Properties.Dangerous",
		imprecise: "WFRP4E.Properties.Imprecise",
		reload: "WFRP4E.Properties.Reload",
		slow: "WFRP4E.Properties.Slow",
		tiring: "WFRP4E.Properties.Tiring",
		undamaging: "WFRP4E.Properties.Undamaging",
		partial: "WFRP4E.Properties.Partial",
		weakpoints: "WFRP4E.Properties.Weakpoints",
		ugly: "WFRP4E.Properties.Ugly",
		shoddy: "WFRP4E.Properties.Shoddy",
		unreliable: "WFRP4E.Properties.Unreliable",
		bulky: "WFRP4E.Properties.Bulky",
	};

	WFRP4E.loreEffectDescriptions = {
		petty: "None",
		beasts: "WFRP4E.LoreDescription.Beasts",
		death: "WFRP4E.LoreDescription.Death",
		fire: "WFRP4E.LoreDescription.Fire",
		heavens: "WFRP4E.LoreDescription.Heavens",
		metal: "WFRP4E.LoreDescription.Metal",
		life: "WFRP4E.LoreDescription.Life",
		light: "WFRP4E.LoreDescription.Light",
		shadow: "WFRP4E.LoreDescription.Shadow",
		hedgecraft: "WFRP4E.LoreDescription.Hedgecraft",
		witchcraft: "WFRP4E.LoreDescription.Witchcraft",
		daemonology: "",
		necromancy: "",
		nurgle: "",
		slaanesh: "",
		tzeentch: "",
	};

	WFRP4E.conditionDescriptions = {
		ablaze: "WFRP4E.Conditions.Ablaze",
		bleeding: "WFRP4E.Conditions.Bleeding",
		blinded: "WFRP4E.Conditions.Blinded",
		broken: "WFRP4E.Conditions.Broken",
		deafened: "WFRP4E.Conditions.Deafened",
		entangled: "WFRP4E.Conditions.Entangled",
		fatigued: "WFRP4E.Conditions.Fatigued",
		poisoned: "WFRP4E.Conditions.Poisoned",
		prone: "WFRP4E.Conditions.Prone",
		stunned: "WFRP4E.Conditions.Stunned",
		surprised: "WFRP4E.Conditions.Surprised",
		unconscious: "WFRP4E.Conditions.Unconscious",
		grappling: "WFRP4E.Conditions.Grappling",
		fear: "WFRP4E.Conditions.Fear",
		engaged: "WFRP4E.Conditions.Engaged",
	};

	WFRP4E.symptoms = {
        "blight": "WFRP4E.Symptom.Blight",
        "buboes": "WFRP4E.Symptom.Buboes",
        "convulsions": "WFRP4E.Symptom.Convulsions",
        "coughsAndSneezes": "WFRP4E.Symptom.CoughsandSneezes",
        "fever": "WFRP4E.Symptom.Fever",
        "flux": "WFRP4E.Symptom.Flux",
        "gangrene": "WFRP4E.Symptom.Gangrene",
        "lingering": "WFRP4E.Symptom.Lingering",
        "malaise": "WFRP4E.Symptom.Malaise",
        "nausea": "WFRP4E.Symptom.Nausea",
        "pox": "WFRP4E.Symptom.Pox",
        "wounded": "WFRP4E.Symptom.Wounded",
		"delirium": "Delirium",
		"swelling": "Obrzęk",
	};

	WFRP4E.symptomDescriptions = {
		blight: "WFRP4E.SymptomDescriptions.Blight",
		buboes: "WFRP4E.SymptomDescriptions.Buboes",
		convulsions: "WFRP4E.SymptomDescriptions.Convulsions",
		coughsAndSneezes: "WFRP4E.SymptomDescriptions.CoughsandSneezes",
		fever: "WFRP4E.SymptomDescriptions.Fever",
		flux: "WFRP4E.SymptomDescriptions.Flux",
		gangrene: "WFRP4E.SymptomDescriptions.Gangrene",
		lingering: "WFRP4E.SymptomDescriptions.Lingering",
		malaise: "WFRP4E.SymptomDescriptions.Malaise",
		nausea: "WFRP4E.SymptomDescriptions.Nausea",
		pox: "WFRP4E.SymptomDescriptions.Pox",
		wounded: "WFRP4E.SymptomDescriptions.Wounded",
		delirium: "WFRP4E.SymptomDescriptions.Delirium",
	};

	WFRP4E.symptomTreatment = {
		blight: "WFRP4E.SymptomTreatment.Blight",
		buboes: "WFRP4E.SymptomTreatment.Buboes",
		convulsions: "WFRP4E.SymptomTreatment.Convulsions",
		coughsAndSneezes: "WFRP4E.SymptomTreatment.CoughsandSneezes",
		fever: "WFRP4E.SymptomTreatment.Fever",
		flux: "WFRP4E.SymptomTreatment.Flux",
		gangrene: "WFRP4E.SymptomTreatment.Gangrene",
		lingering: "WFRP4E.SymptomTreatment.Lingering",
		malaise: "WFRP4E.SymptomTreatment.Malaise",
		nausea: "WFRP4E.SymptomTreatment.Nausea",
		pox: "WFRP4E.SymptomTreatment.Pox",
		wounded: "WFRP4E.SymptomTreatment.Wounded",
		delirium: "WFRP4E.SymptomTreatment.Delirium",
	};

	WFRP4E.loreEffects = {
		beasts: {
			name: "Tradycja Zwierząt",
			icon: "modules/wfrp4e-core/icons/spells/beasts.png",
			transfer: true,
			flags: {
				wfrp4e: {
					effectApplication: "actor",
					effectTrigger: "invoke",
					lore: true,
					script: `
                        let value = 1
                        let name = this.actor.prototypeToken.name                        
                        if (game.user.isGM) {
                            game.user.targets.forEach(t => {
                                t.actor.applyFear(value, name)
                            })
                            game.user.updateTokenTargets([]);
							game.user.broadcastActivity({targets:[]});
                        }
                        else {
                            game.wfrp4e.utility.postFear(value, name)
                        }
                    `,
				},
			},
		},
		death: {
			name: "Tradycja Śmierci",
			icon: "modules/wfrp4e-core/icons/spells/death.png",
			transfer: true,
			flags: {
				wfrp4e: {
					effectApplication: "apply",
					effectTrigger: "oneTime",
					lore: true,
					script: `
                        if (this.actor.isOwner) {
                            args.actor.addCondition("fatigued")
                        }`,
				},
			},
		},
		fire: {
			name: "Tradycja Ognia",
			icon: "modules/wfrp4e-core/icons/spells/fire.png",
			transfer: true,
			flags: {
				wfrp4e: {
					effectApplication: "apply",
					effectTrigger: "oneTime",
					lore: true,
					script: `
                        if (this.actor.isOwner) {
                            args.actor.addCondition("ablaze")
                        }`,
				},
			},
		},
		heavens: {
			name: "Tradycja Niebios",
			icon: "modules/wfrp4e-core/icons/spells/heavens.png",
			transfer: true,
			flags: {
				wfrp4e: {
					effectApplication: "damage",
					effectTrigger: "applyDamage",
					lore: true,
					script: `
                    let applyAP = (args.damageType == game.wfrp4e.config.DAMAGE_TYPE.IGNORE_TB || args.damageType == game.wfrp4e.config.DAMAGE_TYPE.NORMAL)
                    
                    let AP = args.AP
                    let metalValue = 0;
                    for (let layer of AP.layers) {
                       if (layer.metal) {
                          metalValue += layer.value
                       }
                    }
                    
                    if (applyAP) {
                    
                       args.totalWoundLoss +=  metalValue
                       let newUsed = AP.used - metalValue;
                    
                       let apIndex = args.messageElements.findIndex(i => i.includes(game.i18n.localize("AP")))
                       args.messageElements[apIndex] = newUsed + "/" + AP.value + " " + game.i18n.localize("AP")
                    }
                        `,
				},
			},
		},
		metal: {
			name: "Tradycja Metalu",
			icon: "modules/wfrp4e-core/icons/spells/metal.png",
			transfer: true,
			flags: {
				wfrp4e: {
					effectApplication: "damage",
					effectTrigger: "applyDamage",
					lore: true,
					script: `
                    let applyAP = (args.damageType == game.wfrp4e.config.DAMAGE_TYPE.IGNORE_TB || args.damageType == game.wfrp4e.config.DAMAGE_TYPE.NORMAL)
    
                    let AP = args.AP
                    let metalValue = 0;
                    for (let layer of AP.layers) {
                       if (layer.metal) {
                          metalValue += layer.value
                       }
                    }
                    
                    
                    if (metalValue)
                        args.messageElements.push(\`-\${metalValue} Metalowy Pancerz\`)
                    args.totalWoundLoss += metalValue
                    
                    if (applyAP) {
                    
                       args.totalWoundLoss +=  metalValue
                       let newUsed = AP.used - metalValue;
                    
                       let apIndex = args.messageElements.findIndex(i => i.includes(game.i18n.localize("AP")))
                       args.messageElements[apIndex] = newUsed + "/" + AP.value + " " + game.i18n.localize("AP")
                    }
                    `,
				},
			},
		},
		life: {
			name: "Tradycja Życia",
			icon: "modules/wfrp4e-core/icons/spells/life.png",
			transfer: true,
			flags: {
				wfrp4e: {
					effectApplication: "apply",
					effectTrigger: "oneTime",
					lore: true,
					script: `
                    fromUuid(this.effect.origin).then(caster => {
                        if (this.actor.isOwner) {
                            if (!this.actor.has(game.i18n.localize("NAME.Daemonic")) && !this.actor.has(game.i18n.localize("NAME.Undead"))) {
                                let bleeding = this.actor.hasCondition("bleeding")
                                let fatigued = this.actor.hasCondition("fatigued")
                                if (bleeding) this.actor.removeCondition("bleeding", bleeding.flags.wfrp4e.value)
                                if (fatigued) this.actor.removeCondition("fatigued", fatigued.flags.wfrp4e.value)
                            }
                            else if (this.actor.has(game.i18n.localize("NAME.Undead"))) {
                                this.actor.applyBasicDamage(caster.system.characteristics.wp.bonus, {damageType : game.wfrp4e.config.DAMAGE_TYPE.IGNORE_ALL});
                            }
                        }
                    });
                        `,
				},
			},
		},
		light: {
			name: "Tradycja Światła",
			icon: "modules/wfrp4e-core/icons/spells/light.png",
			transfer: true,
			flags: {
				wfrp4e: {
					effectApplication: "apply",
					effectTrigger: "oneTime",
					lore: true,
					script: `
                fromUuid(this.effect.origin).then(caster => {
                    if (this.actor.isOwner) {
                        let bleeding = this.actor.addCondition("blinded")
                        if (this.actor.has(game.i18n.localize("NAME.Undead")) || this.actor.has(game.i18n.localize("NAME.Daemonic")))
                            this.actor.applyBasicDamage(caster.system.characteristics.int.bonus, {damageType : game.wfrp4e.config.DAMAGE_TYPE.IGNORE_ALL});
                    }
                })
                    `,
				},
			},
		},
		shadow: {
			name: "Tradycja Cieni",
			icon: "modules/wfrp4e-core/icons/spells/shadow.png",
			transfer: true,
			flags: {
				wfrp4e: {
					effectApplication: "damage",
					effectTrigger: "applyDamage",
					lore: true,
					script: `
                    let applyAP = (args.damageType == game.wfrp4e.config.DAMAGE_TYPE.IGNORE_TB || args.damageType == game.wfrp4e.config.DAMAGE_TYPE.NORMAL)
                    
                    if (applyAP) {
                       let AP = args.AP
                    
                       args.totalWoundLoss += AP.used
                       let apIndex = args.messageElements.findIndex(i => i.includes(game.i18n.localize("AP")))
                       args.messageElements[apIndex] = "0/" + AP.value + " " + game.i18n.localize("AP")
                    }`,
				},
			},
		},
		hedgecraft: {
			name: "Tradycja Guślarstwa",
			icon: "modules/wfrp4e-core/icons/spells/hedgecraft.png",
			transfer: true,
			flags: {
				wfrp4e: {
					effectApplication: "actor",
					effectTrigger: "invoke",
					lore: true,
					script: "",
				},
			},
		},
		witchcraft: {
			name: "Tradycja Czarownictwa",
			icon: "modules/wfrp4e-core/icons/spells/witchcraft.png",
			transfer: true,
			flags: {
				wfrp4e: {
					effectApplication: "apply",
					effectTrigger: "oneTime",
					lore: true,
					script: `
                        if (this.actor.isOwner) {
                            args.actor.addCondition("bleeding")
                        }`,
				},
			},
		},
	};

	WFRP4E.symptomEffects = {
        "WFRP4E.Symptom.Blight": {
			name: "Uwiąd",
			icon: "modules/wfrp4e-core/icons/diseases/disease.png",
			transfer: true,
			flags: {
				wfrp4e: {
					effectApplication: "actor",
					effectTrigger: "invoke",
					symptom: true,
					script: `
                            let difficulty = ""
                            if (this.effect.name.includes("Umiarkowany"))
                                difficulty = "easy"
                            else if (this.effect.name.includes("Poważny"))
                                difficulty = "average"
                            else
                                difficulty = "veasy"
        
                            if (this.actor.isOwner) {
                                args.actor.setupSkill(game.i18n.localize("NAME.Endurance"), {context : {failure : args.actor.name + " umiera z powodu Uwiądu"}, absolute: {difficulty}, appendTitle : " - Uwiąd"}).then(async test => {
                                    await test.roll();
                                    if (test.result.outcome == "failure")
                                        await args.actor.addCondition("dead");
                                    }
                                });
                            }`,
				},
			},
		},
        "WFRP4E.Symptom.Buboes": {
			name: "Dymienica",
			icon: "modules/wfrp4e-core/icons/diseases/disease.png",
			transfer: true,
			flags: {
				wfrp4e: {
					effectApplication: "actor",
					effectTrigger: "prefillDialog",
					symptom: true,
					script: `
                        let applicableCharacteristics = ["ws", "bs", "s", "fel", "ag", "t", "dex"]
                        if (args.type == "weapon")
                            args.prefillModifiers.modifier -= 10
                        else if (args.type == "characteristic") {
                            if (applicableCharacteristics.includes(args.item))
                                args.prefillModifiers.modifier -= 10
                        }
                        else if (args.type == "skill") {
                            if (applicableCharacteristics.includes(args.item.characteristic.key))
                                args.prefillModifiers.modifier -= 10
                        }
                `,
				},
			},
		},
        "WFRP4E.Symptom.Convulsions": {
			name: "Konwulsje",
			icon: "modules/wfrp4e-core/icons/diseases/disease.png",
			transfer: true,
			flags: {
				wfrp4e: {
					effectApplication: "actor",
					effectTrigger: "prefillDialog",
					symptom: true,
					script: `
                            let modifier = 0
                            if (this.effect.name.includes("Umiarkowany"))
                                modifier = -20
                            else
                                modifier = -10
                            
                            let applicableCharacteristics = ["ws", "bs", "s", "ag", "t", "dex"]
                            if (args.type == "weapon")
                                args.prefillModifiers.modifier += modifier
                            else if (args.type == "characteristic") {
                                if (applicableCharacteristics.includes(args.item))
                                    args.prefillModifiers.modifier += modifier
                            }
                            else if (args.type == "skill") {
                                if (applicableCharacteristics.includes(args.item.characteristic.key))
                                    args.prefillModifiers.modifier += modifier
                            }`,
				},
			},
		},
		"WFRP4E.Symptom.Fever": {
			name: "Gorączka",
			icon: "modules/wfrp4e-core/icons/diseases/disease.png",
			transfer: true,
			flags: {
				wfrp4e: {
					effectApplication: "actor",
					effectTrigger: "prefillDialog",
					symptom: true,
					script: `
                           
                        let applicableCharacteristics = ["ws", "bs", "s", "fel", "ag", "t", "dex"]
        
                        if (args.type == "weapon")
                            args.prefillModifiers.modifier -= 10
                        else if (args.type == "characteristic") {
                            if (applicableCharacteristics.includes(args.item))
                                args.prefillModifiers.modifier -= 10
                        }
                        else if (args.type == "skill") {
                            if (applicableCharacteristics.includes(args.item.characteristic.key))
                                args.prefillModifiers.modifier -= 10
                        }`,
					otherEffects: ["blight", "wounded"],
				},
			},
		},
        "WFRP4E.Symptom.Flux": {
			name: "Biegunka",
			icon: "modules/wfrp4e-core/icons/diseases/disease.png",
			transfer: true,
			flags: {
				wfrp4e: {
					symptom: true,
				},
			},
		},
        "WFRP4E.Symptom.Lingering": {
			name: "Nawroty",
			icon: "modules/wfrp4e-core/icons/diseases/disease.png",
			transfer: true,
			flags: {
				wfrp4e: {
					symptom: true,
				},
			},
		},
        "WFRP4E.Symptom.CoughsandSneezes": {
			name: "Kaszel i katar",
			icon: "modules/wfrp4e-core/icons/diseases/disease.png",
			transfer: true,
			flags: {
				wfrp4e: {
					symptom: true,
				},
			},
		},
        "WFRP4E.Symptom.Gangrene": {
			name: "Gangrena",
			icon: "modules/wfrp4e-core/icons/diseases/disease.png",
			transfer: true,
			flags: {
				wfrp4e: {
					effectApplication: "actor",
					effectTrigger: "prefillDialog",
					symptom: true,
					script: `
                            if (args.type == "characteristic" && args.item == "fel") {
                                if (args.item == "fel")
                                    args.prefillModifiers.modifier -= 10
                            }
                            else if (args.type == "skill") {
                                if (args.item.characteristic.key == "fel")
                                    args.prefillModifiers.modifier -= 10
                            }
                        }`,
				},
			},
		},
        "WFRP4E.Symptom.Malaise": {
			name: "Apatia",
			icon: "modules/wfrp4e-core/icons/diseases/disease.png",
			transfer: true,
			flags: {
				wfrp4e: {
					effectApplication: "actor",
					effectTrigger: "prepareData",
					symptom: true,
					script: `
                        if (game.user.isUniqueGM) {
                            let fatigued = args.actor.hasCondition("fatigued")
                            if (!fatigued) {
                                args.actor.addCondition("fatigued")
                                ui.notifications.notify("Stan Zmęczenia dodany do " + args.actor.name + " który nie może zostać usunięty, dopóki symptom Apatii nie zostanie wyleczony.")
                            }
                        }
                        `,
				},
			},
		},
        "WFRP4E.Symptom.Nausea": {
			name: "Nudności",
			icon: "modules/wfrp4e-core/icons/diseases/disease.png",
			transfer: true,
			flags: {
				wfrp4e: {
					effectApplication: "actor",
					effectTrigger: "rollTest",
					symptom: true,
					script: `
                        if (this.actor.isOwner && args.test.result.outcome == "failure") {
                            let applicableCharacteristics = ["ws", "bs", "s", "fel", "ag", "t", "dex"]
                            if (applicableCharacteristics.includes(args.test.characteristicKey))
                                this.actor.addCondition("stunned")
                        }
                        `,
				},
			},
		},
        "WFRP4E.Symptom.Pox": {
			name: "Wysypka",
			icon: "modules/wfrp4e-core/icons/diseases/disease.png",
			transfer: true,
			flags: {
				wfrp4e: {
					effectApplication: "actor",
					effectTrigger: "prefillDialog",
					symptom: true,
					script: `
                            if (args.type == "characteristic" && args.item == "fel")
                                    args.prefillModifiers.modifier -= 10
                            else if (args.type == "skill") {
                                if (args.item.characteristic.key == "fel")
                                    args.prefillModifiers.modifier -= 10
                            }`,
				},
			},
		},
        "WFRP4E.Symptom.Wounded": {
			name: "Uciążliwa Rana",
			icon: "modules/wfrp4e-core/icons/diseases/disease.png",
			transfer: true,
			flags: {
				wfrp4e: {
					effectApplication: "actor",
					effectTrigger: "invoke",
					symptom: true,
					script: `
                            if (this.actor.isOwner) {
                                args.actor.setupSkill(game.i18n.localize("NAME.Endurance"), {absolute: {difficulty : "average"}}).then(async test => {
                                    await test.roll();
                                    if (test.result.outcome == "failure") {
                                        let disease = await fromUuid("Compendium.wfrp4e-core.diseases.kKccDTGzWzSXCBOb");
                                        args.actor.createEmbeddedDocuments("Item", [disease.toObject()])
                                    }
                                });
                            }`,
				},
			},
		},
	};

	for (const obj in WFRP4E) {
		for (const el in WFRP4E[obj]) {
			if (typeof WFRP4E[obj][el] === "string") {
				WFRP4E[obj][el] = game.i18n.localize(WFRP4E[obj][el]);
			}
		}
	}

	mergeObject(game.wfrp4e.config, WFRP4E);

	game.wfrp4e.config.effectTriggers = {
		invoke: "Wywołanie Ręczne (invoke)",
		oneTime: "Jednorazowe (oneTime)",
		"addItems" : "Dodaj Przedmiot (addItems)",
		dialogChoice: "Wybór z Dialogu (dialogChoice)",
		prefillDialog: "Wypełniony Dialog (prefillDialog)",
		"update" : "Aktualizacja (update)",
		prePrepareData: "Przygotowane wcześniej Dane (prePrepareData)",
		prePrepareItems: "Przygotowany wcześniej Przedmiot Aktora (prePrepareItems)",
		prepareData: "Przygotuj Dane (prepareData)",
		preWoundCalc: "Prekalkulacja Ran (preWoundCalc)",
		woundCalc: "Liczenie Ran (woundCalc)",
		"calculateSize" : "Obilcz Rozmiar (calculateSize)",
		"preAPCalc" : "Przed obliczeniem Pancerza (preAPCalc)",
		"APCalc" : "Oblicz pancerz (APCalc)",
		preApplyDamage: "Aplikuj wstępnie Obrażenia (preApplyDamage)",
		applyDamage: "Aplikuj Obrażenia (applyDamage)",
		preTakeDamage: "Otrzymuj wstępnie Obrażenia (preTakeDamage)",
		takeDamage: "Otrzymuj Obrażenia (takeDamage)",
		preApplyCondition: "Aplikuj wstępnie Stan (preApplyCondition)",
		applyCondition: "Aplikuj Stan (applyCondition)",
		prePrepareItem: "Przygotuj wstępnie Przedmiot (prePrepareItem)",
		prepareItem: "Przygotuj Przedmiot (prepareItem)",
		preRollTest: "Rzut wstępny przed Testem (preRollTest)",
		preRollWeaponTest: "Rzut wstępny przed Testem Broni (preRollWeaponTest)",
		preRollCastTest: "Rzut wstępny przed Testem Rzucenia Zaklęcia (preRollCastTest)",
		preChannellingTest: "Rzut wstępny przed Testem Splątania (preChannellingTest)",
		preRollPrayerTest: "Rzut wstępny przed Testem Modlitwy (preRollPrayerTest)",
		preRollTraitTest: "Rzut wstępny przed Testem Cechy (preRollTraitTest)",
		rollTest: "Rzut na Test (rollTest)",
		rollIncomeTest: "Rzut na Test Zarabiania (rollIncomeTest)",
		rollWeaponTest: "Rzut na Test Broni (rollWeaponTest)",
		rollCastTest: "Rzut na Test Rzucania Zaklęcia (rollCastTest)",
		rollChannellingTest: "Rzut na Test Splątania (rollChannellingTest)",
		rollPrayerTest: "Rzut na Test Modlitwy (rollPrayerTest)",
		rollTraitTest: "Rzut na Test Cechy (rollTraitTest)",
		preOpposedAttacker: "Wstępne Przeciwstawienie Atakującego (preOpposedAttacker)",
		preOpposedDefender: "Wstępne Przeciwstawienie Broniącego (preOpposedDefender)",
		opposedAttacker: "Przeciwstawienie Atakującego (opposedAttacker)",
		opposedDefender: "Przeciwstawienie Broniącego (opposedDefender)",
		calculateOpposedDamage: "Przelicz Obrażenia Przeciwstawne (calculateOpposedDamage)",
		targetPrefillDialog: "Wstępnie wypełniony Dialog Celu (targetPrefillDialog)",
		getInitiativeFormula: "Przejmij Inicjatywę (getInitiativeFormula)",
		startTurn : "Start Turn (startTurn)",
		endTurn: "Koniec Tury (endTurn)",
		endRound: "Koniec Rundy (endRound)",
		endCombat: "Koniec Walki (endCombat)",
	};

	game.wfrp4e.config.effectPlaceholder = {
		invoke: `Ten efekt działa tylko po naciśnięciu przycisku Wywołaj.
        args:
    
        brak`,
		oneTime: `Ten efekt występuje raz, natychmiast po zastosowaniu.
        args:
    
        actor : aktor właściwy dla efektu
        `,

		addItems : 
		`Like Immediate effects, this happens once, but the effect will remain. This lets the effect also delete the added items when the effect is deleted. Can be async.
		args: 
	
		actor : actor who owns the effect
		`,

		prefillDialog: `Ten efekt jest stosowany przed pokazaniem okna dialogowego rzutu i powinien zmienić wartości wstępnie wypełnione w sekcji bonusowej.
        args:
    
        prefillModifiers : {modifier, difficulty, slBonus, successBonus}
        type: string, 'weapon', 'skill' 'characteristic', etc.
        item: używany przedmiot wymienionego typu
        options: inne szczegóły dotyczące testu (na przykład options.rest lub options.mutate)
    
        Example:
        if (args.type == "skill" && args.item.name == "Atletismo") args.prefillModifiers.modifier += 10`,

		"update" : 
		`This effect runs when an actor or an embedded document is changed. Can be async.
		args:
	
		item: if an item is modified, it is provided as an argument
		effect: if an effect is modified, it is provided as an argument
		`,
	
		prePrepareData: `Ten efekt jest stosowany przed obliczeniem jakichkolwiek danych aktora.
        args:
    
        actor : aktor właściwy dla efektu
        `,

		prePrepareItems: `Ten efekt jest stosowany przed sortowaniem i obliczaniem obiektów
    
        actor : aktor właściwy dla efektu
        `,

		prepareData: `Efekt ten jest stosowany po obliczeniu i przetworzeniu danych aktora.
    
        args:
    
        actor : aktor właściwy dla efektu
        `,

		preWoundCalc: `Ten efekt jest nakładany tuż przed obliczeniem Ran, idealny do zmiany atrybutów lub dodawania mnożników.
    
        actor : aktor właściwy dla efektu
        sb : Bonus z Siły
        tb : bonus z Wytrzymałości
        wpb : Bonus z Siły Woli
        multiplier : {
            sb : Mnożnik z BS
            tb : Mnożnik z BWt
            wpb : Mnożnik z BSW
        }
    
        e.g. para Hardy: "args.multiplier.tb += 1"
        `,

		woundCalc: `Ten efekt występuje po obliczeniu ran, idealny do pomnożenia wyniku.
    
        args:
    
        actor : aktor właściwy dla efektu
        wounds : obliczone rany
    
        e.g. for Swarm: "wounds *= 5"
        `,

		calculateSize : 
		`This effect is applied after size calculation, where it can be overridden. Cannot be async.
	
		args:
	
		size : Size value
	
		e.g. for Small: "args.size = 'sml'"
		`,
	
		preAPCalc : `This effect is applied before AP is calculated. Cannot be async.
	
		args:
	
		AP : Armour object
	
		e.g. args.AP.head.value += 1
		`,
		APCalc : `This effect is applied after AP is calculated. Cannot be async.
	
		args:
	
		AP : Armour object
	
		e.g. args.AP.head.value += 1
		`,
	
		preApplyDamage: `Ten efekt występuje przed nałożeniem obrażeń na test przeciwstawny.
        args:
    
        actor : aktor który otrzymuje obrażenia
        attacker : aktor atakujący
        opposedTest : obiekt zawierający dane testu przeciwstawnego
        damageType : wybrany typ obrażeń (ignorujący BWt, PP, etc.)
        `,
		applyDamage: `Ten efekt występuje po obliczeniu obrażeń w przeciwstawnym teście, ale przed aktualizacją danych aktora.
    
        args:
    
        actor : aktor który otrzymuje obrażenia
        attacker : aktor atakujący
        opposedTest : obiekt zawierający dane testu przeciwstawnego
        damageType : wybrany typ obrażeń (ignorujący BWt, PP, etc.)
        totalWoundLoss : Utracone rany po mitygacji
        AP : dane użytych PP
        updateMsg : sekwencja początkowa dla komunikatu o aktualizacji obrażeń
        messageElements : wyświetlanie sekwencji użytych do pokazania, w jaki sposób obliczono mitygację obrażeń
        `,

		preTakeDamage: `Ten efekt ma miejsce przed otrzymaniem obrażeń w przeciwstawnym teście.
    
        args:
    
        actor : aktor który otrzymuje obrażenia
        attacker : aktor atakujący
        opposedTest : obiekt zawierający dane testu przeciwstawnego
        damageType : wybrany typ obrażeń (ignorujący BWt, PP, etc.)
        `,

		takeDamage: `Ten efekt występuje po obliczeniu obrażeń w przeciwstawnym teście, ale przed aktualizacją danych aktora.
    
        args:
    
        actor : aktor który otrzymuje obrażenia
        attacker : aktor atakujący
        opposedTest : obiekt zawierający dane testu przeciwstawnego
        damageType : ybrany typ obrażeń (ignorujący BWt, PP, etc.)
        totalWoundLoss : Utracone rany po mitygacji
        AP : dane użytych PP
        updateMsg : sekwencja początkowa dla komunikatu o aktualizacji obrażeń
        messageElements : wyświetlanie sekwencji użytych do pokazania, w jaki sposób obliczono mitygację obrażeń
        `,

		preApplyCondition: `Ten efekt występuje przed zastosowaniem efektów stanu.
    
        args:
    
        effect : stosowany stan
        data : {
            msg : Wiadomość na Chacie o zastosowaniu stanu
            <inne dane, np. specyficzne dla stanu>
        }
        `,

		applyCondition: `Ten efekt występuje po zastosowaniu efektów stanu.
    
        args:
    
        effect : stosowany stan
        data : {
            msg : Wiadomość na Chacie o zastosowaniu stanu
            <inne dane, np. specyficzne dla stanu>
        }
        `,
		prePrepareItem: `Ten efekt jest stosowany przed przetwarzaniem obiektu z danymi aktora.
    
        args:
    
        item : obiekt do przetwarzania
        `,
		prepareItem: `Ten efekt jest stosowany po przetworzeniu obiektu z danymi aktora.
    
        args:
    
        item : obiekt przetworzony
        `,
		preRollTest: `Ten efekt jest stosowany przed obliczeniem Testu.
    
        args:
    
        testData: Wszystkie dane niezbędne do wyliczenia wyniku
        cardOptions: Dane do widoku, tytułu, szablonu itp. karty
        `,
		preRollWeaponTest: `Ten efekt jest nakładany przed obliczeniem testu broni.
    
        args:
    
        testData: Wszystkie dane niezbędne do wyliczenia wyniku
        cardOptions: Dane do widoku, tytułu, szablonu itp. karty
        `,

		preRollCastTest: `Ten efekt jest nakładany przed obliczeniem testu rzucenia zaklęcia
    
        args:
    
        testData: Wszystkie dane niezbędne do wyliczenia wyniku
        cardOptions: Dane do widoku, tytułu, szablonu itp. karty
        `,

		preChannellingTest: `Ten efekt jest nakładany przed obliczeniem testu splątywania
    
        args:
    
        testData: Wszystkie dane niezbędne do wyliczenia wyniku
        cardOptions: Dane do widoku, tytułu, szablonu itp. karty
        `,

		preRollPrayerTest: `Ten efekt jest nakładany przed obliczeniem testu modlitwy.
    
        args:
    
        testData: Wszystkie dane niezbędne do wyliczenia wyniku
        cardOptions: Dane do widoku, tytułu, szablonu itp. karty
        `,

		preRollTraitTest: `Ten efekt jest nakładany przed obliczeniem testu cechy.
    
        args:
    
        testData: Wszystkie dane niezbędne do wyliczenia wyniku
        cardOptions: Dane do widoku, tytułu, szablonu itp. karty
        `,

		rollTest: `Ten efekt jest stosowany po obliczeniu rzutu.
    
        args:
    
        test: obiekt zawierający informacje o rzucie i wynik
        cardOptions: Dane do widoku, tytułu, szablonu itp. karty
        `,
		rollIncomeTest: `Efekt ten jest stosowany po obliczeniu testu zarabiania.
    
        args:
    
        test: obiekt zawierający informacje o rzucie i wynik
        cardOptions: Dane do widoku, tytułu, szablonu itp. karty
        `,

		rollWeaponTest: `Efekt ten jest stosowany po obliczeniu testu broni.
    
        args:
    
        test: obiekt zawierający informacje o rzucie i wynik
        cardOptions: Dane do widoku, tytułu, szablonu itp. karty
        `,

		rollCastTest: `Efekt ten jest stosowany po obliczeniu testu rzucania zaklęcia.
    
        args:
    
        test: obiekt zawierający informacje o rzucie i wynik
        cardOptions: Dane do widoku, tytułu, szablonu itp. karty
        `,

		rollChannellingTest: `Efekt ten jest stosowany po obliczeniu testu splątywania.
    
        args:
    
        test: obiekt zawierający informacje o rzucie i wynik
        cardOptions: Dane do widoku, tytułu, szablonu itp. karty
        `,

		rollPrayerTest: `Efekt ten jest stosowany po obliczeniu testu modlitwy.
    
        args:
    
        test: obiekt zawierający informacje o rzucie i wynik
        cardOptions: Dane do widoku, tytułu, szablonu itp. karty
        `,

		rollTraitTest: `Efekt ten jest stosowany po obliczeniu testu cechy.
    
        args:
    
        test: obiekt zawierający informacje o rzucie i wynik
        cardOptions: Dane do widoku, tytułu, szablonu itp. karty
        `,

		preOpposedAttacker: `Ten efekt jest stosowany przed rozpoczęciem obliczania wyniku testu przeciwstawnego dla atakującego.
    
        args:
    
        attackerTest: obiekt testu atakującego
        defenderTest: obiekt testu broniącego
        opposedTest: obiekt testu przeciwstawnego, przed obliczeniami
        `,
		preOpposedDefender: `Ten efekt jest stosowany przed rozpoczęciem obliczania wyniku testu przeciwstawnego dla broniącego.
    
        args:
    
        attackerTest: obiekt testu atakującego
        defenderTest: obiekt testu broniącego
        opposedTest: obiekt testu przeciwstawnego, przed obliczeniami
        `,

		opposedAttacker: `Ten efekt jest stosowany po rozpoczęciu testu przeciwstawnego dla atakującego.
    
        args:
    
        attackerTest: obiekt testu atakującego
        defenderTest: obiekt testu broniącego
        opposedTest: obiekt testu przeciwstawnego, przed obliczeniami
        `,

		opposedDefender: `Ten efekt jest stosowany po rozpoczęciu testu przeciwstawnego dla broniącego.
    
        args:
    
        attackerTest: obiekt testu atakującego
        defenderTest: obiekt testu broniącego
        opposedTest: obiekt testu przeciwstawnego, przed obliczeniami
        `,

		calculateOpposedDamage: `Ten efekt jest stosowany podczas obliczania obrażeń testu przeciwstawnego, dla atakującego
    
        args:
    
        damage : początkowe obrażenia przed mnożnikami
        damageMultiplier : mnożniki obliczone na podstawie różnicy rozmiarów
        sizeDiff : liczbowa różnica w rozmiarze, użyta do dodatkowych obrażeń
        opposedTest : obiekt testu przeciwstawnego
        `,

		getInitiativeFormula: `Efekt ten realizowany jest podczas określenia inicjatywy aktora
    
        args:
    
        initiative: Obliczona wartość inicjatywy
        `,

		targetPrefillDialog: `Ten efekt jest stosowany do innego aktora, gdy ten aktor jest celem i należy mu zmienić wartości wstępnie wypełnione w sekcji bonusów
        args:
    
        prefillModifiers : {modifier, difficulty, slBonus, successBonus}
        type: string, 'weapon', 'skill' 'characteristic', etc.
        item: obiekt wspomnianego użytego typu
        options: inne szczegóły dotyczące testu (na przykład options.rest lub options.mutate)
    
        Example:
        if (args.type == "skill" && args.item.name == "Athletics") args.prefillModifiers.modifier += 10`,

		endTurn: `Ten efekt jest wykonywany na koniec tury aktora.
    
        args:
    
        combat: obecna walka
        `,

		startTurn : 
		`This effect runs at the start of an actor's turn. Can be async.
	
		args:
	
		combat: current combat
		`,
	
		endRound: `Ten efekt jest wykonywany na koniec rundy.
    
        args:
    
        combat: obecna walka
        `,
		endCombat: `Ten efekt jest wykonywany na koniec walki.
    
        args:
    
        combat: obecna walka
        `,

		this: `
    
        Wszystkie efekty mają dostęp do:
            this.actor : aktor wykonujący efekt
            this.effect : wykonywany efekt
            this.item : obiekt, który wywołuje efekt, jeśli efekt pochodzi od obiektu`,
	};
});
