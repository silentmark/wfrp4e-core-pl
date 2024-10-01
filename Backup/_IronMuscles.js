debugger;
let attackerTestType = args.attackerTest.result.characteristic;
let defenderTestType = args.defenderTest.result.characteristic;

let attackerTestCorrectType = attackerTestType === "s" || attackerTestType === "ws";
let defenderTestCorrectType = defenderTestType === "s" || defenderTestType === "ws";

// Some information for a chat message
let attackerName = args.attackerTest.actor.name;
let defenderName = args.defenderTest.actor.name;
let messageContent = `${attackerName}: Żelazne Ścięgna zmniejszyły PS ${defenderName} o -2!`;

if (attackerTestCorrectType && defenderTestCorrectType) {
    // args.opposedTest.opposeResult.differenceSL += 2;
    args.opposedTest.opposeResult.modifiers.defender.SL -= 2;
    args.opposedTest.opposeResult.modifiers.message.push(messageContent);
    this.script.scriptMessage(messageContent, this.script.getChatData());
}

