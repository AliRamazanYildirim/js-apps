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
