// ES6
// JS modules => we have two keywords => export - import

// BEISPIEL-1
export let publicVar = "***This is public variable 🌐";

export function publicFunc() {
  console.log("####This is public Function");
}

// Or with Arrow Function
export const secondFunc = () => {
  console.log("I am arrow function");
};

// Default export vs. named export

// BEISPIEL-2: default export
// Kann einen einzelnen Wert (Objekt, Funktion, Variable) exportieren
// Es kann nur EINEN Standardexport pro Skript geben
// Der Name des exportierten Wertes beim Import ist Ihre Wahl
// Es gibt keine {} beim Import
const person = {
  fName: "Biggie",
  num: 8,
};

export default person;


// BEISPIEL-3: named export
// können mehrere Werte exportieren (Objekte, Funktionen, Variablen)
// Es kann mehr als einen Export pro Skript geben
// Der Name des Exportwerts sollte beim Import genau derselbe sein
// Vergessen Sie nicht {} beim Import
export const add = (x, y) => x + y;
export const minus = (x, y) => x - y;

// BEISPIEL-4: named export
function addNumbers(x, y) {
  console.log(x + y);
}

function minusNumbers(x, y) {
  console.log(x - y);
}

function divideNumbers(x, y) {
  console.log(x / y);
}

const city = {
  cityName: "Köln",
};

const myArray = [1, 2];

let myVar = 10;

export { addNumbers, minusNumbers, divideNumbers, city, myArray, myVar };

