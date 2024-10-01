const array = [1, 2, 3];

//! Mit Destructuring
const [a, b, c] = array;

console.log(a);
console.log(b);
console.log(c);

//! Ohne Destructuring
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

//BEISPIEL-1

const nummern = [1, 2, 3, 4];

// Zweiten und vierten Element nehmen
const [, second, , fourth] = nummern;

console.log(second); // 2
console.log(fourth); // 4

//BEISPIEL-2
const array1 = [1];

// Destruktürleme ile varsayılan değerler
const [x, y = 2] = array1;

console.log(x); // 1
console.log(y); // 2

//BEISPIEL-3

//! Rest parameter
const array2 = [1, 2, 3, 4, 5];
const [first, ...rest] = array2;
console.log(first); // 1
console.log(rest); // [2, 3, 4, 5]

//BEISPIEL-4

const complexArray = [1, [2, [3, 4]], 5];

//! Verschachtelte Destrukturierung
const [r, [p, [z, w]], v] = complexArray;

console.log(r); // 1
console.log(p); // 2
console.log(z); // 3
console.log(w); // 4
console.log(v); // 5

const nestedArrayWithDefaults = [1, [2]];

// Verschachteltes Destructuring und Standardwerte
const [g, [l, t = 3]] = nestedArrayWithDefaults;
const value = nestedArrayWithDefaults[1][0];
console.log(value); // 2
console.log(g); // 1
console.log(l); // 2
console.log(t); // 3 (Standardwert)

//BEISPIEL-5
//! Grundlegende Verwendung
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

// Mit Destructuring
const { name, age, city } = person;

console.log(name); // John
console.log(age); // 30
console.log(city); // New York

const person1 = {
  name: 'John',
  age: 30
};

// Umbenennung mit Destructuring
const { name: fullName, age: years } = person1;

console.log(fullName); // John
console.log(years); // 30

const person3 = {
  fname: 'John'
};

// Destrukturierung mit Standardwerten
const { fname, pAge = 25 } = person3;

console.log(fname); // John
console.log(pAge); // 25

//BEISPIEL-6

const person4 = {
  vorName: 'Ali',
  addresse: {
    stadt: 'Elazig',
    zip: '10001'
  }
};

// Verschachtelte Destrukturierung
const { vorName, addresse: { stadt, zip } } = person4;

console.log(vorName); // Ali
console.log(stadt); // Elazig
console.log(zip); // 10001
console.log({stadt,zip});

//BEISPIEL-7

const data = {
  title: 'Developer',
  skills: ['JavaScript', 'React', 'Node.js'],
  address: {
    stadtt: 'Berlin',
    zipp: '10115'
  }
};

// Kombination von Array- und Objekt-Destructuring
const { title, skills: [firstSkill, secondSkill], address: { stadtt, zipp } } = data;

console.log(title); // Developer
console.log(firstSkill); // JavaScript
console.log(secondSkill); // React
console.log(stadtt); // Berlin
console.log(zipp); // 10115