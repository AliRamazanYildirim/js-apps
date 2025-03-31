var x = 7;
{
    var x =17;
    console.log(x);
}
console.log(x); 

// Output: 17
// Erkärung:  
/*  In der ersten Zeile wird x mit dem Wert 7 deklariert.
 Dann wird ein Block geöffnet, in dem x mit dem Wert 17 überschrieben wird.
 Innerhalb des Blocks wird dann x mit dem Wert 17 ausgegeben.
 Danach wird der Block geschlossen und x wird wieder auf 7 zurückgesetzt.
 Das bedeutet, dass die Ausgabe 17 ist.
 Der Grund dafür ist, dass var eine Funktion-Scoped Variable ist.
 Das bedeutet, dass sie innerhalb der Funktion oder des Blocks sichtbar ist, in dem sie deklariert wurde.
 Wenn eine Variable mit dem gleichen Namen innerhalb eines Blocks deklariert wird,
 wird die äußere Variable überschrieben.
 Das bedeutet, dass die innere Variable die äußere Variable "verdeckt".
 In diesem Fall ist die innere Variable x mit dem Wert 17 sichtbar,
 während die äußere Variable x mit dem Wert 7 nicht sichtbar ist.
 Das bedeutet, dass die Ausgabe 17 ist.
 Wenn die innere Variable x nicht deklariert worden wäre,
 würde die Ausgabe 7 sein. */