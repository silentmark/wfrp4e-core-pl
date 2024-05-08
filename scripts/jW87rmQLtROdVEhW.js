  if (["orc", "ork", "goblin", "hobgoblin", "snotling", "greenskin", "zielonoskóry"].includes(args.opposedTest.defender.details.species.value.toLowerCase()))
    {
      args.addImpact = true
      args.opposedTest.result.other.push("<b>Runa Zabójcy Goblinów</b>: Dodano Zaletę Druzgocąca")
    }