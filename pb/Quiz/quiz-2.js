const fname = "Ali";
age = 30;

console.log(delete fname); // Output: false
console.log(delete age); // Output: true


const obj = { fname: "Ali", age: 30 };

console.log(delete obj.fname); // true
console.log(obj); // { age: 30 }
console.log(delete obj.fname); // true

/* - delete kann nur zum Löschen von Objekteigenschaften verwendet werden. Variablen oder -Funktionsdeklarationen können nicht mit delete gelöscht werden. Im Strict-Modus sind solche Operationen - durch strengere Regeln geschützt und Sie erhalten einen SyntaxError. */