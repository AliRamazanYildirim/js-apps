const bubbleSort = (array) => {
    // Erstelle eine Kopie des Arrays, um das Original nicht zu verändern
    const arr = [...array];
    
    let swapped;
    
    do {
        // Zu Beginn jedes Durchlaufs auf false setzen
        swapped = false;
        
        // Durch das Array iterieren, beginnend bei Index 1
        for (let i = 1; i < arr.length; i++) {
            // Vergleich mit dem vorherigen Element
            if (arr[i - 1] > arr[i]) {
                // Elemente tauschen
                [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
                swapped = true;
            }
        }
        // Durchläufe wiederholen, bis keine Vertauschungen mehr stattfinden
    } while (swapped);
    
    return arr;
};

// Beispiel-Verwendung
const unsortedArray = [67, 34, 23, 17, 12, 11, 99];
const sortedArray = bubbleSort(unsortedArray);
console.log("Ursprüngliches Array:", unsortedArray);
console.log("Sortiertes Array:", sortedArray);