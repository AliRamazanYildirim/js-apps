const arr = [1, , 3, 4];
console.log(arr.map(x =>x*2));

// In JavaScript wird ein Array mit einer Lücke erstellt, wenn ein Komma ohne Wert vorhanden ist. In diesem Fall wird die Lücke als undefined interpretiert. Die map()-Methode wird jedoch nicht auf leere Elemente angewendet, daher wird die Ausgabe [2, , 6, 8] sein.