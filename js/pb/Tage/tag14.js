//BEISPIEL-1
const land = {
  name: "Deutschland",
  capital: "Berlin",
  inEurope: true,
  cities: ["Hamburg", "München", "Köln", "Frankfurt"],
  1: "Leben",
  2: "Lol",
};
console.log(land.cities[2]); // Köln
console.log(land.cities.length); // 4
console.log(land.inEurope); // true
console.log(land.name); // Deutschland
console.log(land.capital); // Berlin
console.log(land.cities); // ["Hamburg", "München", "Köln", "Frankfurt"]
console.log(land.cities[0]); // Hamburg
console.log(land.cities[1]); // München
console.log(land.cities[3]); // Frankfurt
console.log(land.cities[4]); // undefined
console.log(land.cities[land.cities.length]); // undefined
console.log(land.cities[land.cities.length - 1]); // Frankfurt
console.log(land["1"]); // Leben
console.log(land[1]); // Leben
console.log(land[1.0]); // Leben
console.log(land["cities"][3]); // Frankfurt
land.capital = "Stuttgart";
console.log(land);
delete land[1];
console.log(land);

// BEISPIEL-2

const car = {
  brand: "BMW",
  model: "X5",
  year: 2021,
  color: "black",
  price: 70000,
  isAvailable: true,
  1: "Leben",
  2: "Lol",
};
console.log(car.brand); // BMW
delete car[1];
console.log(car);

const carName = "BMW";

const car2 = {
  [carName]: "X5",
  year: 2021,
  color: "black",
  price: 70000,
  isAvailable: true,
};
console.log(car2); // X5
console.log(car2["isAvailable"]); // X5
console.log(Object.keys(car2).length);


//BEISPIEL-3

const nummer = {
    num1: 1,
    num2: 2,
    num3: 3,
};

let sum = 0;
for (let key in nummer) {
    sum += nummer[key];
}

console.log(sum); // 6
console.log(Array.isArray(sum));

//BEISPIEL-4

const person = {
    name: "John",
    age: 30,
    isAvailable: true
};

// Überprüfen des Werts der Eigenschaft 'isAvailable' mit Punktnotation
if (person.isAvailable) {
    console.log("Die Person ist verfügbar.");
} else {
    console.log("Die Person ist nicht verfügbar.");
}

// Überprüfen des Werts der Eigenschaft 'isAvailable' mit Klammernotation
if (person["isAvailable"]) {
    console.log("Die Person ist verfügbar.");
} else {
    console.log("Die Person ist nicht verfügbar.");
}