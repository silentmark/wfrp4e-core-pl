Hooks.on("init", () => {
    if (typeof (WFRP4eArchives1InitWrapper) != 'undefined') {
        game.settings.register("wfrp4e-archives1", "initialized", {
            name: "Inicjalizacja",
            scope: "world",
            config: false,
            default: false,
            type: Boolean
        });
        
        setTimeout(async () => {
            
            delete game.wfrp4e.config.speciesCareerReplacements.dwarf.Messenger;

            delete game.wfrp4e.config.speciesCareerReplacements.welf["Bounty Hunter"];

            delete game.wfrp4e.config.speciesCareerReplacements.halfling["Road Warden"];
            delete game.wfrp4e.config.speciesCareerReplacements.halfling["Road warden"];
            delete game.wfrp4e.config.speciesCareerReplacements.halfling.Soldier;

            game.wfrp4e.utility.mergeCareerReplacements({
                dwarf : {
                    "Posłaniec" : ["Zwiadowczyni z Karaku"]
                },
                welf : {
                    "Łowczyni Nagród" : ["Wędrowny Duch"]
                },
                halfling : {
                    "Strażniczka Dróg" : ["Strażniczka Pól"],
                    "Żołnierz" : ["Borsuczy Jeździec"]
                }
            });
        }, 1000)
    }
})