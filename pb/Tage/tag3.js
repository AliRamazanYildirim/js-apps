let preis = 17;
let stringPreis = "17";
let hatPassword = true;

console.log("preis:", preis, typeof preis);

console.log("stringPreis:", stringPreis, typeof stringPreis);

//? 1.Weg

let nummer = "17";
nummer = parseInt(nummer);
console.log("Nummer:", nummer, typeof nummer);

//! 2. weg
let nummer1 = "px17px";
console.log("Nummer1:", parseInt(nummer1), typeof nummer1);

let nummer2 = "17";
console.log("Nummer2:", parseInt(nummer2), typeof nummer2);

//! 3.Weg

let nummer3 = "7.1";
console.log("Nummer3:", parseFloat(nummer3), typeof nummer3);

let nummer4 = "7.1";
nummer4 = parseFloat(nummer4);
console.log("Nummer4:", nummer4, typeof nummer4);

//! 4.Weg

let nummer5 = 17;
nummer5 = nummer5.toString();
console.log("Nummer5:", nummer5, typeof nummer5);

const neuNummer= +nummer5;
console.log("neuNummer:", neuNummer, typeof neuNummer);

let deger = null;
let stringDeger = String(deger);
console.log("stringDeger:", stringDeger, typeof stringDeger);

console.log(isNaN(true));

console.log(typeof NaN);

console.log(NaN === NaN);

console.log(10/0);