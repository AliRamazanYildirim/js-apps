// Prüft, ob eine Zahl eine Armstrong-Zahl ist
function istArmstrongZahl(zahl) {
  // Zahl in String umwandeln, um die Ziffern zu erhalten
  const zahlenString = String(zahl);
  
  // Anzahl der Ziffern ermitteln
  const anzahlZiffern = zahlenString.length;
  
  // Summe der potenzierten Ziffern berechnen
  let summe = 0;
  for (let i = 0; i < anzahlZiffern; i++) {
    // Ziffer aus dem String extrahieren und in Zahl umwandeln
    const ziffer = Number(zahlenString[i]);
    // Potenzieren und zur Summe addieren
    summe += Math.pow(ziffer, anzahlZiffern);
  }
  
  // Prüfen, ob die Summe gleich der ursprünglichen Zahl ist
  return summe === zahl;
}

// Findet alle Armstrong-Zahlen bis zur angegebenen Grenze
function findeAlleArmstrongZahlen(bisZahl) {
  const ergebnis = [];
  
  for (let i = 1; i <= bisZahl; i++) {
    if (istArmstrongZahl(i)) {
      ergebnis.push(i);
    }
  }
  
  return ergebnis;
}

// Anwendung: Alle Armstrong-Zahlen bis 1000 finden
const armstrongZahlen = findeAlleArmstrongZahlen(1000);
console.log("Armstrong-Zahlen bis 1000:", armstrongZahlen);