const readline = require("readline-sync");

// Create your solutions here

//! Aufgabe 1 - Beginnt mit Los oder New?
const str = readline.question("Gib ein Wert ein:");
function startsWithLosOrNew(str) {
  const lowerString = str.toLowerCase();
  return lowerString.startsWith("los") || lowerString.startsWith("new");
}
console.log("=======Task-1=======");
console.log(`Wert ist '${str}': ${startsWithLosOrNew(str)}`); // true or false based on input

//! Aufgabe 2 - Ist teilbar durch 100?
const num = readline.question("Gib ein Nummer ein:");
function isDivisibleBy100(num) {
    return num % 100 === 0;
}
console.log("=======Task-2=======");
if (isDivisibleBy100(num)) {
    console.log(`Nummer ist ${num} und teilbar durch 100: ${isDivisibleBy100(num)}`);
} else {
    console.log(`Nummer ist ${num} und nicht teilbar durch 100: ${isDivisibleBy100(num)}`);
}

//! Aufgabe 3 - Wie ist das Wetter?
function isRaining(isRain) {
  return isRain
    ? "wet day - you need an umbrella"
    : "dry day - leave your umbrella at home";
}
console.log("=======Task-3=======");
console.log(isRaining(false));

// //! Aufgabe 4 - Du hast die Macht
const nummer = readline.question("Gib eine Nummer ein:");
function powerOf(nummer) {
  return Math.pow(nummer, nummer);
}
console.log("=======Task-4=======");
console.log(`${nummer}^${nummer}: ${powerOf(nummer)}`); // 4

// //! Aufgabe 5 - Bereich
const start = parseInt(readline.question("Gib den Startwert ein:"));
const end = parseInt(readline.question("Gib den Endwert ein:"));

function range(start, end) {
    const result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}

console.log("=======Task-5=======");
console.log(`Bereich von ${start} bis ${end}:`, range(start, end));

