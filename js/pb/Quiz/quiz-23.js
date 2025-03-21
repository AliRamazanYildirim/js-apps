const removeDuplicate = (arr) => {
    return [...new Set(arr)];
}

const arr = [7, 9, 0, 9, 1, 0, 1, 2, 1, 2];
console.log(removeDuplicate(arr)); // [7, 9, 0, 1, 2]

/* Erklärung: Die Funktion entfernt Duplikate aus einem Array, indem sie das Array in ein Set konvertiert und dann das Set in ein Array konvertiert.
Das Set entfernt automatisch Duplikate, da es nur eindeutige Werte speichert.
Das Array wird dann in ein Array konvertiert, um das Ergebnis zurückzugeben.
Das Ergebnis ist ein Array ohne Duplikate.
Das Ergebnis ist [7, 9, 0, 1, 2].
Die Reihenfolge der Elemente im Ergebnis kann variieren, da Sets keine Reihenfolge beibehalten.  */