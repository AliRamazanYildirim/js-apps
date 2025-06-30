const fib = (n, cache = {}) => {
  if (n <= 1) return n;
  if (n in cache) return cache[n];
  return cache[n] = fib(n - 1, cache) + fib(n - 2, cache);
};

console.log(fib(10)); // 55
