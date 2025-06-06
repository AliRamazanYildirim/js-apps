const selectionSort = (array) => {
    // Erstelle eine Kopie des Arrays, um das Original nicht zu verändern
    const arr = [...array];
    
    // Durch das Array iterieren
    for (let i = 0; i < arr.length - 1; i++) {
        // Annahme: das aktuelle Element ist das kleinste
        let minIndex = i;
        
        // Finde das kleinste Element im verbleibenden Array
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        
        // Tausche das gefundene Minimum mit dem ersten Element
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    
    return arr;
};

// Beispiel-Verwendung
const unsortedArray = [67, 34, 23, 17, 12, 11, 99];
const sortedArray = selectionSort(unsortedArray);
console.log("Ursprüngliches Array:", unsortedArray);
console.log("Sortiertes Array:", sortedArray);