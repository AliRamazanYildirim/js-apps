const zahlen: number[] = [10, 20, 30, 40, 50];
const gefundeneZahl = zahlen.find((zahl) => zahl > 30);

console.log(gefundeneZahl); // Gibt die erste Zahl zurück, die größer als 30 ist

//Erklärung:
// In diesem Beispiel wird die Methode find() verwendet, um die erste Zahl in dem Array zu finden, die größer als 30 ist.
//Output: 40
