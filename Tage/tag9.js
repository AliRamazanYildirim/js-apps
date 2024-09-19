const { question } = require("readline-sync");

//BEISPIEL-1
let arr = [];

for (let i = 0; i < 2; i++) {
  let innerArr = [];

  for (let j = 1; j <= 2; j++) {
    innerArr.push(j);
  }

  arr.push(innerArr);
}

console.log("arr:", arr);

//BEISPIEL-2

let arr1 = [];

for (let i = 0; i < 2; i++) {
  arr1[i] = [];

  for (let j = 0; j < 2; j++) {
    arr1[i].push(j + 1);
  }
}

console.log("arr1:", arr1);

//BEISPIEL-3

let arr2 = [];

for (let i = 0; i < 2; i++) {
  arr2[i] = [];

  for (let j = 0; j < 2; j++) {
    arr2[i][j] = j + 1;
  }
}

console.log("arr2:", arr2);

//BEISPIEL-4
let arr3 = [];

for (let i = 0; i < 2; i++) {
  arr3[i] = [];

  for (let j = 0; j < 2; j++) {
    arr3[i][j] = j;
  }
}

console.log("arr3:", arr3);

//BEISPIEL-5
const readlineSync = require("readline-sync");
const zahl = readlineSync.question("Gib eine Zahl ein:");
if (zahl >= 10 && zahl <= 50) {
  console.log("Zahl ist zwischen 10 und 50");
} else {
  console.log("Zahl ist nicht zwischen 10 und 50");
}

