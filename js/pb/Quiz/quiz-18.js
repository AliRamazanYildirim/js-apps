let x = 7;
let y = x++;
let z = ++x;
console.log('x:', x, 'y:', y, 'z:', z); // x: 9 y: 7 z: 9


//Erklärung:
/*  x++ gibt den Wert von x zurück und erhöht x um 1.
 ++x erhöht x um 1 und gibt den neuen Wert von x zurück.
 Zuerst wird x um 1 erhöht, dann wird der Wert von x in y gespeichert.
 Danach wird x um 1 erhöht und der neue Wert von x in z gespeichert.
 Daher sind x und z gleich, aber y ist der vorherige Wert von x.
 */
