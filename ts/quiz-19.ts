const benutzer = [
  { id: 1, name: "Ali", alter: 30 },
  { id: 2, name: "Ayşe", alter: 25 },
  { id: 3, name: "Mehmet", alter: 35 },
  { id: 4, name: "Fatma", alter: 28 }
];

// Einen Benutzer mit der find-Methode finden
const gefundenerBenutzer = benutzer.find((benutzer) => benutzer.id === 3);

if (gefundenerBenutzer) {
  console.log(`Benutzer gefunden: ${gefundenerBenutzer.name}, Alter: ${gefundenerBenutzer.alter}`);
} else {
  console.log("Benutzer nicht gefunden.");
}

// Erklärung:
// In diesem Beispiel wird die Methode find() verwendet, um den Benutzer mit der ID 3 zu finden.
// Wenn der Benutzer gefunden wird, wird sein Name und Alter ausgegeben. Andernfalls wird eine Nachricht ausgegeben, dass der Benutzer nicht gefunden wurde.