Hooks.on("init", () => {

    if (typeof (WFRP4eUpInArmsInitWrapper) != 'undefined') {
        game.settings.register("wfrp4e-up-in-arms", "initialized", {
            name: "Inicjalizacja",
            scope: "world",
            config: false,
            default: false,
            type: Boolean,
        });

        game.settings.registerMenu("wfrp4e-up-in-arms", "init-dialog", {
            name: "WFRP4e Pod Bronią - Konfiguracja",
            label: "Konfiguracja",
            hint: "Importuj lub aktualizuj zawartość modułu WFRP4e Pod Bronią",
            type: WFRP4eUpInArmsInitWrapper,
            restricted: true
        });

        WFRP4eUpInArmsInitWrapper.prototype.render = function () {
            const html = `<p class="notes">Zainicjalizować moduł zawartości WFRP4e Pod Bronią?<br><br>Zaimportuje lub zaktualizuje to wszystkich aktorów, przedmioty, dzienniki oraz sceny w twoim świecie, posortuje w folderach i umieści notatki na mapach</p>
            <ul>
            <li>12 wpisy do dzienników (66 stron)</li>
            <li>14 Tabel</li>
            </ul> <p class="notes">
            Warhammer Fantasy Roleplay 4th Edition Up in Arms Module.<br><br>

            No part of this publication may be reproduced, distributed, stored in a retrieval system, or transmitted in any form by any means, electronic, mechanical, photocopying, recording or otherwise without the prior permission of the publishers.<br><br>
            
            Warhammer Fantasy Roleplay 4th Edition © Copyright Games Workshop Limited 2023. Warhammer Fantasy Roleplay 4th Edition, the Warhammer Fantasy Roleplay 4th Edition logo, GW, Games Workshop, Warhammer, The Game of Fantasy Battles, the twin-tailed comet logo, and all associated logos, illustrations, images, names, creatures, races, vehicles, locations, weapons, characters, and the distinctive likeness thereof, are either ® or TM, and/or © Games Workshop Limited, variably registered around the world, and used under licence. Cubicle 7 Entertainment and the Cubicle 7 Entertainment logo are trademarks of Cubicle 7 Entertainment Limited. All rights reserved.<br><br>
            
            <img src="modules/wfrp4e-up-in-arms/c7.png" height=50 width=50/>   <img src="modules/wfrp4e-up-in-arms/warhammer.png" height=50 width=50/>
            <br>
            Published by: <b>Cubicle 7 Entertainment Ltd</b><br>
            Foundry Edition by <b>Russell Thurman (Moo Man)</b><br>
            Special thanks to: <b>Games Workshop, Fatshark</b><br><br>
            
            <a href="mailto: info@cubicle7games.com">info@cubicle7games.com</a>`;
            
            new WarhammerModuleInitializer("wfrp4e-up-in-arms", "WFRP4e - Inicjalizacja Pod Bronią", html).render(true);
        }
    

        setTimeout(async () => {
            
            const batter = game.wfrp4e.config.groupAdvantageActions.find(a => a.name == "Batter");
            const trick = game.wfrp4e.config.groupAdvantageActions.find(a => a.name == "Trick");
            const additionalEffort = game.wfrp4e.config.groupAdvantageActions.find(a => a.name == "Additional Effort");
            const fleeFromHarm = game.wfrp4e.config.groupAdvantageActions.find(a => a.name == "Flee from Harm");
            const additionalAction = game.wfrp4e.config.groupAdvantageActions.find(a => a.name == "Additional Action");

            batter.name = "Grzmotnięcie";
            batter.description = "Kiedy masz doczynienia z bardziej uzdolnionym przeciwnikiem, czasem brutalna siła pozwala zwyciężyć tam, gdzie inne podejścia zawiodą.";
            batter.effect = "<strong>Akcja Specjalna</strong>: Aby postać Grzmotnęła przeciwnika, musi wykonać Test Przeciwstawny Siła/Siła. Jeśli Bohater wygrał w Teście, to jego przeciwnik otrzymuje +1 do Przewagi oraz Stan @Condition[Powalenie]. Jeżeli Bohater przegra Test Przeciwstawny, to jego przeciwnik otrzymuje +1 do Przewagi, a Akcja się kończy. Postać nie otrzymuje Przewagi za Wygraną, gdy wygrywa ten Test Przeciwstawny";

            trick.name = "Sztuczka";
            trick.description = "Poświęcasz moment na rzucenie przeciwnikowi ziemią w oczy albo podpalenie go chluśniętym płonącym olejem. To ryzykowny manewr i niewielu wrogów da się oszukać w ten sam sposób więcej niż raz.";
            trick.effect = "<strong>Akcja Specjalna</strong>: Sztuczka wymaga wykonania Testu Przeciwstawnego Zwinność/Zwinność z przeciwnikiem. Jeśli Bohater wygra w Teście, otrzymuje +1 do Przewagi. Jeżeli MG uzna, że okoliczności to uzasadniają, może również przyznać przeciwnikowi jeden z podanych Stanów: @Condition[Podpalenie], @Condition[Oślepienie] albo @Condition[Pochwycenie]. Jeśli Bohater przegra Test Przeciwstawny, to przeciwnik otrzymuje +1 do Przewagi, a Akcja się kończy. MG może nie zgodzić się na przyznanie żadnego z wymienionych wyżej Stanów, jeżeli postać nie ma pod ręką odpowiedniego przedmiotu albo przyznała wcześniej ten Stan temu samemu przeciwnikowi. Postać nie otrzymuje Przewagi za Wygraną, gdy wygrywa ten Test Przeciwstawny.";
            
            additionalEffort.name = "Dodatkowy Wysiłek";
            additionalEffort.description = "W desperackich okolicznościach możesz wykorzystać swój impet, by zwiększyć szanse na sukces.";
            additionalEffort.effect = "<strong>Darmowa Akcja</strong>: Postać otrzymuje premię +10 do dowolnego Testu, zanim go wykona. Może wydać dodatkowe punkty, aby otrzymać kumulatywną premię +10 za każdy wydany punkt Przewagi. Dla przykładu, postać może wydać 3 punkty Przewagi, aby otrzymać premię +20, albo 4 punkty Przewagi, by otrzymać premię +30. Test, do którego została użyta ta premia, nigdy nie generuje Przewagi wykonującemu go Bohaterowi.";
        
            fleeFromHarm.name = "Ucieczka przed Zagrożeniem";
            fleeFromHarm.description = "Wykorzystujesz moment chwilowego spokoju albo rozproszenie uwagi przeciwnika i wycofujesz się z walki.";
            fleeFromHarm.effect = "<strong>Ruch</strong>: Postać może odsunąć się od przeciwnika bez żadnych kar. Ta Akcja ignoruje zasady @UUID[Compendium.wfrp4e-core.journals.NS3YGlJQxwTggjRX.JournalEntryPage.bdfiyhEYtKs7irqc#disengaging]{Odwrotu}.";
            
            additionalAction.name = "Dodatkowa Akcja";
            additionalAction.description = " Wykorzystujesz okazję do działania, żeby osiągnąć coś wyjątkowego.";
            additionalAction.effect = "<strong>Darmowa Akcja</strong>: Postać może wykonać dodatkową Akcję. Ta Akcja nigdy nie generuje Przewagi wykonującemu ją Bohaterowi. Postać może wydać punkty Przewagi, by wykonać dodatkową Akcję, tylko raz na Turę.";


            game.wfrp4e.trade.tradeData.river.cargoTypes.citrusFruit = "Cytrusy";
            game.wfrp4e.trade.tradeData.river.cargoTypes.olives = "Oliwki";
            game.wfrp4e.trade.tradeData.river.cargoTypes.saltfish = "Solone Ryby";
            game.wfrp4e.trade.tradeData.river.cargoTypes.stone = "Kamień";

            delete game.wfrp4e.config.speciesCareerReplacements.human.Engineer;
            delete game.wfrp4e.config.speciesCareerReplacements.human.Scholar;
            delete game.wfrp4e.config.speciesCareerReplacements.human.Pedlar;
            delete game.wfrp4e.config.speciesCareerReplacements.human.Cavalryman;
            delete game.wfrp4e.config.speciesCareerReplacements.human.Knight;
            delete game.wfrp4e.config.speciesCareerReplacements.human.Soldier;
            delete game.wfrp4e.config.speciesCareerReplacements.human["Warrior Priest"];

            delete game.wfrp4e.config.speciesCareerReplacements.dwarf.Engineer;
            delete game.wfrp4e.config.speciesCareerReplacements.dwarf.Scholar;
            delete game.wfrp4e.config.speciesCareerReplacements.dwarf.Pedlar;
            delete game.wfrp4e.config.speciesCareerReplacements.dwarf.Soldier;

            delete game.wfrp4e.config.speciesCareerReplacements.helf.Scholar;
            delete game.wfrp4e.config.speciesCareerReplacements.helf.Pedlar;
            delete game.wfrp4e.config.speciesCareerReplacements.helf.Cavalryman;
            delete game.wfrp4e.config.speciesCareerReplacements.helf.Soldier;

            delete game.wfrp4e.config.speciesCareerReplacements.welf.Scholar;
            delete game.wfrp4e.config.speciesCareerReplacements.welf.Pedlar;
            delete game.wfrp4e.config.speciesCareerReplacements.welf.Soldier;

            delete game.wfrp4e.config.speciesCareerReplacements.halfling.Engineer;
            delete game.wfrp4e.config.speciesCareerReplacements.halfling.Scholar;
            delete game.wfrp4e.config.speciesCareerReplacements.halfling.Pedlar;
            delete game.wfrp4e.config.speciesCareerReplacements.halfling.Soldier;

            delete game.wfrp4e.config.speciesCareerReplacements["human-tilean"].Flagellant;

            game.wfrp4e.utility.mergeCareerReplacements({
                human : {
                    "Inżynier" : ["Artylerzysta"],
                    "Uczony" : ["Kartografka"],
                    "Domokrążca" : ["Ciura Obozowa"],
                    "Kawalerzysta" : ["Lekki Kawalerzysta"],
                    "Rycerz" : ["Rycerz Najemny","Rycerz Płonącego Słońca","Rycerz Białego Wilka","Rycerz Pantery"],
                    "Żołnierz" : ["Łuczniczka", "Halabardnik", "Strzelec", "Gwardzista Elektorski", "Pikinier", "Specjalista Oblężniczy"],
                    "Kapłan Bitewny" : ["Priest of Myrmidia"]
                },
                dwarf : {
                    "Inżynier" : ["Artylerzysta"],
                    "Uczony" : ["Kartografka"],
                    "Domokrążca" : ["Ciura Obozowa"],
                    "Żołnierz" : ["Halabardnik", "Strzelec", "Specjalista Oblężniczy"],
                },
                helf : {
                    "Uczony" : ["Kartografka"],
                    "Domokrążca" : ["Ciura Obozowa"],
                    "Kawalerzysta" : ["Lekki Kawalerzysta"],
                    "Żołnierz" : ["Łuczniczka", "Specjalista Oblężniczy", "Artylerzysta"],
                },
                welf : {
                    "Uczony" : ["Kartografka"],
                    "Domokrążca" : ["Ciura Obozowa"],
                    "Żołnierz" : ["Łuczniczka"],
                    "Kawalerzysta" : ["Lekki Kawalerzysta"]
                },
                halfling : {
                    "Inżynier" : ["Artylerzysta"],
                    "Uczony" : ["Kartografka"],
                    "Domokrążca" : ["Camp Follower"],
                    "Żołnierz" : ["Łuczniczka", "Halabardnik", "Strzelec", "Specjalista Oblężniczy"],
                },
                "human-tilean" : {
                    "Biczownik" : ["Mniszka", "Kapłan"]
                }
            });

            const resp = await fetch("/modules/wfrp4e-core-pl/gazetteer.json");
            const gazetteer = await resp.json();

            let gazetteerTable = game.wfrp4e.trade.gazetteers["river"];
            for (let record of gazetteer) {
                let entry = gazetteerTable.find(x=>x.name == record.name);
                if (entry) {
                    foundry.utils.mergeObject(entry, record);
                } else {
                    gazetteerTable.push(record);
                }
            }
        }, 1000);
    }
})