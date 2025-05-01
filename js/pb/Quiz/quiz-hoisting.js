console.log(a); // undefined, nicht Fehler!
var a = 5;
console.log("a=", a); // 5

var b;         // Deklaration wird nach oben "gehoben"
console.log(b); // undefined
b = 5;         // Die Zuweisung bleibt an der ursprünglichen Position
console.log("b=", b); // 5

// Beispiel mit Funktion
function hoisting() {
    console.log(c); // undefined
    var c = 5;
    console.log("c=", c); // 5
}

hoisting(); // Aufruf der Funktion


// Beispiel mit Funktion und Funktionsausdruck
function hoistingFunctionExpression() {
    console.log(sayHi); // undefined
    var sayHi = function() {
        console.log("Hi!");
    };
    console.log(sayHi); // Funktion
}
hoistingFunctionExpression(); // Aufruf der Funktion

var sayHi = function() {
  console.log("Hi!");
};

// Beispiel mit Funktion und Blockscope
function hoistingBlock() {
    if (true) {
        console.log(d); // undefined
        var d = 10;
        console.log("d=", d); // 10
    }
}
hoistingBlock(); // Aufruf der Funktion

// Beispiel mit let und const
function hoistingLet() {
    console.log(e); // ReferenceError: Cannot access 'e' before initialization
    let e = 5;
    console.log("e=", e); // 5
}
hoistingLet(); // Aufruf der Funktion

// Beispiel mit const
function hoistingConst() {
    console.log(f); // ReferenceError: Cannot access 'f' before initialization
    const f = 10;
    console.log("f=", f); // 10
}
hoistingConst(); // Aufruf der Funktion