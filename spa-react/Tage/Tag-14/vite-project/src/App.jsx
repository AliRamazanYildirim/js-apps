import './App.css'
import ToDoListComponent from './components/ToDoListComponent'
import TransitionComponent from './components/TransitionComponent'
import UseOptimisticComponent from './components/UseOptimisticComponent'
import WebSocketComponent from './components/WebSocketComponent'

function App() {
  return (
    <>
     <TransitionComponent></TransitionComponent><br />
     <UseOptimisticComponent></UseOptimisticComponent><br />
     <ToDoListComponent></ToDoListComponent>
     <WebSocketComponent></WebSocketComponent>
    </>
  )
}

export default App
