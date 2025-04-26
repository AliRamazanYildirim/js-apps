// 1. Objekte erstellen
const auto1 = {
  marke: "BMW",
  farbe: "blau"
};

const auto2 = {
  marke: "Audi", 
  farbe: "rot"
};

// 2. Eine Funktion definieren
function zeigeDetails() {
  console.log(`Ich bin ein ${this.farbe}e ${this.marke}`);
}

// Eine Funktion mit Parametern
function fahren(geschwindigkeit = 0, strecke = 0){
  console.log(`Der ${this.farbe}e ${this.marke} fährt mit ${geschwindigkeit} km/h für ${strecke} km`);
}

// Normale Funktionsaufruf (funktioniert nicht richtig - this ist nicht definiert)
console.log("Normaler Funktionsaufruf:");
// zeigeDetails(); // Würde Fehler geben oder "undefined undefined" anzeigen

// 3. call - Ruft die Funktion sofort auf mit bestimmtem this-Wert
console.log("Mit call:");
zeigeDetails.call(auto1); // "Ich bin ein blauer BMW"
zeigeDetails.call(auto2); // "Ich bin ein roter Audi"

// Mit Parametern
console.log("call mit Parametern:");
fahren.call(auto1, 120, 50); // "Der blaue BMW fährt mit 120 km/h für 50 km"
fahren.call(auto2, 130, 70); // "Der rote Audi fährt mit 130 km/h für 70 km"

// 4. apply - Wie call, aber Argumente als Array
console.log("Mit apply:");
fahren.apply(auto1, [150, 100]); // "Der blaue BMW fährt mit 150 km/h für 100 km"
fahren.apply(auto2, [140, 80]);  // "Der rote Audi fährt mit 140 km/h für 80 km"

// 5. bind - Erstellt eine NEUE Funktion mit festgelegtem this
console.log("Mit bind:");
const bmwZeigen = zeigeDetails.bind(auto1);
const audiZeigen = zeigeDetails.bind(auto2);

bmwZeigen(); // "Ich bin ein blauer BMW"
audiZeigen(); // "Ich bin ein roter Audi"

// bind mit teilweise festgelegten Parametern
console.log("bind mit teilweise festgelegten Parametern:");
const bmwFaehrtSchnell = fahren.bind(auto1, 200); // Geschwindigkeit ist festgelegt
bmwFaehrtSchnell(30); // "Der blaue BMW fährt mit 200 km/h für 30 km"

// 6. Praktisches Beispiel: Timer mit bind
console.log("Praktisches Beispiel mit setTimeout:");
function starteNachDelay() {
  console.log(`Der ${this.farbe}e ${this.marke} startet jetzt!`);
}

console.log("Warte eine Sekunde...");
setTimeout(starteNachDelay.bind(auto2), 1000);

// 7. Zusammenfassung
// - call: Sofortiger Aufruf mit festgelegtem this
// - apply: Sofortiger Aufruf mit festgelegtem this und Argumenten als Array
// - bind: Erstellt eine neue Funktion mit festgelegtem this, die später aufgerufen werden kann
// - bind kann auch mit teilweise festgelegten Parametern verwendet werden
// - bind ist nützlich für asynchrone Funktionen, z.B. setTimeout
// - call und apply sind nützlich, wenn du eine Funktion sofort mit einem bestimmten this-Wert aufrufen möchtest    