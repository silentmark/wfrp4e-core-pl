Hooks.on("init", () => {

    if (typeof (WFRP4eSSInitWrapper) != 'undefined') {
        game.settings.register("wfrp4e-starter-set", "initialized", {
            name: "Inicjalizacja",
            scope: "world",
            config: false,
            default: false,
            type: Boolean
        });
    
        game.settings.registerMenu("wfrp4e-starter-set", "init-dialog", {
            name: "WFRP4e Zestaw Startowy",
            label: "Konfiguracja",
            hint: "Importuj lub aktualizuj zawartość modułu WFRP4e Zestaw Startowy",
            type: WFRP4eSSInitWrapper,
            restricted: true
        })

        WFRP4eSSInitWrapper.prototype.render = function () {
            let html = `<p class="notes">Zainicjalizować moduł zawartości WFRP4e Zestaw Startowy?<br><br>Zaimportuje lub zaktualizuje to wszystkich aktorów, przedmioty, dzienniki oraz sceny w twoim świecie, posortuje w folderach i umieści notatki na mapach</p>
            <ul>
            <li>60 Aktorów</li>
            <li>8 Wpisów do dzienników (łącznie 122 strony)</li>
            <li>3 Sceny - w tym mapa Ubersreik z pinezkami</li>
            <li>4 Tablele - Rany Krytyczne</li>
            </ul> <p class="notes">
            Warhammer Fantasy Roleplay 4th Edition Starter Set Module.<br><br>

            No part of this publication may be reproduced, distributed, stored in a retrieval system, or transmitted in any form by any means, electronic, mechanical, photocopying, recording or otherwise without the prior permission of the publishers.<br><br>
            
            Warhammer Fantasy Roleplay 4th Edition © Copyright Games Workshop Limited 2023. Warhammer Fantasy Roleplay 4th Edition, the Warhammer Fantasy Roleplay 4th Edition logo, GW, Games Workshop, Warhammer, The Game of Fantasy Battles, the twin-tailed comet logo, and all associated logos, illustrations, images, names, creatures, races, vehicles, locations, weapons, characters, and the distinctive likeness thereof, are either ® or TM, and/or © Games Workshop Limited, variably registered around the world, and used under licence. Cubicle 7 Entertainment and the Cubicle 7 Entertainment logo are trademarks of Cubicle 7 Entertainment Limited. All rights reserved.<br><br>
            
            <img src="modules/wfrp4e-starter-set/c7.png" height=50 width=50/>   <img src="modules/wfrp4e-starter-set/warhammer.png" height=50 width=50/>
            <br>
            Published by: <b>Cubicle 7 Entertainment Ltd</b><br>
            Foundry Edition by <b>Russell Thurman (Moo Man)</b><br>
            Special thanks to: <b>Games Workshop, Fatshark</b><br><br>
            
            <a href="mailto: info@cubicle7games.com">info@cubicle7games.com</a>
            `

            new WarhammerModuleInitializer("wfrp4e-starter-set", "WFRP4e - Inicjalizacja Zestawu Startowego",html).render(true);
        }
    }
})