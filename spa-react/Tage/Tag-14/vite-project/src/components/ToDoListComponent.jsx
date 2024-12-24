import { useState, startTransition } from 'react';
import { useOptimistic } from 'react';
import axios from 'axios';

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");

  // Optimistik state ve updater fonksiyonu
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
    const tempId = Date.now(); // Geçici ID
    const optimisticTodo = { id: tempId, title: newTodo, completed: false };

    // Optimistik güncellemeyi startTransition ile sar
    startTransition(() => {
      updateTodos({ type: "add", todo: optimisticTodo });
    });

    try {
      // Gerçek API isteği
      const response = await axios.post('https://jsonplaceholder.typicode.com/todos', optimisticTodo, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) {
        // Gerçek ID ile optimistik öğeyi güncelle
        startTransition(() => {
          updateTodos({ type: "update", tempId, realId: response.data.id });
        });
      } else {
        // Başarısız olursa optimistik güncellemeyi geri al
        startTransition(() => {
          updateTodos({ type: "rollback", tempId });
        });
      }
    } catch (error) {
        console.error("Hata oluştu:", error.message);
        
        // Kullanıcıya bir hata mesajı göster
        alert("Bir hata oluştu. Lütfen tekrar deneyin.");
      
        // Hata durumunda optimistik güncellemeyi düşük öncelikli olarak geri al
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