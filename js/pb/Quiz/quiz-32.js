const gcd = (a,b) => {
    if(!b) return a;
    return gcd(b, a % b);
}

console.log(gcd(10, 5)); // Output: 5

//Erklärung:
// Der größte gemeinsame Teiler (ggT) von zwei Zahlen ist die größte Zahl, die beide Zahlen ohne Rest teilt.
// In diesem Fall ist der ggT von 10 und 5 gleich 5, da 5 die größte Zahl ist, die sowohl 10 als auch 5 teilt.
// Die Funktion gcd() nimmt zwei Parameter a und b entgegen.
// Wenn b gleich 0 ist, gibt die Funktion a zurück, da der ggT in diesem Fall a ist.
// Andernfalls wird die Funktion rekursiv mit a und dem Rest von a geteilt durch b aufgerufen.
// Die Funktion gibt schließlich den ggT zurück.