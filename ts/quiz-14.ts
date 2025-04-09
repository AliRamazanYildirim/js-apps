const calculateGCD = (a: number, b: number): number => {
    if (!b) return a;
    return gcd(b, a % b);
}

console.log(calculateGCD(10, 5)); // Output: 5

//Erklärung:
// Der größte gemeinsame Teiler (GCD) ist die größte positive ganze Zahl, die zwei oder mehr Zahlen ohne Rest teilt.
// In diesem Beispiel wird die Funktion `calculateGCD` verwendet, um den GCD von 10 und 5 zu berechnen.
// Die Funktion verwendet den Euklidischen Algorithmus, um den GCD zu finden.
// Der Algorithmus funktioniert, indem er wiederholt den Rest der Division der größeren Zahl durch die kleinere Zahl berechnet,
// bis der Rest 0 ist. Der GCD ist dann die letzte nicht-null Zahl.
// In diesem Fall ist der GCD von 10 und 5 gleich 5, da 5 die größte Zahl ist, die beide Zahlen ohne Rest teilt.
// Der Code gibt den GCD von 10 und 5 aus, was 5 ist.
// Der Euklidische Algorithmus ist ein effizienter Weg, um den GCD zu berechnen.
// Er ist besonders nützlich, wenn die Zahlen sehr groß sind.