BEISPIEL-1
const x = 'hi'.split(',');
const y = ['h', 'i'];
console.log(x === y); // false

//Zusammenfassend lässt sich sagen, dass x === y in JavaScript false zurückgibt, auch wenn x und y denselben Inhalt haben, da sie unterschiedliche Referenztypen sind.

BEISPIEL-2
const a = '7';
const b = true;

console.log(a -b); // 6

//In JavaScript wird der Operator - als Subtraktion für Zahlen und als Negation für andere Datentypen verwendet. Da b ein boolescher Wert ist, wird er implizit in eine Zahl umgewandelt. true wird zu 1 und false zu 0. Daher wird true zu 1 und 7 - 1 = 6 zurückgegeben.

BEISPIEL-3

const num = 7;

num = num++;
console.log(num); // 7

//In JavaScript ist num++ ein Post-Inkrementoperator, der den Wert von num erhöht, nachdem der Wert zurückgegeben wurde. Da num = 7 bereits zugewiesen wurde, wird num++ zu 7 zurückgegeben, bevor num um 1 erhöht wird. Daher bleibt num 7.
