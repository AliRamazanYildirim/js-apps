//JavaScript -Ereignisschleife Beispiel

//Sofortcodes
console.log(1);

// setTimeout - Makro wird dem Aufgabeschwanz hinzugefügt (dann funktioniert es)
setTimeout(() => console.log(2));

// Promise - Es wird zur Warteschlange der Micro -Mission hinzugefügt (es funktioniert vor den Makros)
Promise.resolve().then(() => console.log(3));

// SetTimeout in Promise -zuerst Promise, dann tritt SetTimeout in die Warteschlange ein
Promise.resolve().then(() => setTimeout(() => console.log(4)));

// Promise - Der Mikroauftrag wird zur Warteschlange hinzugefügt
Promise.resolve().then(() => console.log(5));

// setTimeout - Makro wird der Aufgabenwarteschlange hinzugefügt
setTimeout(() => console.log(6));

// Code, das sofort ausgeführt wird
console.log(7);

// Console-Ausgabe:1 7 3 5 2 6 4

// Erklärung:
// 1. Sofortige Ausführung von console.log(1)
// 2. Sofortige Ausführung von console.log(7)
// 3. Promise.resolve() wird sofort aufgelöst und console.log(3) wird in die Mikro-Warteschlange eingefügt
// 4. Promise.resolve() wird sofort aufgelöst und console.log(5) wird in die Mikro-Warteschlange eingefügt
// 5. setTimeout wird in die Makrowarteschlange eingefügt
// 6. setTimeout wird in die Makrowarteschlange eingefügt
// 7. console.log(2) wird aus der Makrowarteschlange ausgeführt
// 8. console.log(6) wird aus der Makrowarteschlange ausgeführt
// 9. setTimeout wird in die Makrowarteschlange eingefügt
// 10. console.log(4) wird aus der Makrowarteschlange ausgeführt