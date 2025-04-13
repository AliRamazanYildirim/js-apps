// Benutzer Interface hinzufügen
interface Benutzer {
  id: number;
  name: string;
  alter: number;
}

// Benutzerdaten definieren
const benutzerListe: Benutzer[] = [
  { id: 1, name: "Ali", alter: 30 },
  { id: 2, name: "Ayşe", alter: 25 },
  { id: 3, name: "Mehmet", alter: 35 },
  { id: 4, name: "Fatma", alter: 28 }
];

const filterBenutzer = (...filterFunktionen: ((benutzer: Benutzer) => boolean)[]): Benutzer[] =>
    benutzerListe.filter(benutzer => filterFunktionen.every(filterFn => filterFn(benutzer)));


// Filterfunktionen definieren
const alterUeber25 = (benutzer: Benutzer) => benutzer.alter > 25;
const nameEnthältA = (benutzer: Benutzer) => benutzer.name.includes('a');

// Filter anwenden mit Spread-Operator für variable Anzahl von Argumenten
const gefiltert = filterBenutzer(alterUeber25, nameEnthältA);
console.log("Gefilterte Benutzer:", gefiltert);

// Erklärung:
// 1. `benutzerListe` ist ein Array von Benutzerobjekten.
// 2. `filterBenutzer` ist eine Funktion, die eine variable Anzahl von Filterfunktionen akzeptiert.
// 3. Der Spread-Operator `...` wird verwendet, um die Filterfunktionen in ein Array zu packen.
// 4. `benutzerListe.filter` wird verwendet, um die Benutzer basierend auf den Filterfunktionen zu filtern.
// 5. `every` wird verwendet, um sicherzustellen, dass alle Filterfunktionen für jeden Benutzer wahr sind.
// 6. `alterUeber25` und `nameEnthältA` sind zwei Beispiel-Filterfunktionen.
// 7. `filterBenutzer` wird aufgerufen, um die Benutzer zu filtern, die älter als 25 Jahre sind und deren Name ein "a" enthält.
// 8. Das Ergebnis wird in der Konsole ausgegeben.
// 9. Der Spread-Operator ermöglicht eine flexible Handhabung von Funktionen mit variabler Anzahl von Argumenten.