let currentCareer = this.actor.system.currentCareer;
if (!currentCareer)
{
    return;
}

let talents = ["Zmysł Magii",
"Magia Tajemna (Dowolna Tradycja)",
"Magia Chaosu (Tzeentch)",
"Ruchliwe dłonie",
"Precyzyjne Inkantowanie",
"Wykrywanie Magii",
"Magia Prosta",
"Percepcja Magiczna",
"Mag Bitewny",
"Czarownica!"].filter(t => !currentCareer.system.talents.includes(t))

currentCareer.system.talents = currentCareer.system.talents.concat(talents)
