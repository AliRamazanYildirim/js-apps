var objA = {prop: 17};
var objB = objA;

objB.prop = 87;
console.log(objA); // { prop: 87 }

/* Der wichtige Punkt bei diesem Code ist, dass Objekte in JavaScript Referenztypen sind. Das bedeutet, wenn das Objekt objA der Variablen objB zugewiesen wird, verweisen objB und objA tatsächlich auf dasselbe Objekt. Daher wirken sich Änderungen, die über objB vorgenommen werden, auch auf objA aus. Folglich wird objA in der Konsole als { prop: 90 } angezeigt. */