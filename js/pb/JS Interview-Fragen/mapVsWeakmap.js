// 🔹 Beispiel: Map
const map = new Map();

map.set('name', 'Max'); // String als Schlüssel
const person = { id: 1 };
map.set(person, 'Admin'); // Objekt als Schlüssel

console.log('Inhalt der Map:');
map.forEach((wert, schlüssel) => {
  console.log('Schlüssel:', schlüssel, '| Wert:', wert);
});

// 🔹 Beispiel: WeakMap
const weakMap = new WeakMap();

const user = { name: 'Lisa' };
weakMap.set(user, 'Token-123');

// Ungültig: primitive Schlüssel funktionieren nicht in WeakMap
try {
  weakMap.set('id', 5); // Fehler!
} catch (fehler) {
  console.warn('WeakMap-Fehler:', fehler.message);
}

// 🔍 Speicherverwaltung (Garbage Collection)
// Wenn "user" gelöscht wird (z. B. user = null), wird auch der Eintrag in WeakMap automatisch entfernt.
// Dies ist gut für temporäre Daten wie Sitzungsinformationen.

console.log('\n Unterschiede zwischen Map und WeakMap:');
console.table([
  {
    Eigenschaft: 'Schlüssel-Typen',
    Map: 'beliebig (String, Objekt, etc.)',
    WeakMap: 'nur Objekte',
  },
  {
    Eigenschaft: 'iterierbar',
    Map: 'ja',
    WeakMap: 'nein',
  },
  {
    Eigenschaft: 'automatische Speicherfreigabe',
    Map: 'nein',
    WeakMap: 'ja (bei null)',
  },
]);

console.log('✅ Vergleich abgeschlossen');
