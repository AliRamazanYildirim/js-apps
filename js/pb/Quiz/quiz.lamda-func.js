const users = [
  { id: 1, name: "Ahmet", verified: true },
  { id: 2, name: "Mehmet", verified: false },
  { id: 3, name: "Ayşe", verified: true },
  { id: 4, name: "Fatma", verified: false }
];

// Pfeilfunktion (Lambda), um nur die Namen der verifizierten Benutzer zu erhalten
const verifizierteNamen = users
  .filter(user => user.verified)
  .map(user => user.name);

console.log("Verifizierte Benutzer:", verifizierteNamen);
