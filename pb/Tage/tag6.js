const arr = ["x", "y", "z", "a"];

arr[7] = "Ali";
arr[5] = "Elif";
console.log(arr);

console.log(arr.length);

console.log(arr[5].length);

arr.push("Muhammed");
console.log(arr);

// BEISPIEL-1

const arr1 = ["x", "y", "z", "a"];
console.log(arr1.push("b"));

arr1.unshift("Bilge");
console.log(arr1);

arr1.pop();
console.log(arr1);

arr1.shift();
console.log(arr1);

const arr2 = [7, 5, 13, 77, 89];
const arr3 = arr2.slice(1, 3);
const arr4 = arr2.slice(7);
const arr5 = arr2.slice(2);
console.log(arr3);
console.log(arr4);
console.log(arr5);

// BEISPIEL-2

const neuArr = ["Ali", "Veli", "Fatma", "Onur"];
const arr6 = neuArr.splice(-3);
console.log(arr6);


// BEISPIEL-3

const arr8 = ["Ali", "Veli", "Fatma", "Onur"];
arr8.reverse();
console.log(arr8);

// BEISPIEL-4

const arr9 = [7, 5, 13, 7, 89];
console.log(arr9.indexOf(89));
console.log(arr9.lastIndexOf(7));
console.log(arr9.includes(13));
arr9.splice(2, 1, 100, 300);
console.log(arr9);


// BEISPIEL-5

const arr10 = ['s','d','e'];
arr10.splice(0, 0, 'l', 'p');
console.log(arr10);

// BEISPIEL-6

const meinArray = [1, 2, 3, 'a', 'b', 'c'];
const str = meinArray.join(',');
console.log(str); 

// BEISPIEL-7

const benimString = 'a-b-c-d-e';
const benimDizi = benimString.split('-');
console.log(benimDizi); // Çıktı: ["a", "b", "c", "d", "e"]
