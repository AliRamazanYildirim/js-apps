console.log(7);
console.error("Ungültige Wert!");
console.warn("Versuchen Sie bitte nochmal");
console.info("Informative Nachricht");
console.debug("Debug-Nachricht");
console.time("Vorgangsdauer");
console.timeEnd("Vorgangsdauer");
const daten = [
  { name: "Max", alter: 25 },
  { name: "Moritz", alter: 30 },
];
console.table(daten);
console.log("Typ:", typeof daten);

let variable = "Wert";
variable = "Neuer Wert";
console.log(variable);

const bool = true;
console.log(bool);
console.log("Typ:", typeof bool);

let leer = null;
console.log(leer);

let bigNmr = 123213213454546464n;
console.log(bigNmr);
console.log("Typ:", typeof bigNmr);

const pi = 3.14;
// pi=15;
console.log("Typ:", typeof pi);

//const t; //https://devopedia.org/naming-conventions

let a = 10;
console.log(a + " " + b);
var b = 20;
console.log(Infinity * 0); // NaN
console.log(0 / 0); // NaN
console.log(NaN != NaN); // true
console.log(Number.isNaN(NaN)); //true

let m = 700000000000000000000000n;
let n = 70000;
console.log(Number(m) + n);

let benutzerName = "Elif";
let neuerName = benutzerName;
console.log(neuerName);
benutzerName = "Mehmet";
console.log(benutzerName);
console.log(neuerName);

let numbers = [1, 2, 3];
numbers.push(4);

console.log(numbers.length); // Output: 4

let person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
  },
};

console.log(person.address); // Output: John

let ueber = "Programmierer";
console.log(ueber.length);

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

let fact = factorial(5);
console.log(fact); // Output: 120

let pruefungsNote = 70;

let istBestanden = pruefungsNote >= 50;
console.log(istBestanden);

let zahl = 10;
let zahl2 = 20;
console.log(Number(zahl) + Number(zahl2));

let x = "10";
let y = "20";
console.log(x.toString(zahl) + y.toString(zahl2));

let personal = "Programmierer";
console.log(personal.toUpperCase());
console.log(personal.toLowerCase());

//* BEISPIEL-1
let studentName = "Ali";
let studentNachname = "Kilicsoy";
let studentAge = 20;
const geburtDatum = "2004";
const matheNote1 = 70;
const matheNote2 = 70;
const matheNote3 = 80;

let matheDurchschnitt = (matheNote1 + matheNote2 + matheNote3) / 3;
console.log(parseFloat(matheDurchschnitt));

let aktuelDatum = new Date().getFullYear();

let studentAlter = aktuelDatum - parseInt(geburtDatum);
console.log(studentAlter);

//* BEISPIEL-2
let PI = Math.PI;
let squareRoot = Math.sqrt(16);
let randomNum = Math.floor(Math.random() * 10) + 1;
let randomNum2 = Math.random();
let roundedNum = Math.round(3.14);

console.log(PI);
console.log("Square:", squareRoot);
console.log("Random:", randomNum);
console.log("Random2:", randomNum2);
console.log("Rounded:", roundedNum);
console.log(`${PI.toString()}`);

let array = [1, true, "Ali", [1, 2, 3]];
for (let i = 0; i < array.length; i++) {
  console.log("Type:" + typeof array[i] + " Wert: " + array[i]);
}
console.table(array);
console.dir(array);
console.table(array[3]);
console.log(array);
console.log(array[0]++);
console.log(++array[0]);
let roundedNum1 = Math.round(3.5);
console.log(roundedNum1);

//! Das ist ein Formular 
const min = -10;
const max = -20;
//? Und Das ist so wichtig vergiss es nicht
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;  
console.log(randomNumber); // Output: a random integer between -10 and 10, e.g. 3

let kelime = "    javascript c#";
const sonHarf = kelime[kelime.length - 1];
console.log("Letzte Buchstabe", sonHarf); // Output: "t"

console.log("replace:", kelime.replace("java", "py")); // Output: "pythonscript"
console.log("slice:", kelime.slice(0));
console.log("slice:", kelime.slice(4));
console.log("slice:", kelime.slice(0, -4));
console.log("substring:", kelime.substring(0, 4));
console.log("trim:", kelime.trim());
console.log("includes:", kelime.includes("java"));
