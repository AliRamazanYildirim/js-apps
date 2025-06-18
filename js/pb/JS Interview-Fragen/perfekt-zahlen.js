// Perfekte Zahl Funktion (Perfect Number Function)
const istPerfekt = (n) => {
  if (n < 2) return false;

  let summe = 1; // 1 ist immer ein Teiler jeder Zahl

  const wurzel = Math.floor(Math.sqrt(n));
  
  for (let i = 2; i <= wurzel; i++) {
    if (n % i === 0) {
      const teiler = n / i;
      summe += i;
      if (i !== teiler) summe += teiler;
    }
  }

  return summe === n;
};

// Testfälle
[6, 28, 496, 8128, 12, 20, 1].forEach(num =>
  console.log(`istPerfekt(${num}) ➜ ${istPerfekt(num)}`)
);
