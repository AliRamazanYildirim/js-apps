let x = 7;
{
    let x = 3;
    console.log(x);
}
console.log(x);

// Output: 3, 7
// Erklärung: In der ersten Zeile wird die Variable x mit dem Wert 7 initialisiert. In der zweiten Zeile wird ein Block mit einer lokalen Variable x mit dem Wert 3 erstellt. In der dritten Zeile wird der Wert der lokalen Variable x ausgegeben. In der vierten Zeile wird der Wert der globalen Variable x ausgegeben.