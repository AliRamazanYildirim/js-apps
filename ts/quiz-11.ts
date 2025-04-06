console.log(String([]) + String({}));

console.log(String({}) + String([]));

//Erklärung:
// 1. `String([])`: Ein leeres Array wird in einen leeren String umgewandelt.
// 2. `String({})`: Ein leeres Objekt wird in den String "[object Object]" umgewandelt.
// 3. `String([]) + String({})`: Das Ergebnis ist ein leerer String plus "[object Object]", was "[object Object]" ergibt.
// 4. `String({}) + String([])`: Das Ergebnis ist "[object Object]" plus ein leerer String, was ebenfalls "[object Object]" ergibt.
// Daher sind beide Ausdrücke gleich und geben "[object Object]" zurück.
// In TypeScript wird der Ausdruck `String([]) + String({})` zu "[object Object]" evaluiert.
// In TypeScript wird der Ausdruck `String({}) + String([])` ebenfalls zu "[object Object]" evaluiert.
// Beide Ausdrücke sind gleich und geben "[object Object]" zurück.