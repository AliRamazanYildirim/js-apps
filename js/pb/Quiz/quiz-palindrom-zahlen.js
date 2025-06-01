// Einfache Palindrom-Prüfung
function istPalindrom(zahl) {
  const str = String(zahl);
  return str === str.split('').reverse().join('');
}

// Alle Palindrome in einem Bereich finden
function palindromeImBereich(start, ende) {
  return Array.from({length: ende - start + 1}, (_, i) => start + i)
    .filter(istPalindrom);
}

// Größtes Palindrom aus 3-stelligen Faktoren finden
function groesstesPalindromProdukt() {
  let max = 0, faktoren = [0, 0];
  
  for (let i = 999; i >= 100; i--) {
    // Optimierung: Nur bis i herunterzählen (vermeidet Duplikate)
    for (let j = i; j >= 100; j--) {
      const produkt = i * j;
      // Optimierung: Vorzeitiger Abbruch, wenn Produkt kleiner als bisheriges Maximum
      if (produkt <= max) break; 
      if (istPalindrom(produkt)) {
        max = produkt;
        faktoren = [i, j];
        break; // Erste gefundene für aktuelle i ist bereits die größte
      }
    }
  }
  
  return { palindrom: max, faktoren };
}

// Beispielaufruf
console.log("Palindrome von 1-100:", palindromeImBereich(1, 100));

const ergebnis = groesstesPalindromProdukt();
console.log(`Größtes Palindrom: ${ergebnis.palindrom}`);
console.log(`Faktoren: ${ergebnis.faktoren[0]} × ${ergebnis.faktoren[1]}`);