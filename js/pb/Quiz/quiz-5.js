let num1 = 17;

let num2 = new Number(17);

console.log(num1 === num2); // false

//Zusammenfassend lässt sich sagen, dass num1 und num2 zwar denselben numerischen Wert haben, aber da einer eine primitive Zahl und der andere ein Number-Objekt ist, ergibt der strikte Gleichheitsvergleich false.