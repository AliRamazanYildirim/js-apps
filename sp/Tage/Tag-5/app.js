document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const input = document.querySelector("input[type='text']");
  const section = document.querySelector("section");
  const errorMessage = document.createElement("p");
  errorMessage.style.cssText = `
    color: red;
    display: none;
  `;
  errorMessage.innerText = "Die Aufgabe darf nicht leer sein!";
  form.appendChild(errorMessage);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputText = input.value.trim();
    if (inputText === "") {
      errorMessage.style.display = "block";
      return;
    }
    errorMessage.style.display = "none";

    addTodo(inputText);
    input.value = "";
  });

  function addTodo(text) {
    let paragraph = document.createElement("p");
    let spanText = document.createElement("span");
    let editIconSpan = document.createElement("span");
    let completeIconSpan = document.createElement("span");
    editIconSpan.innerHTML = "<i class='fa fa-pencil'></i>";
    completeIconSpan.innerHTML = "<i class='fa fa-check'></i>";
    spanText.innerText = text;
    paragraph.appendChild(spanText);
    paragraph.appendChild(editIconSpan);
    paragraph.appendChild(completeIconSpan);
    section.appendChild(paragraph);

    editIconSpan.addEventListener("click", () => {
      const newText = prompt("Aktualisiere Aufgabe:", spanText.innerText);
      if (newText !== null && newText.trim() !== "") {
        spanText.innerText = newText.trim();
      }
    });

    completeIconSpan.addEventListener("click", () => {
      paragraph.classList.toggle("completed");
    });

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "<i class='fa fa-trash'></i>";
    deleteButton.addEventListener("click", () => {
      section.removeChild(paragraph);
    });
    paragraph.appendChild(deleteButton);
  }
});