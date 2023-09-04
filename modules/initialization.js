Hooks.on("init", () => {
	CONFIG.supportedLanguages["pl"] = "pl";
    game.data.packs = game.data.packs.filter(i => i.name != "basic" || i.system != "wfrp4e");

	// Register Advantage cap
	game.settings.register("wfrp4e-core", "initialized", {
		name: "Inicjalizacja",
		scope: "world",
		config: false,
		default: false,
		type: Boolean,
	});

	game.settings.registerMenu("wfrp4e-core", "init-dialog", {
		name: "WFRP4e Podręcznik Główny - Konfiguracja",
		label: "Konfiguracja",
		hint: "Importuj lub aktualizuj zawartość modułu podręcznika głównego",
		type: WFRP4eCoreInitWrapper,
		restricted: true,
	});
});

WFRP4eCoreInitWrapper.prototype.render = function () {
	const html = `<img src="/modules/wfrp4e-core/art/ui/logo.webp" style="margin-right: auto;margin-left: auto;width: 40%;display: block;"/>
	<p class="notes">Zainicjalizować moduł zawartości WFRP4e?<br><br>Zaimportuje lub zaktualizuje to wszystkie dzienniki i sceny w twoim świecie, posortuje w folderach i umieści notatki na mapach</p>
	<ul>
	<li>12 wpisy do dzienników (Tło i Zasady) zawierających 271 stron</li>
	<li>52 Tabele</li>
	<li>3 Sceny - uwzględniając mapę Reiklandu ze znacznikami.</li>
	</ul>
	<p class="notes">
	Warhammer Fantasy Roleplay 4th Edition Core Module.<br><br>

	No part of this publication may be reproduced, distributed, stored in a retrieval system, or transmitted in any form by any means, electronic, mechanical, photocopying, recording or otherwise without the prior permission of the publishers.<br><br>
	
	Warhammer Fantasy Roleplay 4th Edition © Copyright Games Workshop Limited 2020. Warhammer Fantasy Roleplay 4th Edition, the Warhammer Fantasy Roleplay 4th Edition logo, GW, Games Workshop, Warhammer, The Game of Fantasy Battles, the twin-tailed comet logo, and all associated logos, illustrations, images, names, creatures, races, vehicles, locations, weapons, characters, and the distinctive likeness thereof, are either ® or TM, and/or © Games Workshop Limited, variably registered around the world, and used under licence. Cubicle 7 Entertainment and the Cubicle 7 Entertainment logo are trademarks of Cubicle 7 Entertainment Limited. All rights reserved.<br><br>
	
	<img src="modules/wfrp4e-core/c7.png" height=50 width=50/>   <img src="modules/wfrp4e-core/warhammer.png" height=50 width=50/>
	<br>
	Published by: <b>Cubicle 7 Entertainment Ltd</b><br>
	Foundry Edition by <b>Russell Thurman (Moo Man)</b><br>
	Special thanks to: <b>Games Workshop, Fatshark</b><br><br>
	
	<a href="mailto: info@cubicle7games.com">info@cubicle7games.com</a>`;
    
    const moduleInitializer = new game.wfrp4e.apps.ModuleInitializer(
		"wfrp4e-core",
		"WFRP4e - Inicjalizacja Podręcznika Głównego",
		html
	);
    
    moduleInitializer.initialize = async function () {
        return new Promise((resolve) => {
            fetch(`modules/${this.moduleKey}-pl/initialization.json`).then(async r => r.json()).then(async json => {
                let createdFolders = await Folder.create(json)
                for (let folder of createdFolders)
                    this.folders[folder.type][folder.name] = folder;

                for (let folderType in this.folders) {
                    for (let folder in this.folders[folderType]) {

                        let parent = this.folders[folderType][folder].getFlag(this.moduleKey, "initialization-parent")
                        if (parent) {
                            let parentId = this.folders[folderType][parent].id
                            await this.folders[folderType][folder].update({ parent: parentId })
                        }
                    }
                }

                await this.initializeDocuments()
                resolve()
            })
        })
    };

    moduleInitializer.render(true);
}

