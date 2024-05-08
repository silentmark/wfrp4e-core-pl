if (!this.actor.has("Widzenie w Ciemności"))
{
    let item = await fromUuid("Compendium.wfrp4e-core.items.FmHDbCOy3pH8yKhm");
    let data = item.toObject();
    this.actor.createEmbeddedDocuments("Item", [data], {fromEffect : this.effect.id})
}