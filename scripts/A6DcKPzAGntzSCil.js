let roll = await new Roll("1d10").roll()

roll.toMessage(this.script.getChatData({flavor : `${this.effect.name} (Czas trwania)`}));

this.effect.updateSource({"duration.rounds" : roll.total})