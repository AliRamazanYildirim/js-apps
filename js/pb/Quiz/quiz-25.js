const obj = {};
obj[true] = "Yes"
obj[1] = "Number"
obj["1"] = "String"

console.log(obj);

/* Erklärung: 
 true wird zu 1, daher wird der Wert von obj[true] und obj[1] überschrieben
 obj[1] = "Number" bleibt bestehen
 obj["1"] = "String" bleibt bestehen
 Das Ergebnis ist:
{ '1': 'String', true: 'Yes' } */