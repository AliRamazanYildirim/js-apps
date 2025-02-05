import "./App.css";
import Beilspiel from "./components/Beilspiel";
import Person from "./components/Person";

function App() {
  //BEISPIEL-1
  const titleBook = "Wie lernt man React";
  const price = 100;

  //BEISPIEL-2
  const person = {
    name: "Max",
    age: 28,
  };
  const hobbies = ["Schwimmen", "Fussball", "Lesen"];

  //BEISPIEL-3: map
  const filme = [
    { id: 1, name: "Harry Potter", rating: 8.1 },
    { id: 2, name: "Herr der Ringe", rating: 8.8 },
    { id: 3, name: "Star Wars", rating: 8.6 },
    { id: 4, name: "Matrix", rating: 8.7 },
    { id: 5, name: "Inception", rating: 8.8 },
    { id: 6, name: "Interstellar", rating: 8.6 },
    { id: 7, name: "Der Pate", rating: 9.2 },
    { id: 8, name: "Der Herr der Fliegen", rating: 6.9 },
    { id: 9, name: "Der Hobbit", rating: 7.8 },
    { id: 10, name: "Der Marsianer", rating: 8.0 },
  ];
  return (
    <div>
      {/* //BEISPIEL-1 */}
      <Beilspiel x={titleBook} price={price} />

      {/* //BEISPIEL-2 */}
      <Person p={person.name} age={person.age} hobbies={hobbies} />

      {/* //BEISPIEL-3 */}
      <h1>Meine Lieblingsfilme</h1>
      <ul>
        {filme.map((film) => (
            <li key={film.id}>
            <h3>{film.name}</h3>
            <p>{film.rating}</p>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
