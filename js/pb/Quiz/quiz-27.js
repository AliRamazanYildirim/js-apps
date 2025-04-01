const testScope = () => {
    if(true){
        var a = 1;
        let b = 2;
        const c = 3;
    }
    console.log(a); // 1
    // console.log(b); // ReferenceError: b is not defined
    // console.log(c); // ReferenceError: c is not defined
}

testScope();

//Erklärung: 
/*  In der Funktion testScope() wird eine Variable a mit dem Wert 1 deklariert,
    die mit var deklariert wurde, und ist daher im gesamten Funktionsbereich sichtbar.
    Dann werden zwei weitere Variablen b und c mit den Werten 2 und 3 deklariert,
    die mit let und const deklariert wurden und nur innerhalb des Blocks sichtbar sind.
    Wenn wir versuchen, b und c außerhalb des Blocks zu protokollieren,
    erhalten wir einen ReferenceError, weil sie nicht definiert sind.
    Das bedeutet, dass die Ausgabe 1 ist. */