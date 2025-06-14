const interpolationSearch = (array, target) => {
    let left = 0;
    let right = array.length - 1;
    
    while (left <= right && target >= array[left] && target <= array[right]) {
        // Rate mal, wo es sein könnte
        const pos = left + Math.floor(
            ((target - array[left]) * (right - left)) / 
            (array[right] - array[left])
        );
        
        if (array[pos] === target) return pos;
        
        if (array[pos] < target) {
            left = pos + 1;
        } else {
            right = pos - 1;
        }
    }
    return -1;
};

// Test (sollte regelmäßig geordnet sein!)
const evenArr = [10, 20, 30, 40, 50];
console.log(interpolationSearch(evenArr, 30)); // 2