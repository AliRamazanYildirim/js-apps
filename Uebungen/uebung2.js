const readline = require("readline-sync");

// function kleinsteWertFinden() {
//   let werten = [];
//   for (let i = 0; i <= 4; i++) {
//     const wert = readline.question(`Gib ${i + 1}.Wert ein:`);
//     werten.push(Number(wert));
//   }
//   let kleinsteWert = werten[0];
//   for (let i = 1; i < werten.length; i++) {
//     if (werten[i] < kleinsteWert) {
//       kleinsteWert = werten[i];
//     }
//   }
//   console.log(`Der kleinste Wert ist:${kleinsteWert}`);
// }
// kleinsteWertFinden();

// BEISPIEL-1
// const eingabe = readline.question("Gib das Wort ein:");
// function wortWiederholen(menge) {
//   for (let i = 0; i < menge; i++) {
//     console.log(eingabe);
//   }
// }
// wortWiederholen(5);


// BEISPIEL-2

// let kurzeSeite=Number(readline.question("Gib kurze Seite ein:"));
// let langeSeite=Number(readline.question("Gib lange Seite ein:"));
// function rechtsEckBerechnen(){
//   let umfang=2*(kurzeSeite+langeSeite);
//   let flaeche=kurzeSeite*langeSeite;
//   console.log(`Die Flaeche ist:${flaeche}`);
//   console.log(`Der Umfang ist:${umfang}`);
// }
// rechtsEckBerechnen();

// BEISPIEL-3

// function kopfOderZahl(){
//     let random=Math.floor(Math.random()*10);
//     if(random%2===0){
//         console.log("Kopf");
//     }
//     else console.log("Zahl");
// }
// kopfOderZahl();

// BEISPIEL-4

// function ganzZahligeTeiler(){
//     let zahl=Number(readline.question("Gib eine Zahl ein:"));
//     let teiler=[];
//     for(let i=1;i<=zahl;i++){
//         if(zahl%i===0){
//             teiler.push(i);
//         }
//     }
//     console.log(`Die ganzzahlige Teiler von ${zahl} sind:${teiler}`);
// }
// ganzZahligeTeiler();

// BEISPIEL-5
// function gesamt(){
//     let gesamt=0;
//     for(let i=0;i<arguments.length;i++){
//         gesamt+=arguments[i];
//     }
//     console.log(`Die Summe ist:${gesamt}`);
//     console.log(arguments);
// }
// gesamt(1,2,3,4,5,6,7,8,9,10);
