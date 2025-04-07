type Quiz = {
    name: string;
    type: string;
    title: string;
    description: string;
    question: string;
    answer: string;
    options: string[];
    correctAnswer: number;
    image: string;
    audio: string;
    video: string;
    hint: string;
    explanation: string;
};

const obj: Quiz = {
    name: "quiz-31",
    type: "quiz",
    title: "Quiz 31",
    description: "Quiz 31",
    question: "What is the capital of France?",
    answer: "Paris",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: 2,
    image: "",
    audio: "",
    video: "",
    hint: "",
    explanation: ""
};

const keysArray = Object.keys(obj);
const valuesArray = Object.values(obj);
const entriesArray = Object.entries(obj);

console.log("Keys Array:", keysArray);
console.log("Values Array:", valuesArray);
console.log("Entries Array:", entriesArray);

//Erklärung:
/*
- `Object.keys(obj)` gibt ein Array der Schlüssel des Objekts `obj` zurück.
- `Object.values(obj)` gibt ein Array der Werte des Objekts `obj` zurück.
- `Object.entries(obj)` gibt ein Array von Arrays zurück, wobei jedes innere Array aus einem Schlüssel-Wert-Paar des Objekts besteht.
- Diese Methoden sind nützlich, um die Struktur und den Inhalt eines Objekts zu analysieren oder zu manipulieren.
- `keysArray` enthält die Schlüssel des Objekts `obj`.
- `valuesArray` enthält die Werte des Objekts `obj`.
- `entriesArray` enthält die Schlüssel-Wert-Paare des Objekts `obj`.
- Diese Arrays können in verschiedenen Szenarien verwendet werden, z.B. um die Daten zu iterieren, zu filtern oder zu transformieren.
- `keysArray` ist nützlich, wenn Sie nur die Schlüssel benötigen, z.B. um zu überprüfen, ob ein bestimmter Schlüssel vorhanden ist.
- `valuesArray` ist nützlich, wenn Sie nur die Werte benötigen, z.B. um eine Liste von Werten zu erstellen.
- `entriesArray` ist nützlich, wenn Sie sowohl Schlüssel als auch Werte benötigen, z.B. um ein neues Objekt zu erstellen oder die Daten in einer bestimmten Struktur zu speichern.
- Diese Methoden sind Teil der ECMAScript 5-Spezifikation und werden in modernen JavaScript-Umgebungen unterstützt.
- Sie sind nützlich, um die Struktur und den Inhalt eines Objekts zu analysieren oder zu manipulieren.
- Diese Methoden sind Teil der ECMAScript 5-Spezifikation und werden in modernen JavaScript-Umgebungen unterstützt.
*/
             