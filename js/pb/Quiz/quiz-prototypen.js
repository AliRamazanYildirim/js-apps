// Haupt-Produkt Konstruktor
function Produkt(id, name, preis) {
  this.id = id;
  this.name = name;
  this.preis = preis;
  this.lagerbestand = true;
}

// Gemeinsame Methoden für alle Produkte
Produkt.prototype.preisAnzeigen = function() {
  return `${this.preis} €`;
};

Produkt.prototype.lagerbestandPrüfen = function() {
  return this.lagerbestand ? "Auf Lager" : "Nicht auf Lager";
};

Produkt.prototype.informationenAnzeigen = function() {
  return `${this.name} - ${this.preisAnzeigen()}`;
};

// Elektronikprodukt als Untertyp
function ElektronikProdukt(id, name, preis, garantiezeit) {
  // Elternklassen-Konstruktor aufrufen
  Produkt.call(this, id, name, preis);
  this.garantiezeit = garantiezeit; // In Monaten
}

// ElektronikProdukt erbt von Produkt
ElektronikProdukt.prototype = Object.create(Produkt.prototype);
ElektronikProdukt.prototype.constructor = ElektronikProdukt;

// Spezielle Methoden für ElektronikProdukt
ElektronikProdukt.prototype.garantieInfo = function() {
  return `${this.garantiezeit} Monate Garantie`;
};

// Überschreiben der Methode zur Informationsanzeige
ElektronikProdukt.prototype.informationenAnzeigen = function() {
  return `${Produkt.prototype.informationenAnzeigen.call(this)} - ${this.garantieInfo()}`;
};

// Buchprodukt als Untertyp
function BuchProdukt(id, name, preis, autor, seitenanzahl) {
  Produkt.call(this, id, name, preis);
  this.autor = autor;
  this.seitenanzahl = seitenanzahl;
}

// BuchProdukt erbt von Produkt
BuchProdukt.prototype = Object.create(Produkt.prototype);
BuchProdukt.prototype.constructor = BuchProdukt;

// Spezielle Methoden für BuchProdukt
BuchProdukt.prototype.autorInfo = function() {
  return `Autor: ${this.autor}`;
};

BuchProdukt.prototype.informationenAnzeigen = function() {
  return `${Produkt.prototype.informationenAnzeigen.call(this)} - ${this.autorInfo()} - ${this.seitenanzahl} Seiten`;
};

// Beispiele zur Verwendung:
const handy = new ElektronikProdukt(1, "iPhone 15", 1299, 24);
const buch = new BuchProdukt(2, "1984", 12.99, "George Orwell", 352);

console.log(handy.informationenAnzeigen()); // "iPhone 15 - 1299 € - 24 Monate Garantie"
console.log(buch.informationenAnzeigen());   // "1984 - 12.99 € - Autor: George Orwell - 352 Seiten"
console.log(handy.lagerbestandPrüfen());     // "Auf Lager" (Von Produkt geerbte Methode)

// Dynamisches Hinzufügen einer Rabattfunktion
Produkt.prototype.rabattAnwenden = function(prozent) {
  const rabattMenge = this.preis * (prozent / 100);
  this.preis -= rabattMenge;
  return `Auf ${this.name} wurde ein Rabatt von ${prozent}% angewendet. Neuer Preis: ${this.preis} €`;
};

console.log(handy.rabattAnwenden(10)); // "Auf iPhone 15 wurde ein Rabatt von 10% angewendet. Neuer Preis: 1169.1 €"

/* Bedeutung des Prototype-Systems
Speichereffizienz: Methoden wie preisAnzeigen und lagerbestandPrüfen werden nur einmal im Prototype definiert und von allen Objekten gemeinsam genutzt.

Hierarchische Vererbung: ElektronikProdukt und BuchProdukt erben alle Eigenschaften und Methoden von Produkt, können aber zusätzlich eigene Funktionalitäten implementieren.

Polymorphismus: Jeder Produkttyp kann die informationenAnzeigen()-Methode nach eigenen Bedürfnissen überschreiben.

Dynamische Erweiterbarkeit: Selbst während der Laufzeit können neue Methoden zur Prototype-Kette hinzugefügt werden, wie am Beispiel der rabattAnwenden-Methode gezeigt.

 */