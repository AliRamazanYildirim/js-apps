const jumpSearch = (array, target) => {
    const jump = Math.floor(Math.sqrt(array.length));
    let step = jump;
    let prev = 0;
    
    // Finde heraus, in welchem Block es sich befindet
    while (array[Math.min(step, array.length) - 1] < target) {
        prev = step;
        step += jump;
        if (prev >= array.length) return -1;
    }
    
    // Suche in diesem Block einzeln
    while (array[prev] < target) {
        prev++;
        if (prev === Math.min(step, array.length)) return -1;
    }
    
    if (array[prev] === target) return prev;
    return -1;
};

// Test (muss in Reihenfolge sein!)
const arr3 = [1, 3, 5, 7, 9, 11, 13];
console.log(jumpSearch(arr3, 7)); // 3