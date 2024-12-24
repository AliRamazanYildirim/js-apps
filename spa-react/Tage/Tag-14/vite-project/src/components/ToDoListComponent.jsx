import { useState, startTransition } from 'react';
import { useOptimistic } from 'react';
import axios from 'axios';

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");

  // Optimistischer Zustand und Updater-Funktion
  const [todos, updateTodos] = useOptimistic([], (state, newItem) => {
    switch (newItem.type) {
      case "add":
        return [...state, newItem.todo];
      case "rollback":
        return state.filter((todo) => todo.id !== newItem.tempId);
      case "update":
        return state.map((todo) =>
          todo.id === newItem.tempId ? { ...todo, id: newItem.realId } : todo
        );
      default:
        return state;
    }
  });

  const addTodoOptimistic = async () => {
    const tempId = Date.now(); // Vorläufige ID
    const optimisticTodo = { id: tempId, title: newTodo, completed: false };

    // Optimistische Aktualisierung mit startTransition umwickeln
    startTransition(() => {
      updateTodos({ type: "add", todo: optimisticTodo });
    });

    try {
      // Echte API-Anfrage
      const response = await axios.post('https://jsonplaceholder.typicode.com/todos', optimisticTodo, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) {
        // Optimistisches Element mit echter ID aktualisieren
        startTransition(() => {
          updateTodos({ type: "update", tempId, realId: response.data.id });
        });
      } else {
        // Wenn es fehlschlägt, die optimistische Aktualisierung zurücknehmen
        startTransition(() => {
          updateTodos({ type: "rollback", tempId });
        });
      }
    } catch (error) {
        console.error("Ein Fehler ist aufgetreten:", error.message);
        
        // Zeige dem Benutzer eine Fehlermeldung an
        alert("Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.");
      
        // Im Fehlerfall die optimistische Aktualisierung mit niedriger Priorität zurücknehmen
        startTransition(() => {
          updateTodos({ type: "rollback", tempId });
        });
      }      
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodoOptimistic}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;