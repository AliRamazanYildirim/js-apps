console.log(NaN === NaN); // Output: false

//Erklärung:
// NaN ist ein spezieller Wert in JavaScript, der "Not a Number" bedeutet.
// Es wird verwendet, um anzuzeigen, dass eine mathematische Operation nicht zu einem gültigen Zahlenwert geführt hat.

console.log(Number.isNaN(NaN)); // Output: true

/* Erklärung:
 Number.isNaN() ist eine Methode, die überprüft, ob der übergebene Wert NaN ist.
 Im Gegensatz zu NaN === NaN gibt Number.isNaN() true zurück, wenn der Wert NaN ist.
 Das bedeutet, dass Number.isNaN() eine zuverlässige Methode ist, um zu überprüfen, ob ein Wert NaN ist.
 In JavaScript gibt es auch die Funktion isNaN(), die jedoch nicht so zuverlässig ist wie Number.isNaN().
 isNaN() kann auch andere Werte als NaN zurückgeben, z.B. undefined oder null.
 Daher ist es besser, Number.isNaN() zu verwenden, um sicherzustellen, dass der Wert tatsächlich NaN ist. */