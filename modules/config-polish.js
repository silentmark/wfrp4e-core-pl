Hooks.on("setup", function () {
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
		helf: "Wysoki elf",
		welf: "Leśny elf",
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
		welf: {
			talsyn: {
				name: "Talsyn", 
				skills: [
					"Broń Biała (Podstawowa)",
					"Broń Zasięgowa (Łuk)",
					"Język (Eltharin)",
					"Odporność",
					"Percepcja",
					"Skradanie (Wieś)",
					"Sztuka Przetrwania",
					"Tropienie",
					"Atletyka",
					"Wspinaczka",
					"Występy (Śpiewanie)",
					"Wiedza (Talsyn)",
				],
				talents: ["Wyczulony Zmysł", "Twardziel, Percepcja Magiczna", "Widzenie w Ciemności", "Czytanie/Pisanie, Niezwykle Odporny", "Włóczykij, Silne Nogi", 0]
			},
			arranoc: {
				name: "Arranoc",
				skills: [
					"Broń Biała (Podstawowa)",
					"Broń Zasięgowa (Łuk)",
					"Język (Eltharin)",
					"Odporność",
					"Percepcja",
					"Skradanie (Wieś)",
					"Sztuka Przetrwania",
					"Tropienie",
					"Przekupstwo",
					"Charyzma",
					"Mocna Głowa",
					"Wiedza (Arronc)",
				],
				talents: ["Wyczulony Zmysł", "Twardziel, Percepcja Magiczna", "Widzenie w Ciemności", "Czytanie/Pisanie, Niezwykle Odporny", "Atrakcyjny, Charyzmatyczny", 0]
			},
			argwylon: {
				name: "Argwylon",
				skills: [
					"Broń Biała (Podstawowa)",
					"Broń Zasięgowa (Łuk)",
					"Język (Eltharin)",
					"Odporność",
					"Percepcja",
					"Skradanie (Wieś)",
					"Sztuka Przetrwania",
					"Tropienie",
					"Oswajanie",
					"Język (Magiczny)",
					"Wiedza (Argwylon)",
					"Wiedza (Magia)"
				],
				talents: ["Wyczulony Zmysł", "Twardziel, Percepcja Magiczna", "Widzenie w Ciemności", "Czytanie/Pisanie, Niezwykle Odporny", "Magia Prosta, Szósty Zmysł", 0]
			},
			modryn: {
				name: "Modryn",
				skills: [
					"Broń Biała (Podstawowa)",
					"Broń Zasięgowa (Łuk)",
					"Język (Eltharin)",
					"Odporność",
					"Percepcja",
					"Skradanie (Wieś)",
					"Sztuka Przetrwania",
					"Tropienie",
					"Unik",
					"Zastraszanie",
					"Zastawianie Pułapek",
					"Wiedza (Modryn)"
				],
				talents: ["Wyczulony Zmysł", "Twardziel, Percepcja Magiczna", "Widzenie w Ciemności", "Czytanie/Pisanie, Niezwykle Odporny", "Groźny, Czujny", 0]
			},
			cavaroc: {
				name: "Cavaroc",
				skills: [
					"Broń Biała (Podstawowa)",
					"Broń Zasięgowa (Łuk)",
					"Język (Eltharin)",
					"Odporność",
					"Percepcja",
					"Skradanie (Wieś)",
					"Sztuka Przetrwania",
					"Tropienie",
					"Opieka nad Zwierzętami",
					"Oswajanie",
					"Jeździectwo (Konie)",
					"Wiedza (Cavaroc)"
				],
				talents: ["Wyczulony Zmysł", "Twardziel, Percepcja Magiczna", "Widzenie w Ciemności", "Czytanie/Pisanie, Niezwykle Odporny", "Posłuch u Zwierząt, Szybki Refleks", 0]
			},
			atylwyth: {
				name: "Atylwyth",
				skills: [
					"Broń Biała (Podstawowa)",
					"Broń Zasięgowa (Łuk)",
					"Język (Eltharin)",
					"Odporność",
					"Percepcja",
					"Skradanie (Wieś)",
					"Sztuka Przetrwania",
					"Tropienie",
					"Atletyka",
					"Unik",
					"Opanowanie",
					"Wiedza (Atylwyth)"
				],
				talents: ["Wyczulony Zmysł", "Twardziel, Percepcja Magiczna", "Widzenie w Ciemności", "Czytanie/Pisanie, Niezwykle Odporny", "Odporny na (Zimno), Urodzony Wojownik", 0]
			},
			wydrioth: {
				name: "Wydrioth",
				skills: [
					"Broń Biała (Podstawowa)",
					"Broń Zasięgowa (Łuk)",
					"Język (Eltharin)",
					"Odporność",
					"Percepcja",
					"Skradanie (Wieś)",
					"Sztuka Przetrwania",
					"Tropienie",
					"Wspinaczka", 
					"Intuicja",
					"Wiedza (Wydrioth)",
					"Zastawianie Pułapek"
				],
				talents: ["Wyczulony Zmysł", "Twardziel, Percepcja Magiczna", "Widzenie w Ciemności", "Czytanie/Pisanie, Niezwykle Odporny", "Nieustępliwy, Bardzo Silny", 0]
			},
			cythral: {
				name: "Cythral",
				skills: [
					"Broń Biała (Podstawowa)",
					"Broń Zasięgowa (Łuk)",
					"Język (Eltharin)",
					"Odporność",
					"Percepcja",
					"Skradanie (Wieś)",
					"Sztuka Przetrwania",
					"Tropienie",
					"Atletyka",
					"Wspinaczka",
					"Opanowanie",
					"Wiedza (Cythral)"
				],
				talents: ["Wyczulony Zmysł", "Twardziel, Percepcja Magiczna", "Widzenie w Ciemności", "Czytanie/Pisanie, Niezwykle Odporny", "Twardziel, Tragarz", 0]
			},

			fyrdarric: {
				name: "Fyr Darric",
				skills: [
					"Broń Biała (Podstawowa)",
					"Broń Zasięgowa (Kusza)",
					"Język (Eltharin)",
					"Odporność",
					"Percepcja",
					"Opanowanie",
					"Sztuka Przetrwania",
					"Tropienie",
					"Zwinne Palce",
					"Kuglarstwo (Taniec)",
					"Występy (Śpiewanie)",
					"Wiedza (Fyr Darric)"
				],
				talents: ["Wyczulony Zmysł", "Twardziel, Percepcja Magiczna", "Widzenie w Ciemności", "Czytanie/Pisanie, Niezwykle Odporny", "Gładkie Słówka, Naśladowca", 0]
			},
			torgovann: {
				name: "Torgovann",
				skills: [
					"Broń Biała (Podstawowa)",
					"Broń Zasięgowa (Kusza)",
					"Język (Eltharin)",
					"Odporność",
					"Percepcja",
					"Opanowanie",
					"Sztuka Przetrwania",
					"Tropienie",
					"Wycena",
					"Wiedza (Metalurgia)",
					"Wiedza (Torgovann)",
					"Rzemiosło (Dowolne)"
				],
				talents: ["Wyczulony Zmysł", "Twardziel, Percepcja Magiczna", "Widzenie w Ciemności", "Czytanie/Pisanie, Niezwykle Odporny", "Wytwórca (dowolny), Zręczny", 0]
			},
			anmyr: {
				name: "Anmyr",
				skills: [
					"Broń Biała (Podstawowa)",
					"Broń Zasięgowa (Kusza)",
					"Język (Eltharin)",
					"Odporność",
					"Percepcja",
					"Opanowanie",
					"Sztuka Przetrwania",
					"Tropienie",
					"Atletyka",
					"Zastraszanie", 
					"Wiedza (Anmyr)",
					"Wiedza (Zwierzoludzie)"
				],
				talents: ["Wyczulony Zmysł", "Twardziel, Percepcja Magiczna", "Widzenie w Ciemności", "Czytanie/Pisanie, Niezwykle Odporny", "Nienawiść (Zwierzoludzie), Nieugięty", 0]
			},
			tirstyh: {
				name: "Tirstyh",
				skills: [
					"Broń Biała (Podstawowa)",
					"Broń Zasięgowa (Kusza)",
					"Język (Eltharin)",
					"Odporność",
					"Percepcja",
					"Opanowanie",
					"Sztuka Przetrwania",
					"Tropienie",
					"Sztuka (Rzeżbiarstwo)",
					"Opanowanie",
					"Występy (Śpiewanie)",
					"Wiedza (Tirstyh)"
				],
				talents: ["Wyczulony Zmysł", "Twardziel, Percepcja Magiczna", "Widzenie w Ciemności", "Czytanie/Pisanie, Niezwykle Odporny", "Zimna krew, Odporny na (Choroby)", 0]
			},
		}
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
		human: [
			"Wróżba Losu", 
			"Błyskotliwość, Charyzmatyczny", 
			3],
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
		slaanesh: "Tradycja Slaanesha przynosi ból i ekstazę, wszystko w imię Księcia Bólu i Przyjemności dla jego wiecznego zadowolenia, łącząc perwersyjną mieszankę Ametystowego, Złotego i Jadeitowego Wiatru w coś pokręconego i egzotycznego. Efekt Tradycji: Czarnoksiężnik Slaanesha jest biegły w sztuce dostarczania przyjemności i bólu. Możesz zadać dodatkową ranę za każdy Stan Ogłuszenia lub Paniki odniesiony przez cele twoich zaklęć.",
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
		engaged: "WFRP4E.Conditions.Engaged"
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
		"delirium": "WFRP4E.Symptom.Delirium",
		"swelling": "WFRP4E.Symptom.Swelling",
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
			transfer: false,
			flags: {
				wfrp4e: {
					lore: true,
					applicationData : {
						type : "document",
						documentType : "Item"
					},
					scriptData: [
						{
							"label": "Dodaj Cechę Stworzenia Strach",
							"trigger": "rollCastTest",
							"script": `if (args.test.result.castOutcome == "success") {
								args.test.result.other.push(``<strong>${this.effect.name}</strong>: @Fear[1,${this.actor.prototypeToken.name}]``)
									if (!this.actor.has(game.i18n.localize("NAME.Fear"))) {
										let item = await fromUuid("Compendium.wfrp4e-core.items.pTorrE0l3VybAbtn");
										let data = item.toObject();
										data.system.specification.value = 1
										this.actor.createEmbeddedDocuments("Item", [data])
										this.script.scriptNotification("Dodano Cechę Stworzenia Strach");
									}
								}`
						}
					]
				}
			}
		},
		death: {
			name: "Tradycja Śmierci",
			icon: "modules/wfrp4e-core/icons/spells/death.png",
			transfer: false,
			flags: {
				wfrp4e: {
					lore: true,
					applicationData : {
						type : "target"
					},
					scriptData: [
						{
							trigger: "immediate",
							label : "@effect.name",
							script : `this.actor.addCondition("fatigued")`,
							options : {
								immediate : {
									deleteEffect : true
								}
							}
						}
					]
				}
			}
		},
		fire: {
			name: "Tradycja Ognia",
			icon: "modules/wfrp4e-core/icons/spells/fire.png",
			transfer: false,
			flags: {
				wfrp4e: {
					lore: true,
					applicationData : {
						type : "target"
					},
					scriptData: [
						{
							trigger: "immediate",
							label : "@effect.name",
							script : `this.actor.addCondition("ablaze")`,
							options : {
								immediate : {
									deleteEffect : true
								}
							}
						}
					]
				}
			}
		},
		heavens: {
			name: "Tradycja Niebios",
			icon: "modules/wfrp4e-core/icons/spells/heavens.png",
			transfer: false,
			flags: {
				wfrp4e: {
					lore: true,
					applicationData : {
						type : "document",
						documentType : "Item"
					},
					scriptData: [
						{
							trigger: "computeApplyDamageModifiers",
							label : "@effect.name",
							script : `
							if (args.applyAP && args.modifiers.ap.metal) 
							{
								args.modifiers.ap.ignored += args.modifiers.ap.metal
								args.modifiers.ap.details.push("<strong>" + this.effect.name + "</strong>: Zigonrowano Metalowy Pancerz (" + args.modifiers.ap.metal + ")");
								args.modifiers.ap.metal = 0
							}
							`
						}
					]
				},
			}
		},
		metal: {
			name: "Tradycja Metalu",
			icon: "modules/wfrp4e-core/icons/spells/metal.png",
			transfer: false,
			flags: {
				wfrp4e: {
					lore: true,
					applicationData : {
						type : "document",
						documentType : "Item"
					},
					scriptData: [
						{
							trigger: "computeApplyDamageModifiers",
							label : "@effect.name",
							script : `
							if (args.applyAP && args.modifiers.ap.metal) 
							{
								args.modifiers.ap.ignored += args.modifiers.ap.metal
								args.modifiers.other.push({value : args.modifiers.ap.metal, label : this.effect.name, details : "Dodano PP Metalowego Pancerza do Obrażeń" })
								args.modifiers.ap.details.push("<strong>" + this.effect.name + "</strong>: Zignorowano Metalowy Pancerz (" + args.modifiers.ap.metal + ")");
								args.modifiers.ap.metal = 0
							}
							`
						}
					]
				}
			}
		},
		life: {
			name: "Tradycja Życia",
			icon: "modules/wfrp4e-core/icons/spells/life.png",
			transfer: false,
			flags: {
				wfrp4e: {
					lore: true,
					applicationData : {
						type : "target"
					},
					scriptData: [
						{
							trigger: "immediate",
							label : "@effect.name",
							script : `
							let caster = this.effect.sourceActor
							if (!this.actor.has(game.i18n.localize("NAME.Daemonic")) && !this.actor.has(game.i18n.localize("NAME.Undead")))
							{
								await this.actor.hasCondition("bleeding")?.delete();
								await this.actor.hasCondition("fatigued")?.delete();
							}
							else if (this.actor.has(game.i18n.localize("NAME.Undead")))
							{
								this.script.scriptMessage(await this.actor.applyBasicDamage(caster.system.characteristics.wp.bonus, {damageType : game.wfrp4e.config.DAMAGE_TYPE.IGNORE_ALL, suppressMsg : true}));
							}`,
							options : {
								immediate : {
									deleteEffect : true
								}
							}
						}
					]
				}
			}
		},
		light: {
			name: "Tradycja Światła",
			icon: "modules/wfrp4e-core/icons/spells/light.png",
			transfer: false,
			flags: {
				wfrp4e: {
					lore: true,
					applicationData : {
						type : "target"
					},
					scriptData: [
						{
							trigger: "immediate",
							label : "@effect.name",
							script : `
							let caster = this.effect.sourceActor
							await this.actor.addCondition("blinded")
							if (this.actor.has(game.i18n.localize("NAME.Undead")) || this.actor.has(game.i18n.localize("NAME.Daemonic")))
							{
								this.script.scriptMessage(await this.actor.applyBasicDamage(caster.system.characteristics.int.bonus, {damageType : game.wfrp4e.config.DAMAGE_TYPE.IGNORE_ALL, suppressMsg : true}));
							}`,
							options : {
								immediate : {
									deleteEffect : true
								}
							}
						}
					]
				}
			}
		},
		shadow: {
			name: "Tradycja Cieni",
			icon: "modules/wfrp4e-core/icons/spells/shadow.png",
			transfer: false,
			flags: {
				wfrp4e: {
					lore: true,
					applicationData : {
						type : "document",
						documentType : "Item"
					},
					scriptData: [
						{
							trigger: "computeApplyDamageModifiers",
							label : "@effect.name",
							script : `
							if (args.applyAP && args.modifiers.ap.magical) 
							{
								let nonmagical = args.modifiers.ap.value - args.modifiers.ap.magical
								args.modifiers.ap.ignored += nonmagical
								args.modifiers.ap.details.push("<strong>" + this.effect.name + "</strong>: Zignorowano Niemagiczny Pancerz (" + nonmagical + ")");
							}
							`
						}
					]
				}
			}
		},
		hedgecraft: {
			name: "Tradycja Guślarstwa",
			icon: "modules/wfrp4e-core/icons/spells/hedgecraft.png",
			transfer: false,
			flags: {
                wfrp4e : {
                    lore: true,
                    applicationData : {
                        type : "other"
                    }
                }
			}
		},
		witchcraft: {
			name: "Tradycja Czarownictwa",
			icon: "modules/wfrp4e-core/icons/spells/witchcraft.png",
			transfer: false,
			flags: {
				wfrp4e: {
					lore: true,
					applicationData : {
						type : "target"
					},
					scriptData: [
						{
							trigger: "immediate",
							label : "@effect.name",
							script : `this.actor.addCondition("bleeding")`,
							options : {
								immediate : {
									deleteEffect : true
								}
							}
						}
					]
				}
			}
		},
		slaanesh: {
            name: "Tradycja Slaanesha",
            icon: "modules/wfrp4e-core/icons/spells/slaanesh.png",
            transfer: true,
            flags: {
                wfrp4e: {
            		lore: true,
                  	applicationData: {
                		type: "target"
                  	},
                  	scriptData: [
                    	{
                    		trigger: "immediate",
                      		label : "@effect.name",
                      		script :  `
								let stunned = this.actor.hasCondition("stunned");
								let broken = this.actor.hasCondition("broken");
								let wounds = 0; 
								if (stunned) { 
									wounds += stunned.conditionValue;
								}
								if (broken) {
									wounds += broken.conditionValue;
								}
								if (wounds) {
									this.actor.applyBasicDamage(wounds, {damageType : game.wfrp4e.config.DAMAGE_TYPE.IGNORE_ALL});
								}
								`,
                      		options : {
                        		immediate : {
                        			deleteEffect : true
                        		}
                      		}
                    	}
                  	]
                }
            }
        }
	}

	WFRP4E.symptomEffects = {
        blight: {
            name: "WFRP4E.Symptom.Blight",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            flags: {
                wfrp4e: {
                    symptom : true,
                    applicationData : {
                        type : "document"
                    },
                    scriptData: [
                        {
                            trigger: "manual",
                            label : "@effect.name",
                            script : `
                            let difficulty = ""
                            if (this.effect.name.includes("Umiarkowany"))
                                difficulty = "easy"
                            else if (this.effect.name.includes("Poważny"))
                                difficulty = "average"
                            else
                                difficulty = "veasy"
        
                            let test = await this.actor.setupSkill(game.i18n.localize("NAME.Endurance"), {context : {failure : this.actor.name + " umiera z powodu Uwiądu"}, fields: {difficulty}, appendTitle : " - Uwiąd"})
                            await test.roll();
                            if (test.failed)
                            {
                                this.actor.addCondition("dead");
                            }
                            `,
                        }
                    ]
                }
            }
        },
        buboes: {
            name: "WFRP4E.Symptom.Buboes",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            flags: {
                wfrp4e: {
                    symptom : true,
                    applicationData : {
                        type : "document"
                    },
                    scriptData: [
                        {
                            trigger: "dialog",
                            label : "@effect.name",
                            script : `args.fields.modifier -= 10`,
                            options: {
                                dialog : {
                                    hideScript : `return !["ws", "bs", "s", "fel", "ag", "t", "dex"].includes(args.characteristic)`,
                                    activateScript : `return ["ws", "bs", "s", "fel", "ag", "t", "dex"].includes(args.characteristic)`,
                                }
                            }
                        }
                    ]
                }
            }
        },
        convulsions: {
            name: "WFRP4E.Symptom.Convulsions",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            flags: {
                wfrp4e: {
                    symptom : true,
                    applicationData : {
                        type : "document"
                    },
                    scriptData: [
                        {
                            trigger: "dialog",
                            label : "@effect.name",
                            script : `
                            let modifier = 0
                            if (this.effect.name.includes("Umiarkowane"))
                                modifier = -20
                            else
                                modifier = -10
                            args.fields.modifier += modifier
                            `,
                            options: {
                                dialog : {
                                    hideScript : `return !["ws", "bs", "s", "ag", "t", "dex"].includes(args.characteristic)`,
                                    activateScript : `return ["ws", "bs", "s", "ag", "t", "dex"].includes(args.characteristic)`,
                                }
                            }
                        }
                    ]
                }
            }
        },
        coughsandsneezes: {
            name: "WFRP4E.Symptom.CoughsandSneezes",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            flags: {
                wfrp4e: {
                    "symptom": true
                }
            }
        },
        fever: {
            name: "WFRP4E.Symptom.Fever",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            flags: {
                wfrp4e: {
                    symptom : true,
                    applicationData : {
                        type : "document"
                    },
                    scriptData: [
                        {
                            trigger: "dialog",
                            label : "@effect.name",
                            script : `args.fields.modifier -= 10`,
                            options: {
                                dialog : {
                                    hideScript : `return !["ws", "bs", "s", "fel", "ag", "t", "dex"].includes(args.characteristic)`,
                                    activateScript : `return ["ws", "bs", "s", "fel", "ag", "t", "dex"].includes(args.characteristic)`,
                                }
                            }
                        }
                    ]
                }
            }
        },
        flux: {
            name: "WFRP4E.Symptom.Flux",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            flags: {
                wfrp4e: {
                    "symptom": true
                }
            }
        },
        gangrene: {
            name: "WFRP4E.Symptom.Gangrene",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            flags: {
                wfrp4e: {
                    symptom : true,
                    applicationData : {
                        type : "document"
                    },
                    scriptData: [
                        {
                            trigger: "dialog",
                            label : "@effect.name",
                            script : `args.fields.modifier -= 10`,
                            options: {
                                dialog : {
                                    hideScript : `return !["fel"].includes(args.characteristic)`,
                                    activateScript : `return ["fel"].includes(args.characteristic)`,
                                }
                            }
                        },
                        {
                            trigger: "manual",
                            label : "Uciążliwa Rana",
                            script : `
                            let test = await this.actor.setupSkill(game.i18n.localize("NAME.Endurance"), {fields: {difficulty : "average"}, appendTitle : " - Uciążliwa Rana"})
                            await test.roll();
                            if (test.failed)
                            {
                                let disease = await fromUuid("Compendium.wfrp4e-core.items.kKccDTGzWzSXCBOb");
								await this.actor.createEmbeddedDocuments("Item", [disease.toObject()]);
                                this.script.scriptNotification("Otrzymano: " + disease.name);
                            }
                            `,
                        },
                        {
                            trigger: "manual",
                            label : "Uwiąd",
                            script : `
                            let difficulty = ""
                            if (this.effect.name.includes("Umiarkowany"))
                                difficulty = "easy"
                            else if (this.effect.name.includes("Poważny"))
                                difficulty = "average"
                            else
                                difficulty = "veasy"
        
                            let test = await this.actor.setupSkill(game.i18n.localize("NAME.Endurance"), {context : {failure : this.actor.name + " umiera z powodu Uwiądu"}, fields: {difficulty}, appendTitle : " - Uwiąd"})
                            await test.roll();
                            if (test.failed)
                            {
                                this.actor.addCondition("dead");
                            }
                            `,
                        }
                    ]
                }
            }
        },
        lingering: {
            name: "WFRP4E.Symptom.Lingering",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            flags: {
                wfrp4e: {
                    "symptom": true
                }
            }
        },
        malaise: {
            name: "WFRP4E.Symptom.Malaise",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            flags: {
                wfrp4e: {
                    symptom : true,
                    applicationData : {
                        type : "document"
                    },
                    scriptData: [
                        {
                            trigger: "update",
                            label : "@effect.name",
                            script : `
                            let fatigued = this.actor.hasCondition("fatigued")
                            if (!fatigued)
                            {
                                this.actor.addCondition("fatigued")
                                ui.notifications.notify(this.actor.name + " otrzymał Stan Zmęczenia, który nie może zostać usunięty, dopóki Apatia nie zostanie wyleczona.")
                            }`,
                        }
                    ]
                }
            }
        },
        nausea: {
            name: "WFRP4E.Symptom.Nausea",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            flags: {
                wfrp4e: {
                    symptom : true,
                    applicationData : {
                        type : "document"
                    },
                    scriptData: [
                        {
                            trigger: "rollTest",
                            label : "@effect.name",
                            script : `                 
                            if (args.test.failed)
                            {
                                let applicableCharacteristics = ["ws", "bs", "s", "fel", "ag", "t", "dex"];
                                if (applicableCharacteristics.includes(args.test.characteristicKey))
                                {
                                    this.actor.addCondition("stunned");
                                }
                            }`,
                        }
                    ]
                }
            }
        },
        pox: {
            name: "WFRP4E.Symptom.Pox",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            flags: {
                wfrp4e: {
                    symptom : true,
                    applicationData : {
                        type : "document"
                    },
                    scriptData: [
                        {
                            trigger: "dialog",
                            label : "@effect.name",
                            script : `args.fields.modifier -= 10`,
                            options: {
                                dialog : {
                                    hideScript : `return !["fel"].includes(args.characteristic)`,
                                    activateScript : `return ["fel"].includes(args.characteristic)`,
                                }
                            }
                        }
                    ]
                }
            }
        },
        wounded: {
            name: "WFRP4E.Symptom.Wounded",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            flags: {
                wfrp4e: {
                    symptom : true,
                    applicationData : {
                        type : "document"
                    },
                    scriptData: [
                        {
                            trigger: "manual",
                            label : "@effect.name",
                            script : `
                            let test = await this.actor.setupSkill(game.i18n.localize("NAME.Endurance"), {fields: {difficulty : "average"}, appendTitle : " - Uciążliwa Rana"})
                            await test.roll();
                            if (test.failed)
                            {
                                let disease = await fromUuid("Compendium.wfrp4e-core.items.kKccDTGzWzSXCBOb");
								await this.actor.createEmbeddedDocuments("Item", [disease.toObject()]);
                                this.script.scriptNotification("Otrzymano: " + disease.name);
                            }
                            `,
                        }
                    ]
                }
            }
        }
    }

	for (const obj in WFRP4E) {
		for (const el in WFRP4E[obj]) {
			if (typeof WFRP4E[obj][el] === "string") {
				WFRP4E[obj][el] = game.i18n.localize(WFRP4E[obj][el]);
			}
		}
	}

	for (let symptom in WFRP4E.symptomEffects) {
		WFRP4E.symptomEffects[symptom].name = game.i18n.localize(WFRP4E.symptomEffects[symptom].name);
	}

	mergeObject(game.wfrp4e.config, WFRP4E);

	game.wfrp4e.config.scriptTriggers = {
		manual: "Wywołanie Ręczne (manual)",
		immediate: "Jednorazowy (immediate)",
		dialog: "Okno Dialogowe Testu (dialog)",
		addItems: "Podczas dodawania przedmiotu (addItems)",
		preUpdate: "Przed Aktualizacją (preUpdate)",
		update: "Podczas Aktualizacji (update)",
		equipToggle: "Przełączanie Wyposażenia (equipToggle)",
		prePrepareData: "Przed przygotowaniem danych (prePrepareData)",
		prePrepareItems: "Przed przygotowaniem przedmiotów aktora (prePrepareItems)",
		prepareData: "Przygotowanie danych (prepareData)",
		prepareOwned: "Prepare Owned Data (For Items) (prepareOwned)",
		computeCharacteristics: "Przeliczanie Cech (computeCharacteristics)",
		computeEncumbrance: "Obliczanie Obciążenia (computeEncumbrance)",
		preWoundCalc: "Przed obliczeniem żywotności (preWoundCalc)",
		woundCalc: "Obliczanie Żywotności (woundCalc)",
		calculateSize: "Obliczanie Rozmiaru (calculateSize)",
		preAPCalc: "Przed obliczeniem Punktów Pancerza (preAPCalc)",
		APCalc: "Obliczanie Punktów Pancerza (APCalc)",
		preApplyDamage: "Przed zadaniem obrażeń (preApplyDamage)",
		applyDamage: "Podczas zadawania obrażen (applyDamage)",
		preTakeDamage: "Przed otrzymaniem obrażeń (preTakeDamage)",
		takeDamage: "Podczas otrzymywania obrażeń (takeDamage)",
		computeTakeDamageModifiers: "Obliczanie Modyfikatorów Otrzymania Obrażeń (computeTakeDamageModifiers)",
		computeApplyDamageModifiers: "Obliczanie Modyfikatórów Zadania Obrażeń (computeApplyDamageModifiers)",
		//preAddCondition: "Pre-Add Condition",
		preApplyCondition: "Przed Wykonaniem Skryptu Stanu (preApplyCondition)",
		applyCondition: "Po Wykonaniem Skryptu Stanu (applyCondition)",
		//preDeleteCondition: "Pre-Delete Condition",
		prePrepareItem: "Przed przygotowaniem danych przedmiotu (prePrepareItem)",
		prepareItem: "Przygotowanie danych przedmiotu (prepareItem)",
		preRollTest: "Przed wykonaniem testu (preRollTest)",
		preRollWeaponTest: "Przed wykonaniem testu Ataku Bronią (preRollWeaponTest)",
		preRollCastTest: "Przed wykonaniem testu Rzucenia Zaklęcia (preRollCastTest)",
		preChannellingTest: "Przed wykonaniem testu Splątania Magii (preChannellingTest)",
		preRollPrayerTest: "Przed wykonaniem testu Modlitwy (preRollPrayerTest)",
		preRollTraitTest: "Przed wykonaniem testu Cechy Stworzenia (preRollTraitTest)",
		rollTest: "Po wykonaniu testu (rollTest)",
		rollIncomeTest: "Po wykonaniu testu Zarabiania (rollIncomeTest)",
		rollWeaponTest: "Po wykonaniu testu Ataku Bronią (rollWeaponTest)",
		rollCastTest: "Po wykonaniu testu Rzucania Zaklęcia (rollCastTest)",
		rollChannellingTest: "Po wykonaniu testu Splątania Magii (rollChannellingTest)",
		rollPrayerTest: "Po wykonaniu testu Modlitwy (rollPrayerTest)",
		rollTraitTest: "Po wykonaniu testu Cechy Stworzenia (rollTraitTest)",
		preOpposedAttacker: "Przed wykonaniem testu Przeciwstawnego przez Atakującego (preOpposedAttacker)",
		preOpposedDefender: "Przed wykonaniem testu Przeciwstawnego przez Broniącego się (preOpposedDefender)",
		opposedAttacker: "Po teście przeciwstawnym Atakującego (opposedAttacker)",
		opposedDefender: "Po teście przeciwstawnym Broniącego się (opposedDefender)",
		calculateOpposedDamage: "Obliczanie obrażeń z testu przeciwstawnego (calculateOpposedDamage)",
		getInitiativeFormula: "Obliczanie Inicjatywy podczas walki (getInitiativeFormula)",
		createToken: "Utworzenie Tokena (createToken)",
		deleteEffect: "Usunięcie Efektu (deleteEffect)",
		endTurn: "Koniec Tury (endTurn)",
		startTurn: "Początek Tury (startTurn)",
		endRound: "Koniec Rundy (endRound)",
		endCombat: "Koniec Walki (endCombat)",
	};
});
