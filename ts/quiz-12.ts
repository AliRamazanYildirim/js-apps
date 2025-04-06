const twoSum = (nums: number[], target: number): [number, number] | null => {
    const complements: Record<number, number> = {};

    nums.forEach((num, i) => {
        const complement = target - num;
        if (complements[complement] !== undefined) {
            return [complements[complement], i];
        }
        complements[num] = i;
    });

    return null;
};

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]
console.log(twoSum([3, 3], 6)); // Output: [0, 1]
console.log(twoSum([1, 2, 3], 7)); // Output: null

//Erklärung:
/* 
- Die Funktion `twoSum` nimmt ein Array von Zahlen `nums` und eine Zielzahl `target` entgegen.
- Sie erstellt ein leeres Objekt `complements`, um die Indizes der Zahlen zu speichern.
- Für jede Zahl im Array wird die Differenz zwischen `target` und der Zahl berechnet.
- Wenn die Differenz bereits im `complements`-Objekt vorhanden ist, gibt die Funktion die Indizes der beiden Zahlen zurück.
- Andernfalls wird die aktuelle Zahl und ihr Index im `complements`-Objekt gespeichert.
- Wenn keine zwei Zahlen gefunden werden, die die Zielzahl ergeben, gibt die Funktion `null` zurück.
*/