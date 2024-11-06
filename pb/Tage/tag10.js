//! BEISPIEL-1
// const readlineSync = require("readline-sync");
// const zahl = readlineSync.question("Gib eine Zahl ein:");
// if (zahl >= 10 && zahl <= 50) {
//   console.log(`Zahl ${zahl} ist zwischen 10 und 50`);
// } else {
//   console.log(`Zahl ${zahl} ist nicht zwischen 10 und 50`);
// }

//! BEISPIEL-2
// const readlineSync = require("readline-sync");
// const anzahl = readlineSync.question("Gib eine Zahl ein:");
// if (anzahl > 0 && anzahl % 2 == 1) {
//   console.log(`Die Zahl ${anzahl} ist positiv und ungerade.`);
// } else {
//   console.log(`Die Zahl ${anzahl} ist nicht positiv oder ist gerade.`);
// }

//! BEISPIEL-3
// const readlineSync = require("readline-sync");
// const visaNote1 = readlineSync.question("1. Visanote eingeben:");
// const visaNote2 = readlineSync.question("2. Visanote eingeben:");
// const finalNote = readlineSync.question("Finalnote eingeben:");

// let durchschnittNote = (((Number(visaNote1) + Number(visaNote2)) / 2) * 0.4) + (Number(finalNote) * 0.6);

// if ((durchschnittNote >= 50 && finalNote >= 50) || (finalNote >= 70 || durchschnittNote >= 50)) {
//   console.log(`Durchschnittnote: ${durchschnittNote} - Bestanden`);
// } else {
//   console.log(`Durchschnittnote: ${durchschnittNote} - Nicht bestanden`);
// }

//! BEISPIEL-4
const items = ["pen", "chair", "cup", "laptop", "glass", "book"];
//* 1.Weg
// while (items.length > 3) {
//   const entferntesItem = items.pop();
//   console.log(`${entferntesItem} wurde entfernt`);
// }
// console.log("Den Rest ist:", items);

//* 2.Weg
// for (let i = items.length; i > 3; i--) {
//     const entferntesItem = items.pop();
//     console.log(`${entferntesItem} wurde entfernt`);
// }
// console.log("Den Rest ist:", items);

//! BEISPIEL-5
// let pin = "4545456";
// while (pin.length < 6) {
//     const randomNummer = Math.floor(Math.random() * 10);
//     console.log(randomNummer)
//     pin += randomNummer;
// }

// if (pin.length > 6) {
//     console.log("Sie können nicht mehr als 6 Zeichen eingeben.");
// } else {
//     console.log(pin);
// }

//! BEISPIEL-6
// let pin = "abca";
// let i=0;
// while(i<4){
//     console.log(pin.indexOf(pin[i]),i)
//     if(pin.indexOf(pin[i])!==i){
//         console.log("Ungültiger Wert");
//     }
//     i++;
// }
// console.log(pin);

//! BEISPIEL-7
let pin = "";
let characters = "abcdefghijklmnopqrstuvwxyz!+?*";

while (pin.length < 6) {
  const randomIndex = Math.floor(Math.random() * characters.length);
  const randomCharacter = characters[randomIndex];
  if (pin.includes(randomCharacter)) {
    continue;
  }
  pin += randomCharacter;
}
console.log(pin);

// let input = "";
// while (input !== "yes" && input !== "no") {
//   input = readlineSync.question("Bist du sicher? (yes/no):").toLowerCase();
// }
// console.log(`Deine Antwort: ${input}`);