Hooks.on("i18nInit", () => {
	if (game.modules.get('wfrp4-wfrp4e-npc-generator')?.active) {

    const traitPrefix = '@Trait - ';
    const psychologyPrefix = '@Psy - ';
    const randomTalent = '@RndTal - ';

    game.wfrp4e.speciesReferencial = {
      speciesNativeTongue: {
        ogre: 'Język (Grumbarth)',
        human: 'Język (Reikspiel)',
        dwarf: 'Język (Khazalid)',
        halfling: 'Język (Mootish)',
        helf: 'Język (Elthárin)',
        welf: 'Język (Elthárin)',
        gnome: 'Język (Ghassally)',
    },
    
    subSpeciesNativeTongue: {
      human: {
        tilean: 'Język (Tileański)',
      },
    },
    
    speciesSkills: {
      ogre: [
        'Atletyka',
        'Mocna Głowa',
        'Odporność',
        'Występy (Gawędziarstwo)',
        'Zastraszanie',
        'Język (Reikspiel)',
        'Wiedza (Ogry)',
        'Broń Biała (Podstawowa)',
        'Broń Biała (Bijatyka)',
        'Nawigacja',
        'Sztuka Przetrwania',
        'Tropienie',
      ],
      human: [
        'Animal Care',
        'Charm',
        'Cool',
        'Evaluate',
        'Gossip',
        'Haggle',
        'Language (Bretonnian)',
        'Language (Wastelander)',
        'Leadership',
        'Wiedza (Reikland)',
        'Broń Biała (Podstawowa)',
        'Ranged (Bow)',
      ],
      dwarf: [
        'Consume Alcohol',
        'Cool',
        'Endurance',
        'Występy (Gawędziarstwo)',
        'Evaluate',
        'Zastraszanie',
        'Language (Khazalid)',
        'Wiedza (Dwarfs)',
        'Wiedza (Geology)',
        'Wiedza (Metallurgy)',
        'Broń Biała (Podstawowa)',
        'Trade (any one)',
      ],
      halfling: [
        'Charm',
        'Consume Alcohol',
        'Dodge',
        'Gamble',
        'Haggle',
        'Intuition',
        'Language (Mootish)',
        'Wiedza (Reikland)',
        'Perception',
        'Sleight of Hand',
        'Stealth (Any)',
        'Trade (Cook)',
      ],
      helf: [
        'Cool',
        'Entertain (Sing)',
        'Evaluate',
        'Language (Eltharin)',
        'Leadership',
        'Broń Biała (Podstawowa)',
        'Nawigacja',
        'Perception',
        'Play (any one)',
        'Ranged (Bow)',
        'Sail (any one)',
        'Swim',
      ],
      welf: [
        'Athletics',
        'Climb',
        'Endurance',
        'Entertain (Sing)',
        'Zastraszanie',
        'Language (Eltharin)',
        'Broń Biała (Podstawowa)',
        'Sztuka Przetrwania',
        'Perception',
        'Ranged (Bow)',
        'Stealth (Rural)',
        'Tropienie',
      ],
      gnome: [
        'Channelling (Ulgu)',
        'Charm',
        'Consume Alcohol',
        'Dodge',
        'Entertain (Any)',
        'Gossip',
        'Haggle',
        'Language (Ghassally)',
        'Language (Magick)',
        'Language (Wastelander)',
        'Sztuka Przetrwania',
        'Stealth (Any)',
      ],
    },
    
    /*
    Dirty Fighting, Large, Night Vision, Resistance
    (Poison (Ingested)), Very Resilient or Very Strong, Vice (Food)
     */
    
    speciesOthers: {
      ogre: [
        'Dirty Fighting',
        'Night Vision',
        'Resistance (Poison Ingested)',
        'Very Resilient, Very Strong',
        `${traitPrefix}Size (Large)`,
        `${psychologyPrefix}Vice (Food)`,
        0,
      ],
      human: ['Doomed', 'Savvy, Suave', 3],
      dwarf: [
        'Magic Resistance',
        'Night Vision',
        'Read/Write, Relentless',
        'Resolute, Strong-minded',
        'Sturdy',
        0,
      ],
      halfling: [
        'Acute Sense (WFRP4NPCGEN.taste)',
        'Night Vision',
        'Resistance (Chaos)',
        'Small',
        2,
      ],
      helf: [
        'Acute Sense (WFRP4NPCGEN.sight)',
        'Coolheaded, Savvy',
        'Night Vision',
        'Second Sight, Sixth Sense',
        'Read/Write',
        0,
      ],
      welf: [
        'Acute Sense (WFRP4NPCGEN.sight)',
        'Hardy, Second Sight',
        'Night Vision',
        'Read/Write, Very Resilient',
        'Rover',
        0,
      ],
      gnome: [
        'Beneath Notice, Suffused with Ulgu',
        'Luck, Mimic',
        'Night Vision',
        'Fisherman, Read/Write',
        'Second Sight, Sixth Sense',
        'Small',
        0,
      ],
    },
    
    subSpeciesSkills: {
      human: {
        reiklander: [
          'Animal Care',
          'Charm',
          'Cool',
          'Evaluate',
          'Gossip',
          'Haggle',
          'Language (Bretonnian)',
          'Language (Wastelander)',
          'Leadership',
          'Wiedza (Reikland)',
          'Broń Biała (Podstawowa)',
          'Ranged (Bow)',
        ],
        middenheimer: [
          'Bribery',
          'Charm',
          'Cool',
          'Entertain (Any)',
          'Evaluate',
          'Gossip',
          'Haggle',
          'Leadership',
          'Wiedza (Middenheim)',
          'Broń Biała (Podstawowa)',
          'Ranged (Bow)',
          'Trade (any one)',
        ],
        middenlander: [
          'Animal Care',
          'Cool',
          'Evaluate',
          'Gossip',
          'Haggle',
          'Zastraszanie',
          'Language (Wastelander)',
          'Leadership',
          'Wiedza (Middenland)',
          'Broń Biała (Podstawowa)',
          'Sztuka Przetrwania',
          'Ranged (Bow)',
        ],
        nordlander: [
          'Consume Alcohol',
          'Evaluate',
          'Gossip',
          'Haggle',
          'Language (Norse)',
          'Language (Wastelander)',
          'Wiedza (Nordland)',
          'Broń Biała (Podstawowa)',
          'Ranged (Bow)',
          'Sail (any one)',
          'Swim',
          'Trade (any one)',
        ],
        tilean: [
          'Charm',
          'Cool',
          'Evaluate',
          'Gossip',
          'Haggle',
          'Language (Arabyan)',
          'Język (Reikspiel)',
          'Language (Estalian)',
          'Wiedza (Tilea)',
          'Broń Biała (Podstawowa)',
          'Ranged (Crossbow)',
          'Sail (any one)',
        ],
        'imperial-tilean': [
          'Animal Care',
          'Charm',
          'Cool',
          'Evaluate',
          'Gossip',
          'Haggle',
          'Language (Bretonnian)',
          'Language (Tilean)',
          'Leadership',
          'Wiedza (Reikland)',
          'Broń Biała (Podstawowa)',
          'Ranged (Bow)',
        ],
      },
      dwarf: {},
      halfling: {
        ashfield: [
          'Charm',
          'Consume Alcohol',
          'Haggle',
          'Wiedza (Reikland)',
          'Sleight of Hand',
          'Stealth (Any)',
          'Trade (Cook)',
          'Cool',
          'Intuition',
          'Language (Mootish)',
          'Ranged (any)',
        ],
        brambledown: [
          'Charm',
          'Consume Alcohol',
          'Haggle',
          'Wiedza (Reikland)',
          'Sleight of Hand',
          'Stealth (Any)',
          'Trade (Cook)',
          'Language (Mootish) ',
          'Nawigacja',
          'Sztuka Przetrwania ',
          'Swim',
        ],
        brandysnap: [
          'Charm',
          'Consume Alcohol',
          'Haggle',
          'Wiedza (Reikland)',
          'Sleight of Hand',
          'Stealth (Any)',
          'Trade (Cook)',
          'Animal Care',
          'Gamble',
          'Language (Mootish)',
          'Wiedza (Herbs)',
        ],
        hayfoot: [
          'Charm',
          'Consume Alcohol',
          'Haggle',
          'Wiedza (Reikland)',
          'Sleight of Hand',
          'Stealth (Any)',
          'Trade (Cook)',
          'Gamble',
          'Haggle',
          'Evaluate',
          'Language (Mootish)',
        ],
        hollyfoot: [
          'Charm',
          'Consume Alcohol',
          'Haggle',
          'Wiedza (Reikland)',
          'Sleight of Hand',
          'Stealth (Any)',
          'Trade (Cook)',
          'Bribery',
          'Haggle',
          'Gossip',
          'Language (Mootish)',
        ],
        'hayfoot—hollyfoot': [
          'Charm',
          'Consume Alcohol',
          'Haggle',
          'Wiedza (Reikland)',
          'Sleight of Hand',
          'Stealth (Any)',
          'Trade (Cook)',
          'Bribery',
          'Haggle',
          'Gossip',
          'Language (Mootish)',
        ],
        'hayfoot-hollyfoot': [
          'Charm',
          'Consume Alcohol',
          'Haggle',
          'Wiedza (Reikland)',
          'Sleight of Hand',
          'Stealth (Any)',
          'Trade (Cook)',
          'Bribery',
          'Haggle',
          'Gossip',
          'Language (Mootish)',
        ],
        lostpockets: [
          'Charm',
          'Consume Alcohol',
          'Haggle',
          'Wiedza (Reikland)',
          'Sleight of Hand',
          'Stealth (Any)',
          'Trade (Cook)',
          'Endurance',
          'Gamble',
          'Gossip',
          'Intuition',
        ],
        lowhaven: [
          'Charm',
          'Consume Alcohol',
          'Haggle',
          'Wiedza (Reikland)',
          'Sleight of Hand',
          'Stealth (Any)',
          'Trade (Cook)',
          'Bribery',
          'Haggle',
          'Zastraszanie',
          'Language (Mootish)',
        ],
        rumster: [
          'Charm',
          'Consume Alcohol',
          'Haggle',
          'Wiedza (Reikland)',
          'Sleight of Hand',
          'Stealth (Any)',
          'Trade (Cook)',
          'Endurance',
          'Gossip',
          'Haggle',
          'Language (Mootish)',
        ],
        skelfsider: [
          'Charm',
          'Consume Alcohol',
          'Haggle',
          'Wiedza (Reikland)',
          'Sleight of Hand',
          'Stealth (Any)',
          'Trade (Cook)',
          'Endurance',
          'Gamble',
          'Gossip',
          'Language (Mootish)',
        ],
        thorncobble: [
          'Charm',
          'Consume Alcohol',
          'Haggle',
          'Wiedza (Reikland)',
          'Sleight of Hand',
          'Stealth (Any)',
          'Trade (Cook)',
          'Gossip',
          'Leadership',
          'Wiedza (Heraldry)',
          'Language (Mootish)',
        ],
        tumbleberry: [
          'Charm',
          'Consume Alcohol',
          'Haggle',
          'Wiedza (Reikland)',
          'Sleight of Hand',
          'Stealth (Any)',
          'Trade (Cook)',
          'Gossip',
          'Haggle',
          'Wiedza (Any)',
          'Language (Mootish)',
        ],
      },
    },
    
    subSpeciesOthers: {
      human: {
        reiklander: ['Doomed', 'Savvy, Suave', 3],
        middenheimer: ['Doomed', 'Etiquette (any one), Strong Back', 3],
        middenlander: [`Doomed, ${randomTalent}1`, 'Menacing, Warrior Born', 3],
        nordlander: [
          `Doomed, ${randomTalent}1`,
          'Fisherman, Rover',
          'Stout-hearted, Very Resilient',
          2,
        ],
        tilean: ['Argumentative, Fisherman', 'Coolheaded, Suave', 3],
        'imperial-tilean': ['Doomed', 'Savvy, Suave', 3],
      },
      dwarf: {},
      welf: {
        harioth: [
          'Acute Sense (WFRP4NPCGEN.sight)',
          'Hardy, Second Sight',
          'Night Vision',
          'Read/Write, Very Resilient',
          'Rover',
          'Youngblood',
          0,
        ],
      },
      halfling: {
        ashfield: [
          'Acute Sense (WFRP4NPCGEN.taste)',
          'Night Vision',
          'Resistance (Chaos)',
          'Small',
          'Acute Sense (WFRP4NPCGEN.sight), Etiquette (Soldiers)',
          1,
        ],
        brambledown: [
          'Acute Sense (WFRP4NPCGEN.taste)',
          'Night Vision',
          'Resistance (Chaos)',
          'Small',
          'Gregarious, Seasoned Traveller',
          1,
        ],
        brandysnap: [
          'Acute Sense (WFRP4NPCGEN.taste)',
          'Night Vision',
          'Resistance (Chaos)',
          'Small',
          'Craftsman (Farmer), Sturdy',
          1,
        ],
        hayfoot: [
          'Acute Sense (WFRP4NPCGEN.taste)',
          'Night Vision',
          'Resistance (Chaos)',
          'Small',
          'Dealmaker, Etiquette (Guilders)',
          1,
        ],
        hollyfoot: [
          'Acute Sense (WFRP4NPCGEN.taste)',
          'Night Vision',
          'Resistance (Chaos)',
          'Small',
          'Craftsman (Any), Nimble Fingered',
          1,
        ],
        'hayfoot—hollyfoot': [
          'Acute Sense (WFRP4NPCGEN.taste)',
          'Night Vision',
          'Resistance (Chaos)',
          'Small',
          'Argumentative, Numismatics',
          1,
        ],
        'hayfoot-hollyfoot': [
          'Acute Sense (WFRP4NPCGEN.taste)',
          'Night Vision',
          'Resistance (Chaos)',
          'Small',
          'Argumentative, Numismatics',
          1,
        ],
        lostpockets: [
          'Acute Sense (WFRP4NPCGEN.taste)',
          'Night Vision',
          'Resistance (Chaos)',
          'Small',
          'Hardy, Stone Soup',
          1,
        ],
        lowhaven: [
          'Acute Sense (WFRP4NPCGEN.taste)',
          'Night Vision',
          'Resistance (Chaos)',
          'Small',
          'Criminal, Etiquette (Criminals), Etiquette (Guilders)',
          1,
        ],
        rumster: [
          'Acute Sense (WFRP4NPCGEN.taste)',
          'Night Vision',
          'Resistance (Chaos)',
          'Small',
          'Craftsman (Cook), Dealmaker',
          1,
        ],
        skelfsider: [
          'Acute Sense (WFRP4NPCGEN.taste)',
          'Night Vision',
          'Resistance (Chaos)',
          'Small',
          'Beneath Notice, Etiquette (Servants)',
          1,
        ],
        thorncobble: [
          'Acute Sense (WFRP4NPCGEN.taste)',
          'Night Vision',
          'Resistance (Chaos)',
          'Small',
          'Etiquette (Nobles), Etiquette (Scholar), Read/Write',
          1,
        ],
        tumbleberry: [
          'Acute Sense (WFRP4NPCGEN.taste)',
          'Night Vision',
          'Resistance (Chaos)',
          'Small',
          'Etiquette (Burgher), Etiquette (Guilders), Read/Write',
          1,
        ],
      },
    },
    
    originNames: {
      copher: 'Copher',
      elkalabad: 'El-Kalabad',
      lashiek: 'Lashiek',
      martek: 'Martek',
      sudenberg: 'Sudenberg',
      antoch: 'Antoch',
      sartosa: 'Sartosa',
      nomad: 'Nomad',
      languille: "L'Anguille",
      aquitaine: 'Aquitaine',
      artois: 'Artois',
      bastonne: 'Bastonne',
      bordeleaux: 'Bordeleaux',
      brionne: 'Brionne',
      carcassonne: 'Carcassonne',
      couronne: 'Couronne',
      gisoreux: 'Gisoreux',
      lyonesse: 'Lyonesse',
      montfort: 'Montfort',
      mousillon: 'Mousillon',
      parravon: 'Parravon',
      quenelles: 'Quenelles',
      weijin: 'Weijin',
      nangau: 'Nan-Gau',
      fuchow: 'Fu-Chow',
      shangyang: 'Shang-Yang',
      xianbei: 'Xianbei',
      yuanjin: 'Yuanjin',
      hankuo: 'Han Kuo',
      aradon: 'Aradón',
      catilinia: 'Catilinia',
      vanlen: 'Vanlen',
      navarr: 'Navarr',
      castill: 'Castill',
      laon: 'Laon',
      gaellica: 'Gaellica',
      vasconia: 'Vasconia',
      andal: 'Andal',
      murc: 'Murc',
      portul: 'Portul',
      kingdomofbhalluka: 'WFRP4NPCGEN.bhalluka',
      kingdomofgandharva: 'WFRP4NPCGEN.gandharva',
      kingdomofsingha: 'WFRP4NPCGEN.singha',
      kingdomoflakshana: 'WFRP4NPCGEN.lakshana',
      kingdomofpanchala: 'WFRP4NPCGEN.panchala',
      kingdomofkosala: 'WFRP4NPCGEN.kosala',
      kingdomofkurya: 'WFRP4NPCGEN.kurya',
      northernkislev: 'WFRP4NPCGEN.northernkislev',
      easternkislev: 'WFRP4NPCGEN.easternkislev',
      westernkislev: 'WFRP4NPCGEN.westernkislev',
      southernkislev: 'WFRP4NPCGEN.southernkislev',
      northernclans: 'WFRP4NPCGEN.northernclans',
      easternclans: 'WFRP4NPCGEN.easternclans',
      westernclans: 'WFRP4NPCGEN.westernclans',
      southernclans: 'WFRP4NPCGEN.southernclans',
      aeslingstribe: 'WFRP4NPCGEN.aeslingstribe',
      baersonlingstribe: 'WFRP4NPCGEN.baersonlingstribe',
      bjornlingstribe: 'WFRP4NPCGEN.bjornlingstribe',
      graelingstribe: 'WFRP4NPCGEN.graelingstribe',
      sarlstribe: 'WFRP4NPCGEN.sarlstribe',
      skaelingstribe: 'WFRP4NPCGEN.skaelingstribe',
      skeggitribe: 'WFRP4NPCGEN.skeggitribe',
      vargstribe: 'WFRP4NPCGEN.vargstribe',
      northernsouthlandstribes: 'WFRP4NPCGEN.northernsouthlandstribes',
      easternsouthlandstribes: 'WFRP4NPCGEN.easternsouthlandstribes',
      westernsouthlandstribes: 'WFRP4NPCGEN.westernsouthlandstribes',
      southernsouthlandstribes: 'WFRP4NPCGEN.southernsouthlandstribes',
      remas: 'Remas',
      luccini: 'Luccini',
      trantio: 'Trantio',
      pavona: 'Pavona',
      verezzo: 'Verezzo',
      miragliano: 'Miragliano',
      tobaro: 'Tobaro',
      newworldcolonies: 'WFRP4NPCGEN.newworldcolonies',
      goldtoothtribe: 'WFRP4NPCGEN.goldtoothtribe',
      thundergutstribe: 'WFRP4NPCGEN.thundergutstribe',
      crossedclubs: 'WFRP4NPCGEN.crossedclubs',
      thesonsofthemountain: 'WFRP4NPCGEN.thesonsofthemountain',
      feastmastertribe: 'WFRP4NPCGEN.feastmastertribe',
      rockskulls: 'WFRP4NPCGEN.rockskulls',
      bloodguzzlers: 'WFRP4NPCGEN.bloodguzzlers',
      ironskintribe: 'WFRP4NPCGEN.ironskintribe',
      thelazarghs: 'WFRP4NPCGEN.thelazarghs',
      mountaineaterstribe: 'WFRP4NPCGEN.mountaineaterstribe',
      eyebitertribe: 'WFRP4NPCGEN.eyebitertribe',
    },
    
    speciesOrigin: {},
    
    subSpeciesOrigins: {},
    
    randomTalents: [
      'Acute Sense (any one)',
      'Ambidextrous',
      'Animal Affinity',
      'Artistic',
      'Attractive',
      'Coolheaded',
      'Craftsman (any one)',
      'Flee!',
      'Hardy',
      'Lightning Reflexes',
      'Linguistics',
      'Luck',
      'Marksman',
      'Mimic',
      'Night Vision',
      'Nimble Fingered',
      'Noble Blood',
      'Orientation',
      'Perfect Pitch',
      'Pure Soul',
      'Read/Write',
      'Resistance (any one)',
      'Savvy',
      'Sharp',
      'Sixth Sense',
      'Strong Legs',
      'Sturdy',
      'Suave',
      'Super Numerate',
      'Very Resilient',
      'Very Strong',
      'Warrior Born',
    ]
    }
  }
});