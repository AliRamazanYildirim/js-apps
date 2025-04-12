// Basierend auf Ihrem vorhandenen Benutzer-Array
interface Benutzer {
  id: number;
  name: string;
  alter: number;
}

const benutzer: Benutzer[] = [
  { id: 1, name: "Ali", alter: 30 },
  { id: 2, name: "Ayşe", alter: 25 },
  { id: 3, name: "Mehmet", alter: 35 },
  { id: 4, name: "Fatma", alter: 28 }
];

// Namen der Benutzer extrahieren und mit join verbinden
const benutzerNamen: string[] = benutzer.map(user => user.name);
const alleNamen: string = benutzerNamen.join(", ");

console.log(`Alle Benutzer: ${alleNamen}`);
// Output: "Alle Benutzer: Ali, Ayşe, Mehmet, Fatma"

// Oder in einer Zeile
const alleBenutzerNamen: string = benutzer.map(user => user.alter).join(" | ");
console.log(`Alle Benutzer: ${alleBenutzerNamen}`);
// Output: "Ali | Ayşe | Mehmet | Fatma"

//Erklärung:
// 1. `benutzer.map(user => user.name)` erstellt ein neues Array mit den Namen der Benutzer.
// 2. `.join(", ")` verbindet die Namen zu einem einzigen String, wobei ", " als Trennzeichen verwendet wird.
// 3. `console.log` gibt den resultierenden String aus.
// 4. In der zweiten Variante wird das Trennzeichen in der join-Methode geändert, um die Alter mit " | " zu trennen.