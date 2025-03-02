console.log('Start');

setTimeout(() => {
    console.log('Timeout 1');
    Promise.resolve().then(() => console.log('Promise in Timeout'));
}, 0);

Promise.resolve().then(() => {
    console.log('Promise 1');
    setTimeout(() => console.log('Timeout in Promise'), 0);
});

console.log('End');

//Erklärung: Der Code wird von oben nach unten ausgeführt. Zuerst wird 'Start' ausgegeben. Dann wird setTimeout() aufgerufen, der eine Verzögerung von 0 ms hat. setTimeout() wird in den Event-Queue verschoben und die Ausführung wird fortgesetzt. Dann wird Promise.resolve() aufgerufen, der eine Mikroaufgabe erstellt. Die Mikroaufgabe wird in die Mikroaufgabenwarteschlange verschoben und die Ausführung wird fortgesetzt. Dann wird 'End' ausgegeben. Dann wird die Mikroaufgabe ausgeführt und 'Promise 1' wird ausgegeben. Dann wird setTimeout() in der Mikroaufgabenwarteschlange ausgeführt und 'Timeout in Promise' wird ausgegeben. Dann wird setTimeout() in der Event-Queue ausgeführt und 'Timeout 1' wird ausgegeben. Dann wird die Mikroaufgabe in der Event-Queue ausgeführt und 'Promise in Timeout' wird ausgegeben.

// Ausgabe:
/* 
Start
End
Promise 1
Timeout 1
Promise in Timeout
Timeout in Promise 
*/