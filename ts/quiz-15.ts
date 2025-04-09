// deepClone.ts
type Clonable = Record<string, any> | any[];

export function deepClone<T extends Clonable>(obj: T): T {
  if (obj === null || typeof obj !== 'object') return obj;

  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item)) as T;
  }

  const clone: any = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key] as Clonable);
    }
  }

  return clone;
}

// Test
const original = {
  name: "Chris",
  meta: {
    age: 30,
    hobbies: ["code", "design"],
    address: { city: "Berlin", zip: 12345 }
  }
};

const copy = deepClone(original);

console.log(copy);
console.log(copy !== original); // true
console.log(copy.meta !== original.meta); // true
