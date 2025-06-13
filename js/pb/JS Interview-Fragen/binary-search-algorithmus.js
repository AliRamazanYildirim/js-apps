const binarySearch = (array, target) => {
    let left = 0;
    let right = array.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (array[mid] === target) return mid;
        
        if (array[mid] < target) {
            left = mid + 1; // Nach rechts gehen
        } else {
            right = mid - 1; // Nach links gehen
        }
    }
    return -1;
};

// Test (muss in Reihenfolge sein!)
const sortedArr = [1, 2, 5, 8, 9];
console.log(binarySearch(sortedArr, 9)); // 4