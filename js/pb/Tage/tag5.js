console.log(true + false);

console.log(Number(true) + Number(false));

console.log(NaN === NaN);

console.log([1, 2, 3] > null);

console.log("nummer" + 17 + 7);

console.log(["x", "y"] == "x,y");

console.log(["x", "y"].toString() === "x,y");

console.log("foo" + +"bar");

console.log("true" == true);

console.log(null == ""); // da null nur gleich sich selbst und undefiniert ist //Result= false

console.log(0 || "0" && {}); // || Operator gibt den ersten gefundenen wahren Wert zurück, && Operator gibt den ersten gefundenen falschen Wert zurück
                            //Wenn der &&-Operator keinen falschen Wert findet, gibt er den zuletzt gefundenen Wert zurück. //Ergebnis={}

console.log(["a"] > null);

//! Nutzung von Template Literals

let userName="Ali";
let DOMAIN="ary.org";

let email=`${userName}@${DOMAIN}`;

console.log(`Willkommen ${userName} Ihre Mail: ${email} 
Akteulle Uhrzeit: ${new Date().getHours()}`);

