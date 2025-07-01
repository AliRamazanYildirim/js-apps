const fact = (n, memo = {}) => {
  if (n <= 1) return 1;
  if (n in memo) return memo[n];
  return memo[n] = n * fact(n - 1, memo);
};

console.log(fact(5)); // 120
