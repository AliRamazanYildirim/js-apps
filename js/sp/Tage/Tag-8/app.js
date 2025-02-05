const myElement = document.querySelector('#title');
myElement.innerHTML = 'Hallo Welt';

console.log('Ich bin Programmierer');
setTimeout(() => {
    console.log('Ich bin ein Timer');
}, 2000);
console.log('Ich bin ein weiterer Programmierer');


document.querySelector("button").addEventListener("click", () => {
    const ul = document.querySelector("ul");
    fetch("laender.txt")
      .then((res) => res.json())
      .then((data) => {
        const el = data.map((item) => `<li>${item.name}</li>`);
        ul.innerHTML = el.join("");
      })
      .catch((error) => console.error("Please try again", error));
  });

  const checkNumber = (number) => {
  return new Promise((resolve, reject) => {
    if (number > 0) {
      resolve('Die Zahl ist positiv.');
    } else {
      reject('Die Zahl ist nicht positiv.');
    }
  });
}

// Verwendung von Promise
checkNumber(5)
  .then(message => {
    console.log(message); // "Die Zahl ist positiv."
  })
  .catch(error => {
    console.error(error); // Dies wird in diesem Fall nicht funktionieren
  });

checkNumber(-3)
  .then(message => {
    console.log(message); // Dies wird in diesem Fall nicht funktionieren
  })
  .catch(error => {
    console.error(error); // "Die Zahl ist nicht positiv."
  });