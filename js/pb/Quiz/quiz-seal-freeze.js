// 1. Ursprüngliches Auto-Objekt
const auto = {
    marke: "BMW",
    farbe: "blau"
  };
  
  // 2. Objekt versiegeln oder einfrieren
  const modus = prompt("Wähle den Modus: 'seal' oder 'freeze'").toLowerCase();
  
  if (modus === "seal") {
    Object.seal(auto);
    console.log("Das Auto wurde versiegelt.");
  } else if (modus === "freeze") {
    Object.freeze(auto);
    console.log("Das Auto wurde eingefroren.");
  } else {
    console.log("Ungültiger Modus. Es geht ohne Schutz weiter.");
  }
  
  // 3. Benutzer möchte Farbe ändern
  const neueFarbe = prompt("Gib eine neue Farbe für das Auto ein:");
  
  try {
    auto.farbe = neueFarbe;
    console.log("Farbe wurde zu", neueFarbe, "geändert.");
  } catch (error) {
    console.log("Fehler beim Ändern der Farbe:", error.message);
  }
  
  // 4. Ergebnis anzeigen
  console.log("Aktueller Zustand des Autos:", auto);
  
  // 5. Status überprüfen
  console.log("Ist versiegelt?", Object.isSealed(auto));
  console.log("Ist eingefroren?", Object.isFrozen(auto));
  
  // 6. Versuch, neue Eigenschaft hinzuzufügen
  try {
    auto.modell = "X5";
    console.log("Modell wurde hinzugefügt.");
  } catch (error) {
    console.log("Fehler beim Hinzufügen des Modells:", error.message);
  }
  console.log("Auto nach Modell-Hinzufügungsversuch:", auto);
  
  // 7. Versuch, eine Eigenschaft zu löschen
  try {
    delete auto.marke;
    console.log("Marke wurde gelöscht.");
  } catch (error) {
    console.log("Fehler beim Löschen der Marke:", error.message);
  }
  console.log("Auto nach Löschversuch:", auto);