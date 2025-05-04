const { Worker } = require('worker_threads');
const path = require('path');

console.log('=== Einfache Multithreading-Demo ===');

// Eine einfache mathematische Aufgabe: Finde Primzahlen in einem Bereich
async function findePrimzahlen(start, ende, mitThreads = false) {
  if (mitThreads) {
    console.log(`\nStarte Multithreaded-Suche (${start} bis ${ende})...`);
    console.time('Multithreaded Zeit');
    
    // Wir teilen den Bereich in 4 gleiche Teile auf
    const bereichGröße = Math.ceil((ende - start) / 4);
    const aufgaben = [];
    
    for (let i = 0; i < 4; i++) {
      const bereichStart = start + i * bereichGröße;
      const bereichEnde = Math.min(bereichStart + bereichGröße - 1, ende);
      
      aufgaben.push(
        new Promise((resolve, reject) => {
          const worker = new Worker('./worker.js', {
            workerData: { start: bereichStart, ende: bereichEnde, id: i + 1 }
          });
          
          worker.on('message', ergebnis => resolve(ergebnis));
          worker.on('error', error => reject(error));
        })
      );
    }
    
    const ergebnisse = await Promise.all(aufgaben);
    
    let gesamtPrimzahlen = 0;
    ergebnisse.forEach(ergebnis => {
      console.log(`Thread ${ergebnis.id}: ${ergebnis.anzahl} Primzahlen gefunden`);
      gesamtPrimzahlen += ergebnis.anzahl;
    });
    
    console.log(`\nGesamtergebnis: ${gesamtPrimzahlen} Primzahlen gefunden`);
    console.timeEnd('Multithreaded Zeit');
    
  } else {
    // Ohne Multithreading - einfach in einer Schleife
    console.log(`\nStarte Single-Thread-Suche (${start} bis ${ende})...`);
    console.time('Single-Thread Zeit');
    
    let anzahl = 0;
    for (let zahl = start; zahl <= ende; zahl++) {
      if (istPrimzahl(zahl)) anzahl++;
    }
    
    console.log(`Gesamtergebnis: ${anzahl} Primzahlen gefunden`);
    console.timeEnd('Single-Thread Zeit');
  }
}

// Hilfsfunktion zur Primzahlprüfung
function istPrimzahl(zahl) {
  if (zahl <= 1) return false;
  if (zahl <= 3) return true;
  if (zahl % 2 === 0 || zahl % 3 === 0) return false;
  
  for (let i = 5; i * i <= zahl; i += 6) {
    if (zahl % i === 0 || zahl % (i + 2) === 0) return false;
  }
  return true;
}

// Führe beide Varianten nacheinander aus
async function vergleicheMethoden() {
  const start = 2;
  const ende = 500000; // Eine halbe Million Zahlen prüfen
  
  // Erst mit einem Thread
  await findePrimzahlen(start, ende, false);
  
  // Dann mit vier Threads
  await findePrimzahlen(start, ende, true);
  
  console.log('\nBeachte den Zeitunterschied zwischen den beiden Methoden!');
}

vergleicheMethoden();