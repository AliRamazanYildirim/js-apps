const person = {
  vorname: "Ali",
  nachname: "Yılmaz",
  alter: 30,
  beruf: "Softwareentwickler"
};

// Destructuring
const { vorname, beruf } = person;

// Funktion
function vorstellung(vorname: string, beruf: string): string {
  return `Hallo, mein Name ist ${vorname} und ich bin ${beruf}.`;
}

// Funktion aufrufen
console.log(vorstellung(vorname, beruf));