let a: string = "Ali";
// We create a new string by changing the first letter
a = "a" + a.slice(1);
console.log(a); // ali

/* Erklärung:
 In Zeile 1 wird eine Variable a vom Typ string erstellt und mit dem Wert "Ali" initialisiert.
 In Zeile 3 wird der Wert der Variable a durch den Wert "a" + a.slice(1) ersetzt.
 Der Wert von a.slice(1) ist "li", da die Methode slice(1) den Teilstring von a ab dem Index 1 zurückgibt.
 Der Wert von "a" + "li" ist "ali".
 Daher wird "ali" in der Konsole ausgegeben. */