Hooks.on("init", () => {
	if (typeof Babele !== "undefined") {
		Babele.get().register({
			module: "wfrp4e-core-pl",
			lang: "pl",
			dir: "compendium",
		});
	}

	Babele.get().registerConverters({});
});
