const auto = {
  marke: "Mercedes",
  farbe: "Schwarz",
  baujahr: 2020,
};
console.log(auto.marke);
console.log(auto["farbe"]);
auto.modell = "C-Klasse";
auto["farbe"] = "Weiß";
console.log(auto);

const werte = Object.values(auto);
console.log(werte);
const schluessel = Object.keys(auto);
const schluessel1 = Object["keys"](auto);
console.log("Mit Punkt-Notation", schluessel);
console.log("Mit Bracket-Notation", schluessel1);
console.log(Object.keys(auto)[0]);
console.log(Object.entries(auto));
console.log(Object.assign(auto));
console.log("===========");

//BEISPIEL-1
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source, { r: 7 });

console.log(returnedTarget); // { a: 1, b: 4, c: 5, r: 7 }
console.log(target); // { a: 1, b: 4, c: 5, r: 7 }
console.log(source); // { b: 4, c: 5 }
console.log("===========");

//BEISPIEL-2

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
console.log("===========");

//BEISPIEL-3

const carInfo = {
  make: "Toyota",
  model: "Yaris",
  year: 1990,
};

for (let info in carInfo) {
  console.log(`${info} ---> ${carInfo[info]}`);
}
console.log("===========");

//BEISPIEL-4

const nummern = [1, 8, 6, 7, 4];

for (let nummer of nummern) {
  nummer++;
  console.log(nummer);
}
console.log("===========");

//BEISPIEL-5

const person1 = "Ali";
for (let name of person1) {
  console.log(name);
}
console.log("===========");

const person2 = "Ali";
for (let name in person2) {
  console.log(name);
}

//BEISPIEL-6

const sports = {
  football: {
    players: 11,
    origin: "England",
  },
  basketball: {
    players: 5,
    origin: "USA",
  },
  tennis: {
    players: 1,
    origin: "France",
  },
};

const getKeys = Object.values(sports);
console.log(getKeys);
console.log("=======================");
const getValues = Object.entries(sports);
console.log(getValues);

console.log("=======================");
for (let sport in sports) {
  console.log(`${sport}:`);
  for (let detail in sports[sport]) {
    console.log(`  ${detail}: ${sports[sport][detail]}`);
  }
}

//BEISPIEL-7
const a = {
  fName: "Ali",
};

const b = {
  alter: "27",
};

const c = { ...a, ...b };
console.log(c);

//BEISPIEL-8
let x = 2;
x = x++ * ++x;
console.log(x);
