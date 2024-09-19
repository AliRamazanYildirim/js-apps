//! For Schleife

for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 65; i <= 90; i++) {
  console.log(String.fromCharCode(i));
}
for (let i = 97; i <= 122; i++) {
  console.log(String.fromCharCode(i));
}

const arr = [];
for (let i = 1; i <= 20; i++) {
  arr.push(i);
}
console.log(arr);

let arr1 = [];

for (let i = 0; i <= 8; i++) {
  if (i % 2 === 0) {
    arr1.push(i);
  }
}
console.log(arr1);

let arr3 = [10, 15, 20, 25, 30];
let sum = 0;
for (let i = 0; i < arr3.length; i++) {
  sum += arr3[i];
}
console.log(sum);

let arr4 = [10, 15, 20, 25, 30];
for (let i = 0; i < arr3.length; i++) {
    arr4[i] *= 2;
}
console.log(arr4);

let arr6 = [1, 2, 3, 4, 5];
let result = arr6[0];

for (let i = 1; i < arr6.length; i++) {
  result*=arr6[i];
}

console.log(result);

// BEISPIEL-1

let arr5 = [];

for (let i = 0; i < 3; i++) {
    arr5.push([]);
    for (let j = 0; j <=6; j++) {
        arr5[i].push(j);
    }
}

console.log(arr5);

// BEISPIEL-2

let matrix = [];

for (let i = 0; i < 3; i++) {
  matrix[i] = [];
  for (let j = 0; j < 3; j++) {
    matrix[i][j] = i * 3 + j; // matris elemanlarını hesapla
  }
}

console.log(matrix);