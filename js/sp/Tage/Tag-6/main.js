// BEISPIEL-1
import { publicVar, publicFunc, secondFunc } from "./app.js";

console.log(publicVar);

publicFunc();

secondFunc();

// BEISPIEL-2: export default
import myPerson from "./app.js";
console.log(myPerson); // {fName: 'Biggie', num: 8}
console.log(myPerson.fName); // Biggie
console.log(myPerson["num"]); // 8

// BEISPIEL-3: named export
import { add, minus } from "./app.js";
console.log(add(10, 7)); // 17
console.log(minus(10, 20)); // -10

// BEISPIEL-4: named export
import { addNumbers, city, myArray, myVar } from "./app.js";

console.log(myArray); // [1, 2]
console.log(myVar + 80); // 90
addNumbers(7, 80); // 87
console.log(city.cityName); // Köln
