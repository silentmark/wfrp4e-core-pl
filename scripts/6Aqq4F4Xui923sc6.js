// Imbibing this substance grants the user the Painless Creature Trait.
const hasColdBlooded = this.actor.has("Zimnokrwisty")
if (hasColdBlooded === undefined) 
{
  let item = await fromUuid("Compendium.wfrp4e-core.items.mCh1KK9jomwFZcLB");
  this.actor.createEmbeddedDocuments("Item", [item], {fromEffect: this.effect.id});
  
  this.script.scriptMessage(`<p><strong>${this.actor.prototypeToken.name}</strong> otrzymuje Cechę Stworzeń "Zimnokrwisty" i może odwrócić dowolny nieudany test oparty na Sile Woli.</p>
  <p>Jeśli postać otrzyma Stan Zaskoczenie, ten stan nie znika za pierwszym razem, gdy pownien być usunięty (zwykle na koniec Rundy, gdy ofiara jest zaatakowana).</p>`, 
  {whisper: ChatMessage.getWhisperRecipients("GM"), blind: true })   
}