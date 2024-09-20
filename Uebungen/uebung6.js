const readline=require("readline-sync");

//! Task-3
const startsWithThe = (string) => {
    return string.toLowerCase().startsWith("the");
  };
  const string=readline.question("Gib ein wert ein:");
  console.log("==========Task-3========");
  console.log(startsWithThe(string)); 