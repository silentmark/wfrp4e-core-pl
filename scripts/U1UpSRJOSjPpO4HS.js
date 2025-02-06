let mutations = await warhammer.utility.findAllItems("mutation", "Wczytywanie Mutacji...")
let roll = Math.floor(CONFIG.Dice.randomUniform() * mutations.length);
this.actor.createEmbeddedDocuments("Item", [mutations[roll]]);
this.script.notification(`Otrzymano: ${mutations[roll].name}`)