let x = {
    a:undefined,
    b:null
};

console.log(JSON.stringify(x)); // {"b":null}


//? Im JSON-Format werden undefinierte Eigenschaften entfernt. Daher gibt es im JSON-Format nur die Eigenschaft b.