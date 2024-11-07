// BEISPIEL-1
let section = document.querySelector("#mySection");

// Erstellen und anhängen h4
let h4 = document.createElement("h4");
h4.textContent = "I'm happy now 😅";
// OR
// h4.innerText = "I'm happy now 😅";

section.appendChild(h4);
// OR
// section.append(h4);

// Artikel erstellen und anhängen
let article = document.createElement("article");
article.innerHTML = "<p>Today is cold</p>";

section.appendChild(article);
// OR
// section.append(article);

// BEISPIEL-2
let container = document.getElementById("container");

const newColor = document.createElement("li");
newColor.innerText = "Red";

const list1 = container.querySelector("#color-list");
list1.append(newColor);

// append vs. appendChild 
// parent.append(x, y); // Funktioniert
// parent.appendChild(x, y); // ERROR

// list1.append("text"); // works
// list1.appendChild("text"); // ERROR

// BEISPIEL-3
const meineListe = document.getElementById("meineListe");
meineListe.append("🍎");
meineListe.append("🍌");
meineListe.append("🍇");
meineListe.append("🍉");
meineListe.append("🍎", "🍌", "🍇", "🍉");

// BEISPIEL-4
const myDiv = document.getElementById("myDiv");
myDiv.setAttribute("class", "first");
// myDiv.removeAttribute("class");

// BEISPIEL-5
document.querySelector("#myInput").setAttribute("type", "date");

// BEISPIEL-6
const myButton = document.getElementById("myElement");
myButton.classList.add("class1", "class2");
