Hooks.on("init", () => {
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
		type: WFRP4eCoreInitWrapperPL,
		restricted: true,
	});
});

Hooks.on("renderCompendiumDirectory", async () => {
	if (game.packs.get("wfrp4e.basic")) {
		game.packs.delete("wfrp4e.basic");
		ui.sidebar.element.find("[data-pack='wfrp4e.basic']").remove();
	}
	if (game.packs.get("wfrp4e-pl.basic")) {
		game.packs.delete("wfrp4e-pl.basic");
		ui.sidebar.element.find("[data-pack='wfrp4e-pl.basic']").remove();
	}
});

class WFRP4eCoreInitWrapperPL extends WFRP4eCoreInitWrapper {
	render() {
		let html = `<img src="/modules/wfrp4e-core/art/ui/logo.webp" style="margin-right: auto;margin-left: auto;width: 40%;display: block;"/>
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

		new game.wfrp4e.apps.ModuleInitializer(
			"wfrp4e-core",
			"WFRP4e - Inicjalizacja Podręcznika Głównego",
			html,
		).render(true);
	}
}
