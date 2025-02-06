if (args.opposedTest.result.winner == "attacker") {
  if (args.opposedTest.defenderTest.weapon && args.opposedTest.defenderTest.item.properties.qualities.shield) {
    ui.notifications.notify(`<b>${this.effect.name}</b>: Otrzymano Punkty Przewag: ${this.item.Advances}`)
    this.actor.setAdvantage(this.item.Advances)
  }
}