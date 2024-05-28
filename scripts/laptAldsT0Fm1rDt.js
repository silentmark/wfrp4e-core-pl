let blunt = await Dialog.confirm({label : "test", content :`<p>Zastosuj zmniejszenie obrażeń obuchowych? (-3)</p>`})

if (blunt)
{
    args.modifiers.other.push({label : this.effect.name, details : "Zmniejszenie Obrażeń Obuchowych", value : -3})
}