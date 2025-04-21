console.log("=== Restaurant Bestellsystem ===");

// Hauptfunktion, um eine Bestellung aufzugeben
const bestellungAufgeben = (gericht, callback) => {
    console.log(`Bestellung für ${gericht} wurde aufgenommen.`);
    
    // Simuliere die Zubereitungszeit mit setTimeout
    console.log("Die Küche bereitet das Essen zu...");
    
    setTimeout(() => {
        console.log(`${gericht} ist fertig!`);
        // Hier rufen wir den Callback auf
        callback(gericht);
    }, 3000); // 3 Sekunden Zubereitungszeit
};

// Callback-Funktion, die ausgeführt wird, wenn das Essen fertig ist
const essenServieren = (gericht) => {
    console.log(`${gericht} wird jetzt serviert. Guten Appetit!`);
};

// Zusätzlicher Callback für Lieferung
const essenLiefern = (gericht) => {
    console.log(`${gericht} wird zu Ihnen nach Hause geliefert.`);
};

// Bestellungen aufgeben
console.log("Kunde 1 bestellt im Restaurant:");
bestellungAufgeben("Pizza", essenServieren);

console.log("\nKunde 2 bestellt zur Lieferung:");
bestellungAufgeben("Pasta", essenLiefern);

// Beispiel mit anonymer Callback-Funktion
console.log("\nKunde 3 hat Spezialanforderungen:");
bestellungAufgeben("Salat", (gericht) => {
    console.log(`${gericht} mit extra Dressing wird jetzt serviert.`);
    console.log("Kellner: Benötigen Sie sonst noch etwas?");
});

// Erklärung:
// 1. Die Funktion `bestellungAufgeben` nimmt ein Gericht und einen Callback entgegen.
// 2. Sie simuliert die Zubereitungszeit mit `setTimeout`.
// 3. Nach der Zubereitungszeit wird der Callback aufgerufen, um das Gericht zu servieren oder zu liefern.
// 4. Es gibt auch eine anonyme Callback-Funktion, die zusätzliche Anforderungen behandelt.