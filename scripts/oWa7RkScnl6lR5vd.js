if (args.test.characteristicKey == "wp") 
{
    if (args.test.failed)
    {
        let item = await fromUuid("Compendium.wfrp4e-core.items.AGcJl5rHjkyIQBPP")
        let data = item.toObject();
        this.actor.createEmbeddedDocuments("Item", [data])
        
        this.script.message(`Test Siły Woli nie powiódł się, <b>${this.actor.prototypeToken.name}</b>: otrzymano @UUID[Compendium.wfrp4e-core.items.AGcJl5rHjkyIQBPP] na [[1d10]] godzin`)
    }
}