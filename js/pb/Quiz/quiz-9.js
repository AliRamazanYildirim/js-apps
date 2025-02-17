let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
delete numbers[4];
console.log(numbers); // [1, 2, 3, 4, empty, 6, 7, 8, 9, 10]

//Erklärung: Das Element an der Stelle 4 wird gelöscht, aber die Länge des Arrays bleibt gleich. Das Element wird nicht verschoben, sondern es wird einfach gelöscht und an der Stelle ein "empty" eingefügt.