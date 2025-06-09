const insertionSort = (array) => {
    // Erstelle eine Kopie des Arrays, um das Original nicht zu verändern
    const arr = [...array];
    
    // Beginne mit dem zweiten Element (Index 1)
    for (let i = 1; i < arr.length; i++) {
        // Das aktuelle Element, das eingefügt werden soll
        const currentElement = arr[i];
        let j = i - 1;
        
        // Verschiebe alle größeren Elemente nach rechts
        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        // Füge das aktuelle Element an der richtigen Position ein
        arr[j + 1] = currentElement;
    }
    
    return arr;
};

// Beispiel-Verwendung
const unsortedArray = [67, 34, 23, 17, 12, 11, 99];
const sortedArray = insertionSort(unsortedArray);
console.log("Ursprüngliches Array:", unsortedArray);
console.log("Sortiertes Array:", sortedArray);