// Konsol gibt 'Başlangıç' aus
console.log('Başlangıç');

// setTimeout wird mit einer Verzögerung von 0 ms aufgerufen
setTimeout(() => {
    // Konsol gibt 'setTimeout 1' aus
    console.log('setTimeout 1');
}, 0);

// Ein Promise wird aufgelöst
Promise.resolve().then(() => {
    // Konsol gibt 'Promise 1' aus
    console.log('Promise 1');
}).then(() => {
    // Konsol gibt 'Promise 2' aus
    console.log('Promise 2');
    // Ein weiterer setTimeout wird mit einer Verzögerung von 0 ms aufgerufen
    setTimeout(() => {
        // Konsol gibt 'İç setTimeout' aus
        console.log('İç setTimeout');
    }, 0);
});

// Ein neues Promise wird erstellt
new Promise((resolve) => {
    // Konsol gibt 'Promise yapıcı' aus
    console.log('Promise yapıcı');
    resolve();
}).then(() => {
    // Konsol gibt 'Promise 3' aus
    console.log('Promise 3');
});

// Ein weiterer setTimeout wird mit einer Verzögerung von 0 ms aufgerufen
setTimeout(() => {
    // Konsol gibt 'setTimeout 2' aus
    console.log('setTimeout 2');
}, 0);

// Konsol gibt 'Bitiş' aus
console.log('Bitiş');