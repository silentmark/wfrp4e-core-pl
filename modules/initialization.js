Hooks.on("init", () => {
	CONFIG.supportedLanguages["pl"] = "Polski";
    game.data.packs = game.data.packs.filter(i => i.name != "basic" || i.system != "wfrp4e");

	// Register Advantage cap
	game.settings.register("wfrp4e-core", "initialized", {
		name: "Inicjalizacja",
		scope: "world",
		config: false,
		default: false,
		type: Boolean,
	});
});

WarhammerModuleInitializationV2.initialize = async function (ev, target) {
    let key = target.closest("[data-module]").dataset.module;
    let module = game.modules.get(key);
    let dialogContent = `<p>Czy chcesz zainicjalizować moduł <strong>${module.title}</strong>? Spowoduje to zaimportowanie następujących dokumentów z kompendium do twojego świata.</p>`;
    dialogContent += `
    <ul>
    ${module.flags.initializationPacks.map(p => 
{
    let pack = game.packs.get(p);
    pack.getIndex();
    return `<li>${pack.metadata.label}: ${pack.index.size} </li>`;
}).join("")}
    </ul>
    <hr>
    ${systemConfig().copyrightText.replace("@AUTHORS@", Array.from(module.authors).slice(0, module.authors.size - 1).map(i => i.name).join(", "))}
    `;
    if (await foundry.applications.api.DialogV2.confirm({window: {title : `Initialize ${module.title}`}, content : dialogContent, classes : ["initialization"]}))
    {
        new WarhammerModuleContentHandler(module).initialize();
    }
}
WarhammerModuleInitializationV2.DEFAULT_OPTIONS.actions.initialize = WarhammerModuleInitializationV2.initialize;

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