/* Das Kopieren primitiver Typen
Primitiver Typen (zum Beispiel, number, string, boolean, null, undefined, symbol, bigint) werden als Wert kopiert.
Dies bedeutet, dass eine neue, vom Originalwert unabhängige Kopie eines primitiven Wertes erstellt wird, wenn dieser kopiert wird. */
let a = 10;
let b = a; //b kopiert den Wert von a
b = 20;

console.log(a); // Ausgabe: 10 (a ändert sich nicht)
console.log(b); // Ausgabe: 20

/* Kopieren von Objekttypen
Objekttypen (z. B. Objekt, Array, Funktion) werden als Referenz kopiert.
Dies bedeutet, dass beim Kopieren eines Objekttyps tatsächlich ein Verweis auf das ursprüngliche Objekt erstellt wird.
Das heißt, Änderungen, die an dem kopierten Objekt vorgenommen werden, wirken sich auch auf das ursprüngliche Objekt aus. */

let arr1 = [1, 2, 3];
let arr2 = arr1; // `arr2` weist die Referenz von `arr1` zu.
arr2[0] = 99;
console.log("================================");
console.log(arr1); // Ausgabe: [99, 2, 3] (arr1 ändert sich)
console.log(arr2); // Ausgabe: [99, 2, 3]


console.log("================================");
/* Arrays tief kopieren
Wenn Sie ein Array tief kopieren möchten (das heißt, ein neues unabhängiges Array erstellen möchten),
können Sie den Slice- oder Spread-Operator verwenden: */

//! slice Yöntemi
let array1 = [1, 2, 3];
let array2 = array1.slice(); // Erstellt ein neues Array
arr2[0] = 99;

console.log(array1); // Ausgabe: [1, 2, 3] (arr1 unverändert)
console.log(array2); // Ausgabe: [99, 2, 3]
console.log("================================");


//! Spread Operatörü
let arr3 = [1, 2, 3];
let arr4 = [...arr3]; // Erstellt ein neues Array
arr4[0] = 99;

console.log(arr3); // Ausgabe: [1, 2, 3] (arr1 unverändert)
console.log(arr4); // Ausgabe: [99, 2, 3]