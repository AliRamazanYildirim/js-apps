// Basisklasse Fahrzeug
class Fahrzeug {
  constructor(name) {
    this.name = name;
  }
  
  fahren() {
    return `${this.name} bewegt sich...`;
  }
}

// Unterklassen mit spezifischem Verhalten
class Auto extends Fahrzeug {
  fahren() {
    return `${this.name} fährt mit vier Rädern auf der Straße.`;
  }
}

class Motorrad extends Fahrzeug {
  fahren() {
    return `${this.name} braust mit zwei Rädern über den Asphalt.`;
  }
}

class Boot extends Fahrzeug {
  fahren() {
    return `${this.name} gleitet über das Wasser.`;
  }
}

// Polymorphe Funktion - arbeitet mit jedem Fahrzeug-Typ
function reiseMitFahrzeug(fahrzeug) {
  console.log(fahrzeug.fahren());
}

// Verschiedene Fahrzeuge erstellen
const meinAuto = new Auto("BMW");
const meinMotorrad = new Motorrad("Harley");
const meinBoot = new Boot("Segelboot");

// Die gleiche Funktion aufrufen, aber unterschiedliches Verhalten erhalten
reiseMitFahrzeug(meinAuto);     // Ausgabe: BMW fährt mit vier Rädern auf der Straße.
reiseMitFahrzeug(meinMotorrad); // Ausgabe: Harley braust mit zwei Rädern über den Asphalt.
reiseMitFahrzeug(meinBoot);     // Ausgabe: Segelboot gleitet über das Wasser.