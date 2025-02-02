setTimeout(() => {
    console.log('Timeout 1');
}, 0);

Promise.resolve().then(() => {
    console.log('Promise 1');
});

//Mikroaufgaben (wie Promise) werden immer vor Makroaufgaben (wie setTimeout) ausgeführt.