//! Logischi Operatoren

let isTrue = true;
let isFalse = !isTrue;
console.log(isFalse);

//! Conditional statment with logical operators

let temp = 30;
let isSunShining = true;
if (temp > 20 && isSunShining) {
  console.log("Die Sonne scheint");
} else console.log("Das Wetter ist schlecht");

//! BEISPIEL-1

let esRegnet = false;

if (temp > 25 || esRegnet) {
  console.log("Es ist warm oder es regnet");
} else console.log("Es regnet nicht");

//! BEISPIEL-2

let a = true;
let b = 7;
let isRichtig = true;
let isExst = false;

if (a || (b > 5 && isRichtig && isExst)) {
  console.log("true");
} else console.log("false");

if ((a || b > 5) && isRichtig && isExst) {
    console.log("true");
  } else console.log("false");


//! BEISPIEL-3

let tag=7;

switch (tag) {
    case 1:
      console.log("Montag");
      break;
    case 2:
      console.log("Dienstag");
      break;
    case 3:
      console.log("Mittwoch");
      break;
    case 4:
      console.log("Donnerstag");
      break;
    case 5:
      console.log("Freitag");
      break;
    case 6:
      console.log("Samstag");
      break;
    case 7:
      console.log("Sonntag");
      break;
    default:
      console.log("Ungültiger Tag");
}

//! BEISPIEL-4

const readline = require('readline-sync');

let userInput=readline.question("Gib id ein :");
let userInput1=readline.question("Gib name ein :");
let userInput2=readline.question("Gib alter ein :");


