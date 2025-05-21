// Basisklasse (Elternklasse)
class Fahrzeug {
  constructor(marke, modell) {
    this.marke = marke;
    this.modell = modell;
    this.geschwindigkeit = 0;
  }

  beschleunigen(wert) {
    this.geschwindigkeit += wert;
    console.log(`${this.marke} ${this.modell} beschleunigt auf ${this.geschwindigkeit} km/h`);
  }

  bremsen() {
    this.geschwindigkeit = 0;
    console.log(`${this.marke} ${this.modell} hält an`);
  }
}

// Abgeleitete Klasse (Kindklasse)
class Auto extends Fahrzeug {
  constructor(marke, modell, anzahlTüren) {
    // Ruft den Konstruktor der Elternklasse auf
    super(marke, modell);
    this.anzahlTüren = anzahlTüren;
  }

  // Zusätzliche Methode
  hupen() {
    console.log(`${this.marke} ${this.modell} hupt: Tuut tuut!`);
  }

  // Überschreiben einer Methode der Elternklasse
  beschleunigen(wert) {
    super.beschleunigen(wert); // Ruft die Methode der Elternklasse auf
    console.log("Das Auto beschleunigt schneller als andere Fahrzeuge!");
  }
}

// Anwendung
const meinAuto = new Auto("BMW", "X5", 5);
meinAuto.beschleunigen(60); // Ruft die überschriebene Methode auf
meinAuto.hupen();           // Ruft die spezifische Methode der Kindklasse auf
meinAuto.bremsen();         // Ruft die geerbte Methode auf