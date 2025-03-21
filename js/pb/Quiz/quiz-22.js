const findSecondHighest = (arr) => {
    const sortedArr = arr.sort((a, b) => b - a);
    return sortedArr[1];
}

const arr = [12, 35, 1, 10, 34, 1];
console.log(findSecondHighest(arr)); // 34

//Erklärung: Die Funktion sortiert das Array in absteigender Reihenfolge und gibt das zweite Element des sortierten Arrays zurück. Das zweite Element ist das zweithöchste Element im ursprünglichen Array.
