// Bankkonten-Verwaltung mit Closures
function erstelleBankKonto(anfangsKontostand) {
    // Private Variable, nur innerhalb dieser Funktion direkt zugreifbar
    let kontostand = anfangsKontostand || 0;
    
    // Rückgabe eines Objekts mit Methoden (Closures)
    return {
        einzahlen: function(betrag) {
            if (betrag > 0) {
                kontostand += betrag;
                console.log(`${betrag}€ eingezahlt. Neuer Kontostand: ${kontostand}€`);
                return true;
            } else {
                console.log('Fehler: Einzahlungsbetrag muss positiv sein.');
                return false;
            }
        },
        
        abheben: function(betrag) {
            if (betrag > 0) {
                if (betrag <= kontostand) {
                    kontostand -= betrag;
                    console.log(`${betrag}€ abgehoben. Neuer Kontostand: ${kontostand}€`);
                    return true;
                } else {
                    console.log(`Fehler: Nicht genügend Guthaben. Aktueller Kontostand: ${kontostand}€`);
                    return false;
                }
            } else {
                console.log('Fehler: Abhebungsbetrag muss positiv sein.');
                return false;
            }
        },
        
        kontostandAbfragen: function() {
            console.log(`Aktueller Kontostand: ${kontostand}€`);
            return kontostand;
        }
    };
}

// Verwendung des Bankkontos in der Konsole
console.log('=== Bankkonto-Demo mit Closures ===');

const meinkonto = erstelleBankKonto(1000);
meinkonto.kontostandAbfragen(); // 1000€
meinkonto.einzahlen(500);       // 1500€
meinkonto.abheben(200);         // 1300€
meinkonto.abheben(2000);        // Fehler: Nicht genügend Guthaben

// Versuche, direkt auf den Kontostand zuzugreifen (nicht möglich)
console.log('Direkter Zugriff auf Kontostand:', meinkonto.kontostand); // undefined

// Zweites Konto erstellen (unabhängiger Kontostand dank Closure)
const zweitesKonto = erstelleBankKonto(500);
zweitesKonto.kontostandAbfragen(); // 500€ (unabhängig vom ersten Konto)

//Erklärung:
// In diesem Beispiel wird ein Bankkonto mit Closures erstellt. Die Funktion `erstelleBankKonto` gibt ein Objekt zurück,
// das Methoden enthält, um Geld einzuzahlen, abzuheben und den Kontostand abzufragen.
// Die Variable `kontostand` ist privat und kann nur über die Methoden des zurückgegebenen Objekts verändert werden.
// Dies ermöglicht eine Kapselung der Daten und schützt sie vor direktem Zugriff von außen.
// Die Verwendung der Methoden zeigt, dass der Kontostand korrekt aktualisiert wird,
// während der direkte Zugriff auf die Variable `kontostand` nicht möglich ist.
// Dies ist ein Beispiel für die Verwendung von Closures in JavaScript, um Daten zu kapseln und zu schützen.
// Die Methode `erstelleBankKonto` kann beliebig oft aufgerufen werden, um unabhängige Konten zu erstellen,
// die jeweils ihren eigenen Kontostand haben. Dies zeigt die Flexibilität und Mächtigkeit von Closures in JavaScript.
// Die Verwendung von Closures ermöglicht es, private Variablen zu erstellen,
// die nur über definierte Methoden zugänglich sind, was zu einer besseren Kapselung und Datenintegrität führt.
// Dies ist besonders nützlich in größeren Anwendungen, wo Datenkollisionen und ungewollte Änderungen an Variablen vermieden werden sollen.
// Die Verwendung von Closures ist ein wichtiges Konzept in JavaScript,
// das es Entwicklern ermöglicht, sauberen und wartbaren Code zu schreiben.
// Es ist eine der vielen Möglichkeiten, wie JavaScript die objektorientierte Programmierung unterstützt,
// indem es Funktionen als Objekte behandelt und ihnen die Fähigkeit verleiht, ihren eigenen Zustand zu speichern.
// Dies ist besonders nützlich in modernen Webanwendungen, wo Daten und Logik oft eng miteinander verbunden sind.
// Die Verwendung von Closures ist ein bewährtes Muster in JavaScript,
// das in vielen Bibliotheken und Frameworks verwendet wird, um eine klare Trennung von Anliegen zu ermöglichen.
// Es ist wichtig, die Konzepte von Closures und Kapselung zu verstehen,
// um effektiven und wartbaren Code zu schreiben.