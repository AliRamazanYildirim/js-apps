//! Task-1

const profileData = {
    vorname: "Ali",
    nachname: "Yildiz",
    alter: 30,
    stadt: "Istanbul",
    details: function () {
      return `${this.vorname} ${this.nachname} ist ${this.alter} alt und lebt in ${this.stadt}.`;
    },
  };
  
  console.log(profileData.details());
  
  //! Task-2
  
  const wortUmwandeln = (woerter, gesuchteEndung) =>
    woerter.map((wort) => wort + gesuchteEndung);
  let adjektiven = ["smart", "kind", "sweet", "small", "clear"];
  console.log(wortUmwandeln(adjektiven, "er"));
  
  //! Task-3
  const stundenVerfolgung = [
    { day: "Monday", start: 8, end: 17 },
    { day: "Tuesday", start: 9, end: 15 },
    { day: "Wednesday", start: 10, end: 18 },
    { day: "Thursday", start: 7, end: 14 },
    { day: "Friday", start: 6, end: 12 },
  ];
  
  const arbeitsStundenBerechnen = (stunden) => {
    return stunden.reduce((gesamt, tag) => {
      const tagesStunden = tag.end - tag.start;
      return gesamt + tagesStunden;
    }, 0);
  };
  console.log(arbeitsStundenBerechnen(stundenVerfolgung));
  
  //! Task-4
  class Kurse {
    constructor(lehrer, typ, menge) {
      (this.lehrer = lehrer), (this.typ = typ);
      this.menge = menge;
    }
  
    platzBedarf() {
      return this.menge * 2;
    }
  
    details() {
      return `Dies ist ein ${this.typ}, der von ${this.lehrer} unterrichtet wird. An dem Kurs nehmen ${this.anzahl} Studenten teil.`;
    }
  }
  const meinKurs = new Kurse("Herr Schmidt", "Web-Development", 10);
  console.log(meinKurs.platzBedarf());
  console.log(meinKurs.details());
  
  //! Task-5
  
  const gueltigePin = (pin) => {
    if (!/^[a-zA-Z0-9]{4}$/.test(pin)) {
      return false;
    }
  
    const letzteZiffer = parseInt(pin[3]);
    if (letzteZiffer % 2 !== 0) {
      return false;
    }
  
    const ersteZiffer = parseInt(pin[0]);
    if (ersteZiffer === letzteZiffer) {
      return false;
    }
  
    return true;
  };
  console.log(gueltigePin("1234"));
  console.log(gueltigePin("12ww"));
  console.log(gueltigePin("12.4"));
  console.log(gueltigePin("-234"));
  console.log(gueltigePin("12345"));
  console.log(gueltigePin("2222"));
  console.log(gueltigePin("2224"));
  