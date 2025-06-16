// Gegebene Tribonacci-Funktion (Summe der letzten 3 Zahlen)
const tribonacci = n => {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;
  return tribonacci(n-1) + tribonacci(n-2) + tribonacci(n-3);
};

// Prüft ob eine Zahl eine Tribonacci-Zahl ist
function istTribonacci(zahl) {
  let i = 0;
  while (tribonacci(i) < zahl) {
    i++;
  }
  return tribonacci(i) === zahl;
}

// Tests
console.log(istTribonacci(4)); // true (0,1,1,2,4,...)
console.log(istTribonacci(5)); // false
console.log(istTribonacci(7)); // true
console.log(istTribonacci(8)); // false
console.log(istTribonacci(13)); // true
console.log(istTribonacci(24)); // true
console.log(istTribonacci(25)); // false

// Zusätzlich: Die ersten 15 Tribonacci-Zahlen anzeigen
console.log("\nDie ersten 15 Tribonacci-Zahlen:");
for (let i = 0; i < 15; i++) {
  console.log(`T(${i}) = ${tribonacci(i)}`);
}