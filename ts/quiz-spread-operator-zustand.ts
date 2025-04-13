// Benutzer Interface definieren
interface Benutzer {
  id: number;
  name: string;
  alter: number;
}

// Benutzerdaten definieren
const benutzerListeZustand: Benutzer[] = [
  { id: 1, name: "Ali", alter: 30 },
  { id: 2, name: "Ayşe", alter: 25 },
  { id: 3, name: "Mehmet", alter: 35 },
  { id: 4, name: "Fatma", alter: 28 }
];

// AppState Interface definieren - mit korrigiertem ladeStatus Typ
interface AppState {
  benutzer: Benutzer[];
  aktiverBenutzerId: number | null;
  ladeStatus: 'bereit' | 'laden' | 'fehler'; // Korrigiert zu Union-Typ statt String
}

// Initialen Zustand definieren - korrigierte Syntax
const initialerZustand: AppState = {
  benutzer: benutzerListeZustand, // Korrekte Variable verwenden
  aktiverBenutzerId: null,
  ladeStatus: 'bereit' // Konkreter Wert, nicht Typ-Definition
};

// Funktion zum Aktualisieren des Zustands
const zustandAktualisieren = (alterZustand: AppState, aktualisierungen: Partial<AppState>): AppState => ({
    ...alterZustand,
    ...aktualisierungen
});

// Zustand aktualisieren, wenn ein Benutzer ausgewählt wird
const neuerZustand = zustandAktualisieren(initialerZustand, { 
  aktiverBenutzerId: 2, 
  ladeStatus: 'laden' 
});

console.log("Neuer App-Zustand:", neuerZustand);

// Beispiel für Hinzufügen eines neuen Benutzers mit Spread-Operator
function benutzerHinzufuegen(zustand: AppState, neuerBenutzer: Benutzer): AppState {
  return {
    ...zustand,
    benutzer: [...zustand.benutzer, neuerBenutzer]
  };
}

// Beispiel für das Aktualisieren eines bestehenden Benutzers
function benutzerAktualisieren(zustand: AppState, benutzerId: number, aktualisierung: Partial<Benutzer>): AppState {
  return {
    ...zustand,
    benutzer: zustand.benutzer.map(benutzer => 
      benutzer.id === benutzerId ? { ...benutzer, ...aktualisierung } : benutzer
    )
  };
}

// Beispiele anwenden
const neuerBenutzer: Benutzer = { id: 5, name: "Zeynep", alter: 32 };
const zustandMitNeuemBenutzer = benutzerHinzufuegen(neuerZustand, neuerBenutzer);

console.log("Zustand nach Hinzufügen eines Benutzers:", zustandMitNeuemBenutzer);

const aktualisierterZustand = benutzerAktualisieren(zustandMitNeuemBenutzer, 2, { alter: 26 });
console.log("Zustand nach Aktualisierung eines Benutzers:", aktualisierterZustand);