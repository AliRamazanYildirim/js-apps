// Bestehendes Benutzerprofil
const benutzerProfil: Benutzer = { id: 1, name: "Ali", alter: 30 };

// Funktion zum Aktualisieren von Benutzerprofilen
function profilAktualisieren(benutzer: Benutzer, aktualisierungen: Partial<Benutzer>): Benutzer {
  // Spread-Operator erstellt eine Kopie und überschreibt nur die angegebenen Werte
  return { ...benutzer, ...aktualisierungen };
}

// Aktualisiere das Alter des Benutzers
const aktualisierterBenutzer = profilAktualisieren(benutzerProfil, { alter: 31 });
console.log("Aktualisiertes Profil:", aktualisierterBenutzer);
// Output: { id: 1, name: "Ali", alter: 31 }

// Erklärung:
// 1. `benutzerProfil` ist ein bestehendes Benutzerprofil.
// 2. Die Funktion `profilAktualisieren` nimmt ein Benutzerobjekt und ein Objekt mit Aktualisierungen entgegen.
// 3. Der Spread-Operator `...` wird verwendet, um eine Kopie des ursprünglichen Benutzerobjekts zu erstellen.