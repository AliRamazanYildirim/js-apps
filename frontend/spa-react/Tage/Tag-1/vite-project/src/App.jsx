import "./App.css";
import profileImage from "./assets/website-9022660_1280.png"

function App() {
  const person = {
    name: "Ali",
    age: 30,
    city: "Karlsruhe",
    jobTitle: "Software Developer",
    imageUrl: profileImage
  };
  const istRichtig = true;

  return (
    <div>
      <h1>Hallo! Ich bin ein React-App</h1>
      <img src={person.imageUrl} alt={`${person.name}'s profile`} />
      <h1>{person.name}</h1>
      <p>Ich bin {person.age} Jahre alt, lebe in {person.city} und arbeite als {person.jobTitle}.</p>
      <p className={istRichtig ? "richtig" : "falsch"}>
        {istRichtig ? "Willkommen Benutzer" : "Bitte versuche es erneut."}
      </p>
    </div>
  );
}

export default App;