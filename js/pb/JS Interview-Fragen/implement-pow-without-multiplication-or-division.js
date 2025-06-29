// Multiplikation: nur mit Addition
function multiply(a, b) {
  let result = 0;
  for (let i = 0; i < b; i++) {
    result += a;
  }
  return result;
}

// Potenzieren: mit multiply b Mal multiplizieren
function pow(a, b) {
  let result = 1;
  for (let i = 0; i < b; i++) {
    result = multiply(result, a);
  }
  return result;
}

// Beispielverwendung
[ [2, 3], [3, 2] ].forEach(([a, b]) => console.log(pow(a, b)));
