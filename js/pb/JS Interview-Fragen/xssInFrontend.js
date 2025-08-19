// sicher: Benutzerdaten als Text hinzufügen
const el = document.getElementById('out');
el.textContent = userInput; // safe

// gefährlich: Benutzerdaten als HTML einfügen (XSS-Risiko)
el.innerHTML = userInput; // unsafe unless sanitized with DOMPurify