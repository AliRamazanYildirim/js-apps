// Typ für Benutzereinstellungen
type BenutzerEinstellungen = {
  thema?: string; // Thema (z. B. "dunkel" oder "hell")
  benachrichtigungen?: boolean; // Sind Benachrichtigungen aktiviert?
  sprache?: string; // Spracheinstellung
};

// Vom Server geladene Benutzereinstellungen
const benutzerEinstellungen: BenutzerEinstellungen = {
  thema: undefined, // Benutzer hat kein Thema ausgewählt
  benachrichtigungen: undefined, // Benachrichtigungseinstellung fehlt
  sprache: "de", // Benutzer hat die Sprache auf Deutsch gesetzt
};

// Standardwerte für die Einstellungen
const standardEinstellungen = {
  thema: "hell",
  benachrichtigungen: true,
  sprache: "en",
};

// Nullish Coalescing zur Vervollständigung der Einstellungen
const angewandtesThema = benutzerEinstellungen.thema ?? standardEinstellungen.thema;
const angewandteBenachrichtigungen =
  benutzerEinstellungen.benachrichtigungen ?? standardEinstellungen.benachrichtigungen;
const angewandteSprache = benutzerEinstellungen.sprache ?? standardEinstellungen.sprache;

console.log(`Thema: ${angewandtesThema}`); // Ausgabe: Thema: hell
console.log(`Benachrichtigungen: ${angewandteBenachrichtigungen}`); // Ausgabe: Benachrichtigungen: true
console.log(`Sprache: ${angewandteSprache}`); // Ausgabe: Sprache: de