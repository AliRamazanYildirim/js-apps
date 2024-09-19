//! function declaration
function add(a, b) {
    return a + b;
}   
console.log(add(1, 2));

//! function expression
const add1 = function(a, b) {    
    return a * b;
}
console.log(add1(1, 2));

//! arrow function
const add2 = (a, b) =>  a / b;

console.log(add2(4, 2));

function calculate(a, b) {
    return a + b;
}

console.log(calculate()); //NaN

//! default parameter

function calculate1(a = 0, b = 0) {
    return a + b;
}
console.log(calculate1()); //0

//! spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

//! callback function

function calculate3(a, b, callback) {
    return callback(a, b);
}

console.log(calculate3(1, 2, add)); //3

//! higher order function
function higherOrderFunction(callback) {
    return callback(1, 2);
}

console.log(higherOrderFunction(add)); //3

//! closure
function outer() {
    let a = 1;
    function inner() {
        return a + 1;
    }
    return inner;
}
const inner = outer();
console.log(inner()); //2

//! IIFE
(function() {
    console.log("IIFE");
})();
//! immediately invoked function expression
(() => {
    console.log("IIFE");
}
)();
//! immediately invoked function expression
(() => console.log("IIFE"))();

//! currying
function multiply(a) {
    return function(b) {
        return a * b;
    }
}
console.log(multiply(2)(3)); //6

//! partial application
function multiply1(a, b) {
    return a * b;
}
const double = multiply1.bind(this, 2);
console.log(double(3)); //6

//! memoization
function memoize(fn) {
    const cache = {};
    return function(...args) {
        if (cache[args]) {
            return cache[args];
        }
        const result = fn(...args);
        cache[args] = result;
        return result;
    }
}

const memoizedAdd = memoize(add);
console.log(memoizedAdd(1, 2)); //3

//! recursion
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5)); //120

//! tail recursion
function factorial1(n, result = 1) {
    if (n === 0) {
        return result;
    }
    return factorial1(n - 1, n * result);
}

console.log(factorial1(5)); //120

//! pure function

function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); //5

//! impure function
let c = 0;
function add(a, b) {
    c = a + b;
    return c;
}
console.log(add(2, 3)); //5
console.log(c); //5

//! side effect
let d = 0;
function add(a, b) {
    d = a + b;
    return d;
}
console.log(add(2, 3)); //5
console.log(d); //5

//! immutability
const arr = [1, 2, 3];
arr.push(4);
console.log(arr); //[1, 2, 3, 4]
const newArr = [...arr];
newArr.push(5);
console.log(newArr); //[1, 2, 3, 4, 5]
console.log(arr); //[1, 2, 3, 4]
//! mutable
let obj = {
    name: "John"
};
obj.name = "Jane";
console.log(obj); //{name: "Jane"}
//! immutable
let obj1 = {
    name: "John"
};
let obj2 = {
    ...obj1,
    name: "Jane"
};  
console.log(obj1); //{name: "John"}
console.log(obj2); //{name: "Jane"}

//!Default Value

function add(a, b = 0) {
    return a + b;
}
console.log(add(1)); //1
console.log(add(1, 2)); //3

//!Destructuring
let person = {
    name: "John",
    age: 30
};
let {name, age} = person;
console.log(name); //John

function test1(a, b=20){
    console.log(a*b);
}
test1();
test1(2);
test1(2, 3);
console.log(test1(10));

//! rest parameter

function calculate2(a, b, ...args) {
    console.log(args);
    return a + b;
}
console.log(calculate2(1, 2, 3, 4, 5)); //3

function gesamt(){
    let gesamt=0;
    for(let i=0;i<arguments.length;i++){
        gesamt+=arguments[i];
    }
    console.log(arguments);
    console.log(`Die Summe ist:${gesamt}`);
}
gesamt(1,2,3,4,5,6,7,8,9,10);

function calculate3(a, b, ...args) {
    return a,b,args;
}
console.log(calculate3(1, 2, 3, 4, 5)); 

function calculate4(a, b, ...args) {
    console.log(a,b,args);
     
}
console.log(calculate4(1, 2, 3, 4, 5)); 

function calculate5(a, ...args) {
    return (a,args);
}
console.log(calculate5(true, 2, 3, 4, 5));


//!global variablen and default parameter
let b=10;
function test2(b,a=10){
    console.log(a);
}
test2();
test2(1,20);

//!function kopieren
function test3(){
    console.log("test3");
}
let test4=test3;
test4();for (let i = 0; i < 5; i++) {
  console.log('Hello world!');
}
