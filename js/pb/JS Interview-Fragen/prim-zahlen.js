// Gegebene Primzahl-Funktion
const istPrimzahl = n => {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  
  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
};

// Tests
console.log(istPrimzahl(13)); // true
console.log(istPrimzahl(14)); // false
console.log(istPrimzahl(21)); // false
console.log(istPrimzahl(22)); // false
console.log(istPrimzahl(23)); // true
console.log(istPrimzahl(2));  // true
console.log(istPrimzahl(1));  // false
console.log(istPrimzahl(0));  // false