//BEISPIEL-1
const meinUl = document.getElementById("#bs1");
const meinLi = meinUl.querySelectorAll(".myClass");
console.log(meinLi);
console.log(meinLi[0].textContent);

//BEISPIEL-2
const eElementKind = meineDiv.firstElementChild;
console.log(eElementKind);

const fElementKind = meineDiv.firstChild;
console.log(fElementKind);

//BEISPIEL-3
const spanElement = document.querySelector("span");

//NodeList
const nodePrev = spanElement.previousSibling;
console.log(nodePrev);

const elementPrev = spanElement.previousElementSibling;
console.log(elementPrev);

//BEISPIEL-4
const waehleDiv = document.querySelectorAll(
  "#container > p:nth-of-type(2), #container > span"
);
console.log(waehleDiv);

//BEISPIEL-5
const elementPrevious =
  document.getElementById("zweite").previousElementSibling.innerText;
console.log(elementPrevious);
const lezteElement =
  document.getElementById("zweite").nextElementSibling.innerText;
console.log(lezteElement);
const ulElement = document.querySelector("#meineListe");
const findeLeztzeElement = ulElement.lastElementChild.innerText;
console.log(findeLeztzeElement);

//BEISPIEL-6
const button = document.querySelector("#btn");
console.log(button);
const schliessenDiv = button.closest("div");
schliessenDiv.style.background = "red";

//BEISPIEL-7
const liste = document.querySelectorAll("li");
liste.forEach((item) => {
  if (item.matches(".class")) {
    console.log(item.textContent);
  }
});

//BEISPIEL-8
const sport = document.querySelector("#sport");
console.log(sport);
console.log(sport.firstElementChild);
console.log(sport.firstChild);

//Node
sport.childNodes[3].style.background = "red";

//Element
sport.children[2].style.background = "green";

console.log(sport.childNodes);
console.log(sport.children);
console.log(sport.childNodes[3]);

//BEISPIEL-9
const parentEl = document.getElementById("parent");
const parentChilds = parentEl.children;
console.log(parentChilds); // HTML Collection (3) [p, p, pl // HTML Collection => cannot use forEach, but you can use array. from()
// const x = Array. from (parentEl.children)
for (let i = 0; i < parentChilds.length; i++) {
  console.log(parentChilds[i].textContent);
}
console.log(parentChilds[2].textContent); // child3

//BEISPIEL-10
const xy = document.querySelectorAll(".myDivv");
console.log(xy);
xy[3].style.background = "pink";

//BEISPIEL-11
const findParent = document.querySelector(".second").parentElement.nodeName;
 console.log(findParent); // UL 
 const findParent2 = document.querySelector(".third").parentElement.parentElement.nodeName; 
 console.log(findParent2); // BODY I