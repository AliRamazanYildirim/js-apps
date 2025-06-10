const mergeSort = (array) => {
    const arr = [...array];
    
    // Zusammenführungsfunktion
    const merge = (left, right) => {
        const result = [];
        let i = 0, j = 0;
        
        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                result.push(left[i++]);
            } else {
                result.push(right[j++]);
            }
        }
        
        return result.concat(left.slice(i)).concat(right.slice(j));
    };
    
    // Hauptsortierfunktion
    const sort = (arr) => {
        if (arr.length <= 1) return arr;
        
        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);
        
        return merge(sort(left), sort(right));
    };
    
    return sort(arr);
};

// Beispiel
const unsortedArray = [67, 34, 23, 17, 12, 11, 99];
const sortedArray = mergeSort(unsortedArray);
console.log("Ursprünglich:", unsortedArray);
console.log("Sortiert:", sortedArray);