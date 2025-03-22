const fetchData = async (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data retrieved successfully!");
    }, 2000);
  });
};

const main = async () => {
  console.log("Data is being retrieved...");
  const data = await fetchData();
  console.log(data);
};

// Usage:
main();
// Output:
// Fetching data...
// (2 seconds later)
// Data successfully retrieved!

// Erklärung: fetchData ist eine asynchrone Funktion, die ein Promise zurückgibt. In main wird fetchData aufgerufen und auf das Ergebnis gewartet. Wenn fetchData das Promise resolved, wird das Ergebnis in data gespeichert und ausgegeben. Da fetchData 2 Sekunden dauert, wird "Data is being retrieved..." ausgegeben, dann 2 Sekunden gewartet und schließlich "Data retrieved successfully!" ausgegeben.