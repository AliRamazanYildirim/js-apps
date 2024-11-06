class Person {
  // Definition von speziellen Funktionen
  #name;
  #age;

  constructor(name, age) {
    this.#name = name; // Besondere Eigenschaft
    this.#age = age;   // Besondere Eigenschaft
  }

  // Getter-Methode
  get name() {
    return this.#name;
  }

  // Setter-Methode
  set name(newName) {
    this.#name = newName;
  }

  // Getter-Methode
  get age() {
    return this.#age;
  }

  // Setter-Methode
  set age(newAge) {
    if (newAge > 0) {
      this.#age = newAge;
    } else {
      console.log("Das Alter muss eine positive Zahl sein");
    }
  }
}

// Eine Instanz der Klasse erstellen
const person = new Person("Ali", 30);

// Verwendung der Getter-Methode
console.log(person.name); // Ali

// Verwendung der Getter-Methode
person.name = "Elif";
console.log(person.name); // Elif

// Ungültiger Alterswert
person.age = -7; // Das Alter muss eine positive Zahl sein.

// Aktueller Alterswert
person.age = 25;
console.log(person.age); // 25

//BEISPIEL-1
class Car { 
    constructor (model, color) { 
        this.model = model; 
        this.color = color; 
    } 
    havingCar() { 
        console.log("Andre has VW"); 
    } 
    compliment (name, carName) { 
        return `This is a beautiful ${carName}, ${name}`; 
    } 
}

const car = new Car("VW", "black");
console.log(car.model, car.color); // VW black

car.havingCar(); // Andre has VW
console.log(car.compliment("Andre", "VW")); // This is a beautiful VW,