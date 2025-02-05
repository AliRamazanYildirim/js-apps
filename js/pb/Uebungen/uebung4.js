"use strict";

//BEISPIEL-1
let langs = ["C#", "JS", "Java", "C++"];
const langList = () => {
  for (let i = 0; i < langs.length; i++) {
    console.log(langs[i]);
  }
  return langs;
};

langList(); //Ausgabe: C#, JS, Java, C++

//BEISPIEL-2

const berechne = (a, b) => {
  const sammeln = a + b;
  const subraktieren = a - b;
  const teilen = a / b;
  const multiplieren = a * b;

  return [sammeln, subraktieren, teilen, multiplieren];
};
console.log(berechne(4, 2));

//BEISPIEL-3

const person = {
  vorname: "Ali",
  nachname: "Yildiz",
  gehalt: 5000,
  alter: 30,
};

let { vorname: isim, nachname: soyisim, gehalt: maas, alter: yas } = person;

console.log(isim, soyisim, maas, yas);

//BEISPIEL-4
let numbers = [10, 20, 30, 40];
const array = (...numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};
console.log(array(...numbers));

//BEISPIEL-5
const readlineSync = require("readline-sync");
// const alterBerechnen = () => {
//   const alter = readlineSync.question("Alter eingeben:");
//   let berechnen = new Date().getFullYear() - alter;
//   return berechnen;
// };
//! 2. Weg
const alter = readlineSync.question("Alter eingeben:");
const alterBerechnen = (alter) => {
  let berechnen = new Date().getFullYear() - alter;
  return berechnen;
};
console.log(alterBerechnen(alter));

//BEISPIEL-6

//! Task-1

const isInRange = (nummer, min, max) => {
  return nummer >= min && nummer <= max;
};

console.log("=========Task-1=========");
const nummer = parseFloat(readlineSync.question('Enter a number: '));
const min = parseFloat(readlineSync.question('Enter the minimum value: '));
const max = parseFloat(readlineSync.question('Enter the maximum value: '));

console.log(isInRange(nummer, min, max));

//! Task-2 
const endsWithIng = (string) => {
  return string.toLowerCase().endsWith("ing");
};
const string = readlineSync.question("Stringwert eingeben:");
console.log("=========Task-2=========");
console.log(endsWithIng(string)); // false
