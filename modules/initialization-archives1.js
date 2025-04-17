Hooks.on("init", () => {
    if (typeof (WFRP4eArchives1InitWrapper) != 'undefined') {
        game.settings.register("wfrp4e-archives1", "initialized", {
            name: "Inicjalizacja",
            scope: "world",
            config: false,
            default: false,
            type: Boolean
        });
    
        game.settings.registerMenu("wfrp4e-archives1", "init-dialog", {
            name: "WFRP4e Zestaw Startowy",
            label: "Konfiguracja",
            hint: "Importuj lub aktualizuj zawartość modułu WFRP4e Archiwa Imperium vol I",
            type: WFRP4eArchives1InitWrapper,
            restricted: true
        })

        WFRP4eArchives1InitWrapper.prototype.render = function () {
            let html = `<p class="notes">Zainicjalizować moduł zawartości WFRP4e Archiwa Imperium Vol I?<br><br>Zaimportuje lub zaktualizuje to wszystkich aktorów, przedmioty, dzienniki oraz sceny w twoim świecie, posortuje w folderach i umieści notatki na mapach</p>
            <ul>
                <li>13 Aktorów</li>
                <li>58 Wpisów w dzienniku</li>
                <li>35 Przedmiotów</li>
                <li>2 Sceny</li>
            </ul> <p class="notes">
            Warhammer Fantasy Roleplay 4th Edition Archives of the Empire Vol. I Module.<br><br>

            No part of this publication may be reproduced, distributed, stored in a retrieval system, or transmitted in any form by any means, electronic, mechanical, photocopying, recording or otherwise without the prior permission of the publishers.<br><br>
            
            Warhammer Fantasy Roleplay 4th Edition © Copyright Games Workshop Limited 2020. Warhammer Fantasy Roleplay 4th Edition, the Warhammer Fantasy Roleplay 4th Edition logo, GW, Games Workshop, Warhammer, The Game of Fantasy Battles, the twin-tailed comet logo, and all associated logos, illustrations, images, names, creatures, races, vehicles, locations, weapons, characters, and the distinctive likeness thereof, are either ® or TM, and/or © Games Workshop Limited, variably registered around the world, and used under licence. Cubicle 7 Entertainment and the Cubicle 7 Entertainment logo are trademarks of Cubicle 7 Entertainment Limited. All rights reserved.<br><br>
            
            <img src="modules/wfrp4e-archives1/c7.png" height=50 width=50/>   <img src="modules/wfrp4e-archives1/warhammer.png" height=50 width=50/>
            <br>
            Published by: <b>Cubicle 7 Entertainment Ltd</b><br>
            Foundry Edition by <b>Russell Thurman (Moo Man)</b><br>
            Special thanks to: <b>Games Workshop, Fatshark</b><br><br>
            
            <a href="mailto: info@cubicle7games.com">info@cubicle7games.com</a>`
            new WarhammerModuleInitializer("wfrp4e-archives1", "WFRP4e Archives of the Empire Vol. I Initialization",html).render(true);
        }
        
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