CONFIG.JournalEntry.noteIcons = {
    "Marker": "systems/wfrp4e/icons/buildings/point_of_interest.png",
    "Wioska 1": "systems/wfrp4e/icons/buildings/village1.png",
    "Wioska 2": "systems/wfrp4e/icons/buildings/village2.png",
    "Wioska 3": "systems/wfrp4e/icons/buildings/village3.png",
    "Imperialne Koszary": "systems/wfrp4e/icons/buildings/empire_barracks.png",
    "Nawiedzony Las": "systems/wfrp4e/icons/buildings/haunted_wood.png",
    "Aptekarz": "systems/wfrp4e/icons/buildings/apothecary.png",
    "Droga": "systems/wfrp4e/icons/buildings/roads.png",
    "Obóz Orków": "systems/wfrp4e/icons/buildings/orc_city.png",
    "Cmentarz": "systems/wfrp4e/icons/buildings/cemetery.png",
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
    "Jedzenie": "systems/wfrp4e/icons/buildings/food.png",
    "Jedzenie 2": "systems/wfrp4e/icons/buildings/food2.png",
    "Dwór": "systems/wfrp4e/icons/buildings/court.png",
    "Jaskinia 1": "systems/wfrp4e/icons/buildings/cave1.png",
    "Jaskinia 2": "systems/wfrp4e/icons/buildings/cave2.png",
    "Jaskinia 3": "systems/wfrp4e/icons/buildings/cave3.png",
    "Miejsce Kultu Bretonii": "systems/wfrp4e/icons/buildings/bretonnia_worship.png",
    "Miejsce Kultu Chaosu": "systems/wfrp4e/icons/buildings/chaos_worship.png",
    "Menhiry": "systems/wfrp4e/icons/buildings/standing_stones.png",
    "Leśne Elfy 1": "systems/wfrp4e/icons/buildings/welves1.png",
    "Leśne Elfy 2": "systems/wfrp4e/icons/buildings/welves2.png",
    "Leśne Elfy 3": "systems/wfrp4e/icons/buildings/welves3.png",
    "Stajnia": "systems/wfrp4e/icons/buildings/stables.png",
    "Krasnoludzka Twierdza 1": "systems/wfrp4e/icons/buildings/dwarf_hold1.png",
    "Krasnoludzka Twierdza 2": "systems/wfrp4e/icons/buildings/dwarf_hold2.png",
    "Krasnoludzka Twierdza 3": "systems/wfrp4e/icons/buildings/dwarf_hold3.png",
    "Farma": "systems/wfrp4e/icons/buildings/farms.png",
    "Kowal": "systems/wfrp4e/icons/buildings/blacksmith.png",
    "Strażnica": "systems/wfrp4e/icons/buildings/guards.png",
    "Magia": "systems/wfrp4e/icons/buildings/magic.png",
    "Metal": "systems/wfrp4e/icons/buildings/metal.png",
    "Góra 1": "systems/wfrp4e/icons/buildings/mountains1.png",
    "Góra 2": "systems/wfrp4e/icons/buildings/mountains2.png",
    "Mury Zamkowe": "systems/wfrp4e/icons/buildings/castle_wall.png",
    "Orki": "systems/wfrp4e/icons/buildings/orcs.png",
    "Portal Chaosu": "systems/wfrp4e/icons/buildings/chaos_portal.png",
    "Zajazd 1": "systems/wfrp4e/icons/buildings/inn1.png",
    "Zajazd 2": "systems/wfrp4e/icons/buildings/inn2.png",
    "Bagno": "systems/wfrp4e/icons/buildings/swamp.png",
    "Zwoje": "systems/wfrp4e/icons/buildings/scroll.png",
    "Port": "systems/wfrp4e/icons/buildings/port.png",
    "Obóz Zwierzoludzi 1": "systems/wfrp4e/icons/buildings/beastmen_camp1.png",
    "Obóz Zwierzoludzi 2": "systems/wfrp4e/icons/buildings/beastmen_camp2.png",
    "Ruiny": "systems/wfrp4e/icons/buildings/ruins.png",
    "Tartak": "systems/wfrp4e/icons/buildings/lumber.png",
    "Sigmar": "systems/wfrp4e/icons/buildings/sigmar_worship.png",
    "Świątynia": "systems/wfrp4e/icons/buildings/temple.png",
    "Płótna": "systems/wfrp4e/icons/buildings/textile.png",
    "Wieża 1": "systems/wfrp4e/icons/buildings/tower1.png",
    "Wieża 2": "systems/wfrp4e/icons/buildings/tower2.png",
    "Wieża Czarownika": "systems/wfrp4e/icons/buildings/wizard_tower.png",
    "Ulric": "systems/wfrp4e/icons/buildings/ulric_worship.png"
};