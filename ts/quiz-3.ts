console.log([1].concat([1])); // [1, 1]
console.log([1].concat([])); // [1]
console.log([1] + "abc"); // 1abc

//Erklärung:
// concat() gibt ein neues Array zurück, das aus dem ursprünglichen Array und anderen Arrays und/oder Werten besteht, die an dieses Array angehängt wurden
// Wenn ein Array und ein Wert an concat() übergeben werden, wird der Wert als einzelnes Element an das Array angehängt
// Wenn ein Array und ein anderes Array an concat() übergeben werden, wird das zweite Array an das erste Array angehängt
// Wenn ein Array und ein String an concat() übergeben werden, wird der String an das Array angehängt
// Wenn ein Array und ein Objekt an concat() übergeben werden, wird das Objekt als einzelnes Element an das Array angehängt
