let fatigued = this.actor.hasCondition("fatigued")
                            if (!fatigued)
                            {
                                this.actor.addCondition("fatigued")
                                ui.notifications.notify(this.actor.name + " otrzymuje Stan Zmęczenie, którego nie można usunąć dopóki sympton Osłabienie jest niewyleczony.")
                            }