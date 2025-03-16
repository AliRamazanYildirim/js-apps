console.log(typeof null); // object
console.log(null instanceof Object); // false

//Erklärung: null ist ein primitiver Wert und kein Objekt. typeof null gibt "object" zurück, weil JavaScript einen Fehler in der Implementierung hat, der seit den Anfängen von JavaScript besteht. Der instanceof Operator gibt false zurück, weil null kein Objekt ist.

