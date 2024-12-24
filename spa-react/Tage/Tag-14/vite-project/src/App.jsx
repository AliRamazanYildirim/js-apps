import './App.css'
import ToDoListComponent from './components/ToDoListComponent'
import TransitionComponent from './components/TransitionComponent'
import UseOptimisticComponent from './components/UseOptimisticComponent'

function App() {
  return (
    <>
     <TransitionComponent></TransitionComponent><br />
     <UseOptimisticComponent></UseOptimisticComponent><br />
     <ToDoListComponent></ToDoListComponent>
    </>
  )
}

export default App
