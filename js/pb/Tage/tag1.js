//! Boolean Stuktur

let userName;
let isUserName = Boolean(userName);
console.log("Existiert User?:", isUserName);

userName = "user";
console.log("User Name:", Boolean(userName));

console.log(Boolean(0)); //Output:false
console.log(Boolean(-0)); //Output:false
console.log(Boolean(0.1)); //Output:true
console.log(Boolean(0 === 0)); //Output:true
console.log(userName.length > 0); //Output:true

//?
let a;
console.log("a:", Boolean(a));

const b = "0";
console.log("b:", Boolean(b));

var x = 10 / "a";
console.log("x:", Boolean(x));

var y = "" || -2 || "JavaScript";
console.log("y:", Boolean(y));

var z = { 2: "js" };
console.log("z:", Boolean(z));

var t = "" && -2 && 'JavaScript'; 
console.log("t:", Boolean(t));

var w = false || 0; 
console.log("w:", Boolean(w));


var r = true; 
console.log("r:",Boolean(r));

const min = -10;
const max = -20;
//? Und Das ist so wichtig vergiss es nicht
const randomNumber = Math.floor(Math.random() * max + min +1);  
console.log(randomNumber); 