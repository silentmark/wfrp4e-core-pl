//*** Wampiryczny
if (args.opposedTest.attackerTest.item?.name.includes("Ugryzienie"))
    {
        let woundsGained = args.totalWoundLoss;
        this.script.scriptMessage(`Otrzymano Rany: ${woundsGained}`, { whisper: ChatMessage.getWhisperRecipients("GM") })
        this.actor.modifyWounds(woundsGained)
    }