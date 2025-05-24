Hooks.on("init", () => {

    if (typeof (WFRP4eSSInitWrapper) != 'undefined') {
        game.settings.register("wfrp4e-starter-set", "initialized", {
            name: "Inicjalizacja",
            scope: "world",
            config: false,
            default: false,
            type: Boolean
        });
    }
})