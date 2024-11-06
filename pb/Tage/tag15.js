"strict mode";
const land = "Türkei";
const smartPhone = {
  brand: "Samsung",
  model: "Galaxy S10",
  price: 799,
  [land]: "Türkiye",
  features: ["6.1-inch display", "8GB RAM", "Triple rear camera"],
  accessories: {
    charger: true,
    headphones: false,
    usbCable: true,
    case: false,
  },
};
//Auf verschachtelte Eigenschaften zugreifen
console.log(smartPhone.brand); // Samsung
console.log(smartPhone.features[1]); // 8GB RAM

smartPhone.garantie = true;
console.log(smartPhone);
console.log(smartPhone[land]);

//BEISPIEL-1
console.log(this);

function beispiel() {
  console.log(this);
}
beispiel();

//Das Schlüsselwort „this“ verweist auf das Objekt, für das die Methode aufgerufen wird.
//In diesen Methoden verweist das Schlüsselwort „this“ auf das Objekt, das die Methode aufruft.

const person1 = {
  fname: "Bob",
  greet: function () {
    function innerFunction() {
      console.log("Hello, " + this.fname); //„this“ bezieht sich hier auf das globale Objekt
    }
    innerFunction();
  },
};

person1.greet(); // "Hello, undefined"

const person2 = {
  fname: "Bob",
  greet: function () {
    const innerFunction = () => {
      console.log("Hello, " + this.fname); //Die Pfeilfunktion ruft das Schlüsselwort „this“ im Kontext der „greet“-Methode ab
    };
    innerFunction();
  },
};

person2.greet(); // "Hello, Bob"

const person3 = {
  fname: "Bob",
  greet: function () {
    const self = this;
    function innerFunction() {
      console.log("Hello, " + self.fname); //„self“ bezieht sich hier auf das „Person“-Objekt
    }
    innerFunction();
  },
};

person3.greet(); // "Hello, Bob"

const king = {
  firstName: "Ali",
  lastName: "Yildirim",
  fullName: function () {
    return `${this.firstName.toUpperCase()} ${this.lastName.toUpperCase()}`;
  },
};

console.log(king.fullName()); // ALI YILDIRIM

const king1 = {
  firstName: "elif",
  lastName: "Yildirim",
};

king1.fullName = (() =>
  `${king1.firstName.toUpperCase()} ${king1.lastName.toUpperCase()}`).bind(
  king1
);

console.log(king1.fullName()); // ELIF YILDIRIM

//BEISPIEL-2
const car = {
  marke: "Mercedes",
  farbe: "Schwarz",
};

car.func = function () {
  return `${this.marke} ist ${this.farbe}`;
};
console.log(car.func()); // Mercedes ist Schwarz

const city = {
  name: "Elazig",
  food: "Analikizli",
  describe: function () {
    return `${this.name} ist sehr schöne Stadt und ${this.food} ist so lecker"`;
  },
};

console.log(city.describe()); // Elazig ist sehr schöne Stadt und Analikizli ist so lecker

//BEISPIEL-3
const x = {
  marke: "Mercedes",
  farbe: "Schwarz",
};
const y = {
  marke: "Mercedes",
  farbe: "Schwarz",
};
console.log(x == y); //false
console.log(x.age == y.age); //true

const a = 50;
const b = 50;

console.log(a == b);

//BEISPIEL-4
let r = {
  xy: function () {
    console.log("Hallo");
  },
};
let p = {
  xy() {
    console.log("Hello");
  },
};
console.log("====");

console.log("1", x == y); //false
console.log("2", r.xy() == p.xy()); //true
r["xy"](); // "Hallo"
p["xy"](); // "Hello"