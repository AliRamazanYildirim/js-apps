//BEISPIEL-1
const num2 = [50, 3, 10, 20];
const x = (prevValue, currentValue) => prevValue - currentValue;
const result2 = num2.reduce(x, 5);
console.log(result2);

//BEISPIEL-2
const num4 = [14, 3, 50, 7];
const initialValue4 = 0;
const result4 = num4.reduce((prevValue, currentValue) => {
  if (currentValue > 10) {
    return prevValue + currentValue; // Add
  } else {
    return prevValue - currentValue; // subtract
  }
},initialValue4);
console.log(result4);

//BEISPIEL-3
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const grouped = numbers.reduce((accumulator, currentValue) => {
  const key = currentValue % 2 === 0 ? "even" : "odd";
  if (!accumulator[key]) {
    accumulator[key] = [];
  }
  accumulator[key].push(currentValue);
  return accumulator;
}, {});
console.log(grouped); // { even: [2, 4, 6, 8, 10], odd: [1, 3, 5, 7, 9] }

//BEISPIEL-4
const students = [
  { name: "Biggie", id: 10 },
  { name: "Andre", id: 7 },
  { name: "Ramazan", id: 2 },
  { name: "Niloofar", id: 9 },
];
const idSum = students.reduce(
  (accumulator, currentValue) => accumulator + currentValue.id,
  0
);
console.log(idSum); //28

//BEISPIEL-5
const cars = ['BMW', 'Audi', 'BMW', 'Mercedes', 'Audi', 'BMW'];
const carFrequency = cars.reduce((accumulator, currentValue) => {
    if (!accumulator[currentValue]) {
        accumulator[currentValue] = 0;
    }
    accumulator[currentValue]++;
    return accumulator;
}, {});
console.log(carFrequency); // { BMW: 3, Audi: 2, Mercedes: 1 }

//BEISPIEL-6
const names = ['ali', 'Elif', 'mahmut', 'ceylan'];
names.sort((a, b) => a.localeCompare(b));
console.log(names); // ['Alice', 'bob', 'Charlie', 'john']