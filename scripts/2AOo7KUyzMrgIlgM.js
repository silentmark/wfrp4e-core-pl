let corruption = this.item.system.specification.value;
switch (corruption) {
    case "Pomniejsze":
        corruption = "minor";
        break;
    case "Umiarkowane":
        corruption = "moderate";
        break;
    case "Potężne":
        corruption = "major";
        break;
    default:
        break;
}
game.wfrp4e.utility.postCorruptionTest(corruption, {speaker : {alias: this.actor.prototypeToken.name}})
