function outer() {
    let count = 0;
    return function inner() {
        count++;
        return count;// den Wert von count zurückgeben
    };
}

const increment = outer();
console.log(increment()); // 1