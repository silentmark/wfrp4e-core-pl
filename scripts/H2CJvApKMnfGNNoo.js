 if (args.test.item?.type == "skill" && args.test.item.name.includes(game.i18n.localize("NAME.Stealth")))
{ 
     args.test.result.description = "Zdumiewająca porażka";
     args.test.result.outcome = "failure";
       ChatMessage.create({content : "<em>PISK</em>", speaker : ChatMessage.getSpeaker({token: this.actor.getActiveTokens()[0]?.document, actor: this.actor})}, {chatBubble : true})
        AudioHelper.play({ src: `${game.settings.get("wfrp4e", "soundPath")}squeek.wav` }, true);
}