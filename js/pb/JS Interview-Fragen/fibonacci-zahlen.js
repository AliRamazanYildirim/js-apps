// Gegebene Fibonacci-Funktion
const fibonacci = n => n <= 1 ? n : fibonacci(n-1) + fibonacci(n-2);

// Prüft ob eine Zahl eine Fibonacci-Zahl ist
function istFibonacci(zahl) {
  let i = 0;
  while (fibonacci(i) < zahl) {
    i++;
  }
  return fibonacci(i) === zahl;
}

// Tests
console.log(istFibonacci(13)); // true
console.log(istFibonacci(14)); // false
console.log(istFibonacci(21)); // true
console.log(istFibonacci(22)); // false
