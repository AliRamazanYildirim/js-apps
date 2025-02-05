import './App.css'
import Kunden from './components/Kunden'
import ronaldo from './assets/cristiano-ronaldo-8002334_640.png'

function App() {
  const users = [
    {
      id:1,
      name: 'John Doe',
      age: 25,
      email: 'dsadadad@gmail.com',
      imageUrl: ronaldo
    },
    {
      id:2,
      name: 'Jane Doe',
      age: 24,
      email: 'dsadasdad@gmail.com'
    }
  ]
  return (
    <>
    <Kunden fName={users[0].name} />
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.age}</p>
          <p>{user.email}</p>
        </div>
      ))}
      <img src={users[0].imageUrl} alt="" />
    </>
  )
}

export default App
