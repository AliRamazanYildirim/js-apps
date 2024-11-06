const readline = require('readline');

class Frage {
    constructor(frageText, antwortmöglichkeiten, richtigeAntwort) {
        this.frageText = frageText;
        this.antwortmöglichkeiten = antwortmöglichkeiten;
        this.richtigeAntwort = richtigeAntwort;
    }

    ueberpruefeAntwort(antwort) {
        return antwort === this.richtigeAntwort;
    }
}

const fragen = [
    new Frage("Welches ist das JavaScript-Paketverwaltungstool?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Frage("Was ist das Hauptziel von Node.js?", { a: "Frontend-Entwicklung", b: "Backend-Entwicklung", c: "Datenbankverwaltung" }, "b"),
    new Frage("Welche Sprache wird von Node.js verwendet?", { a: "Java", b: "Python", c: "JavaScript" }, "c"),
    new Frage("Welches Framework wird häufig mit Node.js verwendet?", { a: "React", b: "Angular", c: "Express" }, "c"),
    new Frage("Was ist npm?", { a: "Ein Paketmanager", b: "Ein Framework", c: "Eine Programmiersprache" }, "a"),
    new Frage("Welches Modul wird verwendet, um HTTP-Server in Node.js zu erstellen?", { a: "http", b: "fs", c: "path" }, "a"),
    new Frage("Wie installiert man ein Paket global mit npm?", { a: "npm install <paketname>", b: "npm install -g <paketname>", c: "npm install --save <paketname>" }, "b"),
    new Frage("Welches Kommando startet eine Node.js-Anwendung?", { a: "node <dateiname>", b: "npm start <dateiname>", c: "node run <dateiname>" }, "a"),
    new Frage("Welche Methode wird verwendet, um eine Datei asynchron zu lesen?", { a: "fs.readFileSync", b: "fs.readFile", c: "fs.read" }, "b"),
    new Frage("Welches Schlüsselwort wird verwendet, um ein Modul in Node.js zu importieren?", { a: "import", b: "include", c: "require" }, "c")
];

class Quiz {
    constructor(fragen) {
        this.fragen = fragen;
        this.frageIndex = 0;
        this.richtigeAntworten = 0;
    }

    bringFrage() {
        return this.fragen[this.frageIndex];
    }

    naechsteFrage() {
        this.frageIndex += 1;
    }
}

const quiz = new Quiz(fragen);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function starteQuiz() {
    if (quiz.frageIndex < quiz.fragen.length) {
        const frage = quiz.bringFrage();
        rl.question(
            `${quiz.frageIndex + 1}-${frage.frageText}\n` +
            `a: ${frage.antwortmöglichkeiten.a}\n` +
            `b: ${frage.antwortmöglichkeiten.b}\n` +
            `c: ${frage.antwortmöglichkeiten.c}\n` +
            'Ihre Antwort: ',
            (antwort) => {
                if (frage.ueberpruefeAntwort(antwort)) {
                    console.log("Richtig!");
                    quiz.richtigeAntworten += 1;
                } else {
                    console.log("Falsch!");
                }

                quiz.naechsteFrage();
                starteQuiz();
            }
        );
    } else {
        console.log(`Das Quiz ist vorbei! Anzahl der richtigen Antworten: ${quiz.richtigeAntworten}`);
        rl.close();
    }
}

starteQuiz();