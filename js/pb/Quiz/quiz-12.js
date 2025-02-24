let x = 1;

function f() {
    let x;
    console.log(x);
}

f(); //! undefined
console.log(x); //!


//Erklärung: In der Funktion f wird die Variable x deklariert, aber nicht initialisiert. Da es sich um eine lokale Variable handelt, wird sie nicht automatisch mit dem Wert der globalen Variable x initialisiert. Daher ist der Wert von x in der Funktion f undefined.