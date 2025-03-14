let arr1 = [];
let arr2 = [];

console.log(arr1 == arr2); // false
console.log(arr1 === arr2); // false

//Erklärung:
/*  == und === vergleichen die Referenzen von arr1 und arr2.
  Da beide Arrays unterschiedliche Referenzen haben, sind sie nicht gleich.
  */
