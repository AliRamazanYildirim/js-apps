const nums: number[] = [1, 2, 3, 4, 5];
const [x, ...y] = nums;
console.log(x, y);

/* Erklärung:
 In diesem Beispiel wird die Destrukturierung verwendet, um das erste Element des Arrays nums in die Variable x zu speichern und den Rest des Arrays in die Variable y zu speichern.
 Das Ergebnis ist:
 x = 1 und y = [2, 3, 4, 5]
 Das bedeutet, dass x den Wert 1 hat und y ein Array mit den Werten 2, 3, 4 und 5 ist. */