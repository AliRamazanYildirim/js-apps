function createCounter() {
    let count = 0;
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        }
    };
}

const counterA = createCounter();
const counterB = createCounter();

console.log(counterA.increment()); // 1 
console.log(counterA.increment()); // 2
console.log(counterB.increment()); // 1
console.log(counterA.decrement()); // 1
console.log(counterB.decrement()); // 0

//Erklärung:
/*  createCounter() gibt ein Objekt zurück, das zwei Methoden enthält: increment und decrement.
  Jedes Mal, wenn increment aufgerufen wird, wird count um 1 erhöht und der neue Wert von count zurückgegeben.
  Jedes Mal, wenn decrement aufgerufen wird, wird count um 1 verringert und der neue Wert von count zurückgegeben.
  Da counterA und counterB unterschiedliche Instanzen von createCounter
  sind, haben sie jeweils ihren eigenen count-Zähler.
  */