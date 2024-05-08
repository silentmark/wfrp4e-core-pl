let mutations = await game.wfrp4e.utility.findAll("mutation", "Wczytywanie Mutacji...")
let roll = Math.floor(CONFIG.Dice.randomUniform() * mutations.length);
this.actor.createEmbeddedDocuments("Item", [mutations[roll]]);
this.script.scriptNotification(`Otrzymano: ${mutations[roll].name}`)