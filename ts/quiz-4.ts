// Two objects can be merged like this with TypeScript:
const obj1 = { name: "Alice", age: 25 };
const obj2 = { city: "Berlin", country: "Germany" };
const obj3 = { a:1, b:2 };
const obj4 = { b:3, c:4 };

// Merging objects using the spread operator
const mergedObj = { ...obj1, ...obj2 };

console.log(mergedObj);
// Output: { name: 'Alice', age: 25, city: 'Berlin', country: 'Germany' }

const objMerge = (obj3: object, obj4: object) => {
    return { ...obj3, ...obj4 };
}

console.log(objMerge(obj3, obj4));