const linearSearch = (array, target) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i; // Gefunden!
        }
    }
    return -1; // Es gibt nicht
};

// Test
const arr = [5, 2, 8, 1, 9];
console.log(linearSearch(arr, 8)); // 2