if (args.opposedTest?.attackerTest?.item?.system?.isRanged) 
{
    let choice = await Dialog.wait({
        title: this.effect.name,
        content: `<p>Zniwelować Obrażenia dzięki: <strong>${this.effect.name}</strong>?`,
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
        args.abort = `<strong>${this.effect.name}</strong>: Obrażenia Zniwelowane`
    }
}