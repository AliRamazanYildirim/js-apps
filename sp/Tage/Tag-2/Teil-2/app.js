window.addEventListener("resize", function () {
  console.log("Fenstergröße geändert");
});
//BEISPIEL-1
const button = document.getElementById("myButton");
button.addEventListener("click", () => {
  button.style.cssText = `background : green; color : lightblue`;
});
// OR

function clickHandler() {
  button.style.cssText = `background : green; color : lightblue`;
}
//BEISPIEL-2
const myDiv = document.getElementById("myDiv1");
myDiv.addEventListener("mouseenter", () => {
  myDiv.style.cssText = `background : hotpink; color : white`;
});
myDiv.addEventListener("mouse leave", () => {
  myDiv.style.cssText = `background : pink; color : black`;
});

//BEISPIEL-3
const myInput = document.getElementById("myInput");
myInput.addEventListener("input", () => {
  console.log(myInput.value);
});