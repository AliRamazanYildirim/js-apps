interface Benutzer {
  id: number;
  name: string;
  alter: number;
}

// Bestehende Benutzer
const bestandsBenutzer: Benutzer[] = [
  { id: 1, name: "Ali", alter: 30 },
  { id: 2, name: "Ayşe", alter: 25 }
];

// Neue Benutzer
const neueBenutzer: Benutzer[] = [
  { id: 3, name: "Mehmet", alter: 35 },
  { id: 4, name: "Fatma", alter: 28 }
];

// Alle Benutzer zusammenführen mit dem Spread-Operator
const alleBenutzer: Benutzer[] = [...bestandsBenutzer, ...neueBenutzer];

console.log("Alle Benutzer:", alleBenutzer);

// Erklärung:
// 1. `bestandsBenutzer` und `neueBenutzer` sind zwei Arrays von Benutzern.
// 2. Der Spread-Operator `...` wird verwendet, um die Elemente der beiden Arrays in ein neues Array `alleBenutzer` zu kopieren.
// 3. `console.log` gibt das neue Array mit allen Benutzern aus.
// 4. Der Spread-Operator ermöglicht eine einfache und lesbare Möglichkeit, Arrays zu kombinieren.
// 5. Das Ergebnis ist ein neues Array, das alle Benutzer aus beiden Arrays enthält.
// 6. Dies ist besonders nützlich, wenn Sie mehrere Arrays zusammenführen möchten, ohne eine Schleife verwenden zu müssen.
// 7. Der Spread-Operator ist eine moderne JavaScript-Funktion, die in ES6 eingeführt wurde und in TypeScript unterstützt wird.
// 8. Es ist eine elegante Lösung, um Arrays zu kombinieren und den Code sauberer und verständlicher zu gestalten.
// 9. Der Spread-Operator kann auch verwendet werden, um Objekte zu kombinieren oder zu kopieren.
// 10. In diesem Beispiel wird er jedoch speziell für Arrays verwendet, um die Benutzerinformationen zu konsolidieren.
