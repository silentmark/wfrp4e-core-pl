debugger;
// Check if charging attack
if (args.opposeData.attackerTestResult.preData.extra.charging) {
    // First increase the damage actually dealt by the value of the armor that no longer applies
    args.totalWoundLoss += args.AP.value;
  
    // Then change the messaging to reflect that
    args.messageElements[1] = "0 PP";
  
    args.updateMsg = `<b>Zadano obrażenia</b> (Ignorując pancerz ze względu na Wściekłą Szarżę)<span class = 'hide-option'>:`;
  }