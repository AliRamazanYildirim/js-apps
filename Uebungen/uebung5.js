var array1 = [25, 7, 5, 6, 7];
var array2 = [1, 5, 7];
console.log(array1.map((v, i) => (i < array2.length ? v - array2[i] : v)));
console.log(array1.map((v, i) => (array2[i] != null ? v - array2[i] : v)));

//! 2.Weg
let arr1 = [25, 7, 5, 6, 7];
let arr2 = [1, 5, 7];
let result = [];

for (let i = 0; i < arr1.length; i++) {
  if (i < arr2.length) {
    result.push(arr1[i] - arr2[i]);
  } else {
    result.push(arr1[i]);
  }
}

console.log(result);