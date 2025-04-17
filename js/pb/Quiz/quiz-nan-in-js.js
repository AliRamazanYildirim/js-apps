// Ungültige mathematische Operationen
console.log(0 / 0);                  // NaN
console.log(Math.sqrt(-1));          // NaN

// Fehlgeschlagene Konvertierungen
console.log(parseInt("Hallo"));      // NaN
console.log(Number("123abc"));       // NaN

//Erklärung:
// NaN steht für "Not a Number" und ist ein spezieller Wert in JavaScript, der anzeigt, dass eine mathematische Operation oder eine Konvertierung in eine Zahl fehlgeschlagen ist.
// NaN ist vom Typ "number", aber es ist nicht gleich einer Zahl, auch nicht sich selbst.
// Das bedeutet, dass NaN !== NaN ist. Dies kann verwirrend sein, aber es ist wichtig zu wissen.
// Um zu überprüfen, ob ein Wert NaN ist, sollte die Funktion isNaN() verwendet werden.

//console.log(NaN === NaN);            // false
//console.log(isNaN(NaN));             // true
//console.log(isNaN(123));             // false
//console.log(isNaN("Hallo"));         // true
//console.log(isNaN("123abc"));       // true
//console.log(isNaN(undefined));      // true
//console.log(isNaN(null));           // false