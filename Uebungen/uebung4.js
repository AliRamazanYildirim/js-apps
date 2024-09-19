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



