const obj: Record<string, string> = {};
obj[String(true)] = "Yes";
obj[String(1)] = "Number";
obj["1"] = "String";

console.log(obj);

/*  Output: 
 {
   'true': 'Yes',
   '1': 'Number',
   '1': 'String'
 } */
/*  Erklärung:
 - obj[String(true)] = "Yes";: true wird in den String "true" umgewandelt.
 - obj[String(1)] = "Number";: 1 wird in den String "1" umgewandelt.
 - obj["1"] = "String";: 1 wird in den String "1" umgewandelt.
 - Da "1" bereits existiert, wird der Wert überschrieben.
 - Das Ergebnis ist ein Objekt mit den Werten "Yes", "Number" und "String", wobei "1" den Wert "String" hat.
 - Beachte, dass die Ausgabe in der Konsole möglicherweise nicht die gleiche Reihenfolge wie im Code hat, da Objekte in JavaScript keine garantierte Reihenfolge haben. */