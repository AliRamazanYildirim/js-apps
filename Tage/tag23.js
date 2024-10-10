let fruits = ["apple", "banana", "cherry", "date"];
let removed = fruits.splice(1, 2); // Entferne ab Index 1, 2 Elemente
console.log(fruits); // ["apple", "date"]
console.log(removed); // ["banana", "cherry"]

function trash(x) {
  const del = x;
  console.log(del);
  return del;
}
trash(removed);
