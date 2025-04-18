const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("=== Event Loop Demonstration ===");
console.log("Programm startet...");

// Synchrone Berechnung
console.log("Synchrone Operation läuft...");
const ergebnis = Array.from({ length: 100000 }, (_, i) => i).reduce((sum, num) => sum + num, 0);
console.log(`Synchrone Berechnung fertig: ${ergebnis}`);

// Timer-Callbacks
setTimeout(() => {
    console.log("Timer-Callback wird ausgeführt (nach 2 Sekunden)");

    setTimeout(() => {
        console.log("Geschachtelter Timer ausgeführt");
    }, 1000);
}, 2000);

setTimeout(() => {
    console.log("Sofortiger Timer (0ms) wird ausgeführt");
}, 0);

// I/O-Operation
rl.question('Gib deinen Namen ein: ', (name) => {
    console.log(`Hallo ${name}! (I/O-Callback wird ausgeführt)`);

    setTimeout(() => {
        console.log("Programm wird beendet...");
        rl.close();
    }, 3000);
});

console.log("Hauptprogramm-Ausführung abgeschlossen. Warte auf Event Loop...");
