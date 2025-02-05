//BEISPIEL-1
const alter = (x) => new Date().getFullYear() - x;
console.log(alter(1999));

const wohnOrt = (land) => console.log(`Ich lebe in ${land}`);

wohnOrt("Türkei");

const meinAuto = (car) => `Ich habe ein ${car}`;
console.log(meinAuto("BMW"));

console.log(hoist());

function hoist() {
  return "Hoisted function!";
}

// console.log(hoistArrow());

const hoistArrow = () => "Hoisted arrow function!";
console.log(hoistArrow());

const sumNummer = (x, y) => (!true ? x + y : x - y);
console.log(sumNummer(10, 5));


//BEISPIEL-2
const x = [10, 4, 5, 6, 8, 9];
const zahl = (num) => {
    const result = [];
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 === 0) {
            result.push(num[i]);
        }
    }
    return result;
};
console.log(zahl(x));

//BEISPIEL-3
const rabbatt = (preis, prozent) => preis * prozent;
console.log(rabbatt(270,Math.abs(-0.8)));
console.log("");



