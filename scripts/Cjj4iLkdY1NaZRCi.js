if ((args.opposedTest.attackerTest.item && args.opposedTest.attackerTest.item.isMelee) || (args.opposedTest.attackerTest.item && !args.opposedTest.attackerTest.item.name.includes("Broń Zasięgowa")))
{
    let choice = await Dialog.wait({
        title: this.effect.name,
        content: `<p><strong>${this.effect.name}</strong>: Zadać obrażenia atakującemu?`,
        buttons: {
            yes: {
                label: "Tak",
                callback: () => {
                    return true;
                }
            },
            no: {
                label: "Nie",
                callback: () => {
                    return false;
                }
            }
        }
    })

    if (choice)
    {
        this.script.scriptMessage(await args.attacker.applyBasicDamage(this.actor.system.characteristics.wp.bonus, {damageType : game.wfrp4e.config.DAMAGE_TYPE.IGNORE_AP, suppressMsg : true}));
    }
}