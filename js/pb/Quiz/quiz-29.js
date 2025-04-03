const numbers = [1, 2, 3, 4, 5];

const result = numbers
  .map((x) => x * 2) // Multiply each element by two
  .filter((x) => x > 5); // Filter those greater than 5

console.log(result); // Output: [6, 8, 10]

// Erklärung:
/* 
  1. `map` multipliziert jedes Element des Arrays `numbers` mit 2.
  2. `filter` filtert die Ergebnisse und behält nur die Werte, die größer als 5 sind.
  3. Das Ergebnis ist ein neues Array, das nur die Werte [6, 8, 10] enthält.
  4. `console.log` gibt das Ergebnis in der Konsole aus.
*/