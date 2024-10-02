const meinArray = [7, 4, 116];

console.log(meinArray[1]);

const [a, , b] = meinArray;
console.log(a);
console.log(b);

//BEISPIEL-1
const meinObjekt = { x: 10 };

const { x, y = 20 } = meinObjekt;

console.log(x); // 10
console.log(y); // 20

//BEISPIEL-2

function verarbeiteObjekt({ x, y, ...rest }) {
  console.log(x); // Eigenschaft x
  console.log(y); // Eigenschaft y
  console.log(rest); // Rest der Eigenschaften
}

const myObjekt = { x: 10, y: 20, z: 30, w: 40 };
verarbeiteObjekt(myObjekt);
// Ausgabe:
// 10
// 20
// { z: 30, w: 40 }

//BEISPIEL-3

// Callback-Funktion
function halloWelt() {
  console.log("Hallo, Welt!");
}

// Hauptfunktion, die eine Funktion als Argument akzeptiert
function rufeFunktionAuf(callback) {
  console.log("Ich werde die Callback-Funktion aufrufen:");
  callback(); // Aufruf der übergebenen Funktion
}

// Aufruf der Hauptfunktion und Übergabe der Callback-Funktion als Argument
rufeFunktionAuf(halloWelt);
// Ausgabe:
// Ich werde die Callback-Funktion aufrufen:
// Hallo, Welt!
