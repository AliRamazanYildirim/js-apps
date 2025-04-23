class Kuehlschrank {
    #inhalt = []; // private: von außen nicht direkt zugänglich
  
    constructor(hersteller) {
      this.hersteller = hersteller;
    }
  
    // Methode zum Hinzufügen von Lebensmitteln
    lebensmittelHinzufuegen(artikel) {
      if (artikel && typeof artikel === "string") {
        this.#inhalt.push(artikel);
        console.log(`"${artikel}" wurde hinzugefügt.`);
      } else {
        console.log("Ungültiger Artikel.");
      }
    }
  
    // Methode zum Entfernen von Lebensmitteln
    lebensmittelEntfernen(artikel) {
      const index = this.#inhalt.indexOf(artikel);
      if (index > -1) {
        this.#inhalt.splice(index, 1);
        console.log(`"${artikel}" wurde entfernt.`);
      } else {
        console.log(`"${artikel}" ist nicht im Kühlschrank.`);
      }
    }
  
    // Methode zum Anzeigen des Inhalts
    inhaltAnzeigen() {
      console.log("Inhalt des Kühlschranks:", [...this.#inhalt]);
    }
  }
  
  // Anwendung
  const meinKuehlschrank = new Kuehlschrank("Bosch");
  
  meinKuehlschrank.lebensmittelHinzufuegen("Milch");
  meinKuehlschrank.lebensmittelHinzufuegen("Käse");
  meinKuehlschrank.lebensmittelEntfernen("Milch");
  
  // Versuch auf den privaten Inhalt direkt zuzugreifen (nicht erlaubt):
  meinKuehlschrank.inhaltAnzeigen(); // Zeigt den Inhalt des Kühlschranks an

//Erklärung: 
// 1. Die Klasse `Kuehlschrank` hat ein privates Attribut `#inhalt`, das den Inhalt des Kühlschranks speichert.
// 2. Die Methode `lebensmittelHinzufuegen` fügt Lebensmittel hinzu, wenn sie gültig sind.
// 3. Die Methode `lebensmittelEntfernen` entfernt Lebensmittel, wenn sie im Kühlschrank sind.
// 4. Die Methode `inhaltAnzeigen` gibt den Inhalt des Kühlschranks aus.
// 5. Der Zugriff auf das private Attribut `#inhalt` ist von außen nicht möglich, was die Kapselung demonstriert.
// 6. Die Anwendung zeigt, wie die Klasse verwendet wird, um Lebensmittel hinzuzufügen und zu entfernen.
// 7. Der Versuch, auf das private Attribut `#inhalt` direkt zuzugreifen, wird nicht erlaubt sein und führt zu einem Fehler.
  