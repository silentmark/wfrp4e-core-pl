
let choice = await Dialog.wait({
    title: this.effect.name,
    content: `<p><strong>${this.effect.name}</strong>: Czy ten Magiczny lub Zasięgowy atak pochodził spoza Kopuły?</p>`,
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
	args.ward = 6;
}