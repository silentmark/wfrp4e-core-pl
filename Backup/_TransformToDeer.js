let tokenImg = "/custom-images/Tokens/Combat/Eagle.webp";
let transformToDeer = true;
let wounds = this.actor.status.wounds.value;
let maxWounds = this.actor.status.wounds.max;
let percent = (wounds / maxWounds).toFixed(2);
if (tokenImg) {
    let token = this.actor.getActiveTokens()[0];
    if (token.document.texture.src == tokenImg) {
        tokenImg = this.actor.prototypeToken.texture.src
        transformToDeer = false;
    }
    new Sequence()
    .effect()
        .file("modules/jb2a_patreon/Library/2nd_Level/Misty_Step/MistyStep_02_Regular_Blue_400x400.webm")
        .atLocation(token)
        .scaleToObject(2.5)
        .randomRotation()
    .wait(500)
    .thenDo(() => {
        token.document.update({ "texture.src": tokenImg });
    })
    .play()
}
if (transformToDeer ) {
    let ugryzienie = (await fromUuid("Compendium.wfrp4e-core.items.Item.pLW9SVX0TVTYPiPv")).toObject();
    let nightVision = (await fromUuid("Compendium.wfrp4e-core.items.Item.FmHDbCOy3pH8yKhm")).toObject();
    let bron = (await fromUuid("Compendium.wfrp4e-core.items.AtpAudHA4ybXVlWM")).toObject()
    let rozmiar = (await fromUuid("Compendium.wfrp4e-core.items.Item.8slW8CJ2oVTxeQ6q")).toObject();
    let latanie = (await fromUuid("Compendium.wfrp4e-core.items.Item.EO05HX7jql0g605A")).toObject();
    ugryzienie.system.specification.value = 5;
    bron.system.specification.value = 7;
    rozmiar.system.specification.value = "Mały";
    latanie.system.specification.value = "250";

    let items = [ugryzienie, bron, rozmiar, latanie, nightVision ];
    
    this.script.scriptNotification(`Dodano: ${items.map(i => i.name).join(", ")}`);
    await this.actor.createEmbeddedDocuments("Item", items, {fromEffect : this.effect.id});

    let char = {system: { 
        details: { move: {value: 8}},
        characteristics: {
            ag: {modifier: 20},
            i: {modifier: 40}
      }}}
      await this.actor.update(char);
} else {
    await this.effect.deleteCreatedItems();
    let char = {system: { 
        details: { move: {value: 4}},
        characteristics: {
            ag: {modifier: 0},
            i: {modifier: 0}
      }}}
      await this.actor.update(char);
}
let a = this.actor;
setTimeout(function() {
    a.setWounds((a.status.wounds.max * percent).toFixed(0));
}, (1000)); 

