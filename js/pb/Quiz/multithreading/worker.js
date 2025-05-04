const { workerData, parentPort } = require('worker_threads');

// Daten aus dem Hauptthread empfangen
const { start, ende, id } = workerData;

// Hilfsfunktion: Prüft ob eine Zahl eine Primzahl ist
function istPrimzahl(zahl) {
  if (zahl <= 1) return false;
  if (zahl <= 3) return true;
  if (zahl % 2 === 0 || zahl % 3 === 0) return false;
  
  for (let i = 5; i * i <= zahl; i += 6) {
    if (zahl % i === 0 || zahl % (i + 2) === 0) return false;
  }
  return true;
}

// Hauptfunktion: Zählt Primzahlen im gegebenen Bereich
function zählePrimzahlen(start, ende) {
  console.log(`Thread ${id} startet (${start}-${ende})`);
  
  let anzahl = 0;
  for (let zahl = start; zahl <= ende; zahl++) {
    if (istPrimzahl(zahl)) anzahl++;
  }
  
  return anzahl;
}

// Starte die Berechnung
const anzahlPrimzahlen = zählePrimzahlen(start, ende);

// Sende das Ergebnis zurück an den Hauptthread
parentPort.postMessage({
  id: id,
  bereich: { start, ende },
  anzahl: anzahlPrimzahlen
});

console.log(`Thread ${id} abgeschlossen`);