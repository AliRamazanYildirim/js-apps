var a = 7, b = a = typeof b;
console.log(b); // undefined    

//Erklärung: Der Code wird von rechts nach links ausgeführt. Zuerst wird der Wert von b auf den Wert von a gesetzt, der 7 ist. Dann wird der Wert von a auf den Typ von b gesetzt, der undefined ist. Da der Wert von b nicht definiert ist, wird undefined ausgegeben.

console.log('1' - - '1'); // 2

//Erklärung: Der Operator - subtrahiert zwei Operanden. Wenn einer der Operanden kein numerischer Wert ist, wird er in einen numerischen Wert umgewandelt. In diesem Fall wird der String '1' in die Zahl 1 umgewandelt. Der Operator - subtrahiert dann 1 von -1, was 2 ergibt.

