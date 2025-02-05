const obj = {
  name: "Ali",
  age: 30,
  city: "Istanbul",
};

const jsonString = JSON.stringify(obj);
console.log(jsonString);

//!Fetch API

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    response.json();
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

const url = "https://jsonplaceholder.typicode.com/posts";
const fetching = fetch(`${url}/1`).then((response) =>
  response
    .json()
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
);

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Hata oluştu");
    }
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//BEISPIEL-1
fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => response.json())
  .then((data) => {
    const contaier = document.querySelector(".container");
    // const letzteDreiDaten= data.slice(-3);
    const dreiDaten = [data[1], data[2], data[3]];
    dreiDaten.forEach((item) => {
      const title = document.createElement("h2");
      const body = document.createElement("p");
      title.textContent = item.name;
      body.textContent = item.body;
      contaier.append(title, body);
    });
  })
  .catch((err) => {
    console.log(err);
    const error = document.createElement("h1");
    error.textContent = "Die Seite wurde nicht gefunden";
    contaier.append(error);
  });

//BEISPIEL-2

//! NASA API
const input = document.getElementById("sucheNasa");
const imageContainer = document.getElementById("imageContainer");

const fetchImage = () => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            if (data.url) {
                const image = document.createElement("img");
                image.src = data.url;
                image.alt = data.title;
                imageContainer.appendChild(image);

                const title = document.createElement("h2");
                title.textContent = data.title;
                imageContainer.appendChild(title);

                const description = document.createElement("p");
                description.textContent = data.explanation;
                imageContainer.appendChild(description);
            } else {
                console.log('No image found');
            }
        })
        .catch((err) => console.log('Fetch error: ', err));
};

input.addEventListener("focus", fetchImage);

// Daten speichern => localStorage
// BEISPIEL-1
let message = "Hello";

localStorage.setItem("example", message);

document.getElementById("p").innerText = localStorage.getItem("example");

console.log(localStorage.getItem("example")); // Hello

// BEISPIEL-2
localStorage.setItem("car", "Mercedes");

console.log(localStorage.getItem(localStorage.key(0))); // Mercedes
console.log(localStorage.getItem(localStorage.key(1))); // Hello
console.log(localStorage.getItem(localStorage.key(6))); // null
console.log(localStorage.getItem("aaa")); // null


// remove
// localStorage.removeItem("example");
// console.log(localStorage.getItem("example")); // null


// alles entfernen
// localStorage.clear();

// sessionStorage: Wenn wir einen neuen Tab öffnen oder den Browser schließen, existieren die Daten nicht mehr.
sessionStorage.setItem("color", "orange")