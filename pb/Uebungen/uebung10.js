const readline = require("readline-sync");

//BEISPIEL-1

// const zahl = readline.question("Gib eine Zahl ein:");

// const aufrufen = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// if (zahl == random) {
//     console.log("Richtig");
// } else {
//     console.log("Falsch", random);
// }

// const random = aufrufen(1, 3);

//BEISPIEL-2

const eingabe = readline.question("Gib eine Transaktion ein:");

const addition = (num1, num2) => num1 + num2;

const subtraktion = (num1, num2) => num1 - num2;

const multiplikation = (num1, num2) => num1 * num2;

const division = (num1, num2) => num1 / num2;

if (eingabe.toLowerCase() == "addition") {
    const num1 = parseFloat(readline.question("Gib die erste Zahl ein:"));
    const num2 = parseFloat(readline.question("Gib die zweite Zahl ein:"));
    console.log(addition(num1, num2));
} else if (eingabe.toLowerCase() == "subtraktion") {
    const num1 = parseFloat(readline.question("Gib die erste Zahl ein:"));
    const num2 = parseFloat(readline.question("Gib die zweite Zahl ein:"));
    console.log(subtraktion(num1, num2));
} else if (eingabe.toLowerCase() == "multiplikation") {
    const num1 = parseFloat(readline.question("Gib die erste Zahl ein:"));
    const num2 = parseFloat(readline.question("Gib die zweite Zahl ein:"));
    console.log(multiplikation(num1, num2));
} else if (eingabe.toLowerCase() == "division") {
    const num1 = parseFloat(readline.question("Gib die erste Zahl ein:"));
    const num2 = parseFloat(readline.question("Gib die zweite Zahl ein:"));
    console.log(division(num1, num2));
} else {
    console.log("Ungültige Eingabe");
}



