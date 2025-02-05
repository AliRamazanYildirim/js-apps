import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Todo App</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;