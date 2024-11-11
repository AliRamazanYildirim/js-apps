// Events

// Browser Events => load - unload - scroll - resize
window.addEventListener("resize", function () {
    console.log("RESIZE📏!!!!");
  });
  
  window.addEventListener("scroll", function () {
    console.log("SCROLLED☝!!!!");
  });
  
  window.addEventListener("load", function () {
    console.log("LOADED⌛!!!!");
  });
  
  window.addEventListener("unload", function () {
    console.log("UNLOADED✋!!!!");
  });
  
  // EventListener
  // SYNTAX => target.addEventListener("eventType", callbackFunction);
  
  // BEISPIEL-1: click
  // selecting
  const button = document.getElementById("myButton");
  
  button.addEventListener("click", () => {
    button.style.cssText = `background: green; color: lightblue`;
  });
  
  // Oder
  
  function clickHandler() {
    button.style.cssText = `background: green; color: lightblue`;
  }
  
  button.addEventListener("click", clickHandler);
  
  // BEISPIEL-2: mouseenter mouseleave
  // selecting
  const myDiv = document.getElementById("myDiv1");
  
  myDiv.addEventListener("mouseenter", () => {
    myDiv.style.cssText = `background:hotPink; color:white`;
  });
  
  myDiv.addEventListener("mouseleave", () => {
    myDiv.style.cssText = `background:pink; color:black`;
  });
  
  // BEISPIEL-3: keydown - keyup
  const myInput = document.getElementById("myInput");
  
  myInput.addEventListener("keyup", function (e) {
    console.log("you pressed", e.key);
    console.log(e);
    myInput.style.cssText = `background: lightblue`;
  });
  
  // try with keydown
  
  // KEYBOARD EVENTS:
  // keydown => Taste wird gedrückt
  // keyup => Taste wird losgelassen
  // keypress => wenn die Taste gedrückt und losgelassen wird
  
  // MOUSE EVENTS:
  // click - dblclick
  
  // resize (Ohne HTML)
  window.addEventListener("resize", () => {
    let width = window.innerWidth;
    let height = window.innerHeight;
    console.log(`New width is => ${width} and new height is => ${height}`);
  });
  
  // BEISPIEL-4: resize
  window.addEventListener("resize", () => {
    let width = window.innerWidth;
    let font = width / 20;
    let message = (document.getElementById("test").style.fontSize = font + "px");
    console.log(message);
  });
  
  // BEISPIEL-5: Add & Remove eventListener
  let btn1 = document.getElementById("myButton1");
  
  function clickHandler2() {
    console.log("****CLICKED****");
  }
  
  btn1.addEventListener("click", clickHandler2);
  
  btn1.removeEventListener("click", clickHandler2);
  
  // BEISPIEL-5.1: removeEventListener (Wir können eventListener nur einmal verwenden)
  let btn2 = document.getElementById("myButton2");
  
  function removeHandler() {
    console.log("🖱");
  
    btn2.removeEventListener("click", removeHandler);
    console.log("REMOVED!!!!!!!!!!!");
  }
  
  btn2.addEventListener("click", removeHandler);
  
  // BEISPIEL-6: DOMContentLoaded
  // DOMContentLoaded => es wartet auf => Videos, Bilder, Skripte
  // DOMContentLoaded => wartet nur auf HTML-Dokument
  
  document.addEventListener("DOMContentLoaded", () => {
    let y = document.getElementById("myD");
    setTimeout(() => {
      y.textContent = "Completed!!!!!!!!🍻";
    }, 5000);
    // 5000 => means 5sec
    // OR
    // y.textContent = "Completed!!!!!!!!🍻";
  });
  
  // BEISPIEL-7: event
  const button3 = document.querySelector("#myButton3");
  
  function clickTest(event) {
    console.log("Event Object:", event);
    console.log("Event Type:", event.type);
    console.log("Event Target:", event.target);
  }
  
  button3.addEventListener("click", clickTest);
  
  // BEISPIEL-8: form
  const form = document.querySelector("#myForm");
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Sent!🎊");
  });
  
  // BEISPIEL-8.1
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    // Zielelement mit ID / mit Punktnotation oder Klammernotation ansprechen
    let nameValue = event.target.elements.myName.value;
    let emailValue = event.target.elements["myEmail"].value;
  
    // target element mit name 
    let nameValueName = event.target.elements.fullName.value;
    let emailValueEmail = event.target.elements["fullName"].value;
  
  
    console.log(`Welcome ${nameValue}`);
    console.log(`Your E-Mail is ${emailValue}`);
  
    // element.value 
    let input = form.querySelectorAll("input");
    let myUser = input[0].value;
    console.log("++++++++", myUser)
  
    let myEmail = input[1].value;
    console.log("++++++++", myEmail)
  });
  