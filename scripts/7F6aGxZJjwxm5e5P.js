if (args.test.result.castOutcome == "failure")
{
    ValueDialog.create({text : "Wprowadź utracone punkty żywotności, aby zyskać liczbę PS", title : this.effect.name}, "0").then(async value => {
        value = Math.clamped(value, 0, 3)
        if (value == 0)
        {
            return;          
        }
        else if (Number.isNumeric(value))
        {
            this.script.notification(`Utrcone Punkty Żywotności: ${value}`)
            this.actor.modifyWounds(-1 * value)
            await this.item.system.toggleEquip();
            args.test.addSL(value);
            args.test.preData.other.push(`<strong>${this.effect.name}</strong>: +${value} PS`)
        }
    })
}