ruf("Ali");
function ruf(name) {
  console.log(`Hallo ${name}`);
}

ruf("Elif");

//! BEISPIEL-1

function sagHallo() {
  let name = "Ali";
  console.log(`Hallo ${name}`);
}
sagHallo();

//! BEISPIEL-2

function nummer(num) {
  if (num % 2 === 0) {
    console.log(`${num} ist gerade`);
  } else {
    console.log(`${num} ist ungerade`);
  }
}
nummer("5");

function nummer1(num, num1) {
  return num + num1;
}
nummer1(1, 2);

//! BEISPIEL-3
function nummer2(num, num1) {
  return num * num1;
}

console.log(nummer2(1, 2));

const fullname = () => "Ali";
console.log(fullname());

const fullname1 = (name) => `Hallo ${name}`;
console.log(fullname1("Ali"));

let val = 10;
function add() {
  console.log(val);
  val = 7;
  console.log(val);
}
console.log(val);
add();

const createPerson = (firstName, lastName) => ({
  firstName,
  lastName,
});

console.log(createPerson("John", "Doe"));

function berechne(x, y) {
  let sum1 = nummer1(x, y);
  let sum2 = nummer2(x, y);
  return sum1 + sum2;
}
console.log(berechne(3, 2));

function berechne1(x, y, z) {
  if (z == "Hallo") console.log(x - y);
  else console.log(x + y);
}
berechne1(3, 2);

const powNummer = function (x, y) {
  for (let i = 1; i <= y; i++) {
    let resultat = Math.pow(x, i);
    console.log(`${x}^${i}=${resultat}`);
  }
};
powNummer(2, 5);

function berechne3() {
  if (true) {
    // console.log(x); Vorher kann man nicht definieren
    let x = "X";
    console.log(x);
  }
  // console.log(x); Außer {} bloken kann man nicht etwas manupilieren
}
berechne3();
