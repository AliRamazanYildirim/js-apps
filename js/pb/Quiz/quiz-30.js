// Benutzerprofil-Daten
const benutzerProfil = {
  name: null, // Der Benutzer hat keinen Namen angegeben
  alter: undefined, // Alter ist nicht verfügbar
  ort: "Berlin", // Standort ist angegeben
};

// Nullish Coalescing zur Festlegung von Standardwerten
const angezeigterName = benutzerProfil.name ?? "Anonymer Benutzer";
const angezeigtesAlter = benutzerProfil.alter ?? "Alter nicht angegeben";
const angezeigterOrt = benutzerProfil.ort ?? "Ort nicht angegeben";

console.log(`Name: ${angezeigterName}`); // Ausgabe: Name: Anonymer Benutzer
console.log(`Alter: ${angezeigtesAlter}`); // Ausgabe: Alter: Alter nicht angegeben
console.log(`Ort: ${angezeigterOrt}`); // Ausgabe: Ort: Berlin

// Beispiel für die Verwendung von Nullish Coalescing mit einer Funktion