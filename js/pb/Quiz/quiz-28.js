const double = (x) => x * 2;
const increment = (x) => x + 1;

const compose = (...functions) => (value) =>
  functions.reduceRight((acc, fn) => fn(acc), value);

const process = compose(increment, double); // Önce double, sonra increment
console.log(process(5)); // Output: 11

/* 
Erklärung:
- `double` multipliziert den Wert mit 2.
- `increment` addiert 1 zum Wert.
- `compose` nimmt eine Liste von Funktionen und gibt eine neue Funktion zurück, die diese Funktionen von rechts nach links anwendet.
- `process` ist eine neue Funktion, die zuerst `double` und dann `increment` auf den Wert anwendet.
- `process(5)` gibt 11 zurück, weil zuerst 5 verdoppelt wird (10) und dann 1 addiert wird (11).
In diesem Beispiel wird die Funktion `process` erstellt, die zuerst `double` und dann `increment` auf den Wert anwendet.

*/