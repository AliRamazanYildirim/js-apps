/**
 * Eine Super-Zahl ist eine Zahl, bei der die Summe ihrer Teiler (außer sich selbst) gleich der Zahl ist.
 * Beispiel: 6 ist eine Super-Zahl, weil 1+2+3=6
 */

// Prüft ob eine Zahl eine Super-Zahl ist
function istSuperZahl(zahl) {
  let summe = 0;
  
  // Alle möglichen Teiler prüfen
  for (let i = 1; i < zahl; i++) {
    if (zahl % i === 0) {
      summe += i;
    }
  }
  
  // Wenn Summe der Teiler gleich der Zahl ist, ist es eine Super-Zahl
  return summe === zahl;
}

// Sucht Super-Zahlen bis zur angegebenen Grenze
function findeSuperZahlen(bisZahl) {
  const superZahlen = [];
  
  for (let i = 1; i <= bisZahl; i++) {
    if (istSuperZahl(i)) {
      superZahlen.push(i);
    }
  }
  
  return superZahlen;
}

// Suche nach Super-Zahlen bis 10000
const ergebnis = findeSuperZahlen(10000);
console.log("Super-Zahlen:", ergebnis);