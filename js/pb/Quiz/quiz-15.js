var a = 7, b = a = typeof b;
console.log(b); // undefined    

//Erklärung: Der Code wird von rechts nach links ausgeführt. Zuerst wird der Wert von b auf den Wert von a gesetzt, der 7 ist. Dann wird der Wert von a auf den Typ von b gesetzt, der undefined ist. Da der Wert von b nicht definiert ist, wird undefined ausgegeben.
