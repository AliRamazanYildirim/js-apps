// Memoized Factorial Implementation
// How to use Memoization for N-th Factorial number

// Method 1: Using cache parameter (similar to Fibonacci example)
const factorialMemo = (n, cache = {}) => {
  if (n <= 1) return 1;
  if (n in cache) return cache[n];
  return cache[n] = n * factorialMemo(n - 1, cache);
};

// Method 2: Using closure-based memoization
const createMemoizedFactorial = () => {
  const cache = {};
  return function factorial(n) {
    if (n <= 1) return 1;
    if (n in cache) return cache[n];
    return cache[n] = n * factorial(n - 1);
  };
};

// Method 3: Using a general memoize function (fixed version)
function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = args.join(','); // Fix: convert args to string key
    if (key in cache) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

// Regular factorial function (for comparison)
function regularFactorial(n) {
  if (n <= 1) return 1;
  return n * regularFactorial(n - 1);
}

// Create memoized version using the general memoize function
const memoizedFactorial = memoize(regularFactorial);

// Create closure-based memoized factorial
const closureMemoFactorial = createMemoizedFactorial();

// Examples and tests
console.log('=== Memoized Factorial Examples ===');

// Method 1: Cache parameter
console.log('Method 1 - Cache parameter:');
console.log(`factorial(5) = ${factorialMemo(5)}`); // 120
console.log(`factorial(7) = ${factorialMemo(7)}`); // 5040
console.log(`factorial(10) = ${factorialMemo(10)}`); // 3628800

// Method 2: Closure-based
console.log('\nMethod 2 - Closure-based:');
console.log(`factorial(5) = ${closureMemoFactorial(5)}`); // 120
console.log(`factorial(6) = ${closureMemoFactorial(6)}`); // 720 (reuses cached values)

// Method 3: General memoize function
console.log('\nMethod 3 - General memoize function:');
console.log(`factorial(5) = ${memoizedFactorial(5)}`); // 120
console.log(`factorial(8) = ${memoizedFactorial(8)}`); // 40320

// Performance comparison
console.log('\n=== Performance Comparison ===');

// Test with larger numbers to see memoization benefits
const testValue = 15;

console.time('Regular Factorial');
for (let i = 0; i < 1000; i++) {
  regularFactorial(testValue);
}
console.timeEnd('Regular Factorial');

console.time('Memoized Factorial (Method 1)');
for (let i = 0; i < 1000; i++) {
  factorialMemo(testValue);
}
console.timeEnd('Memoized Factorial (Method 1)');

console.time('Memoized Factorial (Method 3)');
for (let i = 0; i < 1000; i++) {
  memoizedFactorial(testValue);
}
console.timeEnd('Memoized Factorial (Method 3)');

// Demonstrating cache effectiveness
console.log('\n=== Cache Effectiveness Demo ===');
const sharedCache = {};

console.log('Computing factorials with shared cache:');
console.log(`factorial(3) = ${factorialMemo(3, sharedCache)}`);
console.log(`factorial(5) = ${factorialMemo(5, sharedCache)}`); // Will reuse cached values from factorial(3)
console.log(`factorial(4) = ${factorialMemo(4, sharedCache)}`); // Will reuse cached values
console.log('Cache contents:', sharedCache);
