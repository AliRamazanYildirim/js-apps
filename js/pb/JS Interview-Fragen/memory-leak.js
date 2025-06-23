// Memory Leak
const badExample = () => {
    const bigData = Array(100000).fill("data");

    setInterval(() => {
        console.log("Daten:", bigData.length);
    }, 1000);
};

// Kein Memory Leak  
const goodExample = () => {
    const bigData = Array(100000).fill("data");

    const timer = setInterval(() => {
        console.log("Daten:", bigData.length);
    }, 1000);

    // Nach 5 Sekunden stoppen
    setTimeout(() => {
        clearInterval(timer);
        console.log("Timer gestoppt");
    }, 5000);
};

// Test
console.log("Starte gutes Beispiel...");
goodExample();