let url="https://www.google.com/";
let kursName="Der komplette Web Anwendungskurs"; 

console.log(`Zeichenlaenge der Url:${url.length}`);
console.log(`Zeichenlaenge des Kurses:${kursName.length}`);

console.log(`Der Kurs besteht aus ${kursName.split(" ").length} Wörter.`);

console.log(`Die URL beginnt mit „https“: ${url.startsWith("https")}`);

console.log(`Die URL endet mit „.com“: ${url.endsWith(".com")}`);

//! 1.Weg
console.log(`Enthaelt der Kurs das Wort „Web“?: ${kursName.includes("Web")}`);

//! 2.Weg
if(kursName.indexOf("Web")>-1)
{
    console.log("Der Kurs enthaelt das Wort Web");
}
else console.log("Der Kurs enthaelt nicht das Wort Web");

console.log(url+kursName.toLocaleLowerCase().replaceAll(" ","-"));

console.log(isNaN(Number("10")));

console.log(typeof Number("10"));


