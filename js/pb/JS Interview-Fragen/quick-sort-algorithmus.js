const quickSort = (array) => {
    const arr = [...array];
    
    const sort = (arr, start = 0, end = arr.length - 1) => {
        if (start >= end) return;
        
        // Pivot auswählen und platzieren
        const pivotIndex = partition(arr, start, end);
        
        // Sortiere die linken und rechten Seiten
        sort(arr, start, pivotIndex - 1);
        sort(arr, pivotIndex + 1, end);
    };
    
    const partition = (arr, start, end) => {
        const pivot = arr[end]; // Wähle das letzte Element als Pivot aus
        let i = start - 1;
        
        for (let j = start; j < end; j++) {
            if (arr[j] <= pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]]; // Ändern
            }
        }
        
        [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]]; // Ersetze den Pivot
        return i + 1;
    };
    
    sort(arr);
    return arr;
};

// Beispiel
const unsortedArray = [67, 34, 23, 17, 12, 11, 99];
const sortedArray = quickSort(unsortedArray);
console.log("Ursprünglich:", unsortedArray);
console.log("Sortiert:", sortedArray);