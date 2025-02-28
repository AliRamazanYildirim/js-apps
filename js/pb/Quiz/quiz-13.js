function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariable);
    };
}

const newFunction = outerFunction('outside');
newFunction('inside');

// Output: Outer Variable: outside
//         Inner Variable: inside

//! Erklärung: Die Funktion outerFunction gibt eine Funktion zurück, die die übergebene Variable ausgibt. Die Funktion newFunction wird mit dem Argument 'outside' aufgerufen und gibt die übergebene Variable aus. Anschließend wird die Funktion newFunction mit dem Argument 'inside' aufgerufen und gibt die übergebene Variable aus.

