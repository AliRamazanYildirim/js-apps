// Using Promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched');
        }, 2000);
    });
}

fetchData().then(data => {
    console.log(data);
}).catch(error => {
    console.error(error);
});

// Using Async/Await
async function fetchDataAsync() {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

fetchDataAsync();

// Output: Data fetched
//         Data fetched

//! Erklärung: Die Funktion fetchData gibt ein Promise zurück, das nach 2 Sekunden aufgelöst wird. Die Funktion fetchDataAsync ist eine asynchrone Funktion, die das Ergebnis des Promises mit await abruft. Die Funktion fetchDataAsync wird aufgerufen und gibt das Ergebnis des Promises aus. Da das Promise nach 2 Sekunden aufgelöst wird, wird der Text 'Data fetched' zweimal ausgegeben.