import useTodoStore from '../store/todoStore';

const TodoItem = () => {
  const { todos, toggleTodo, deleteTodo } = useTodoStore();

  return (
    <>
      {todos.map(todo => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>Löschen</button>
        </li>
      ))}
    </>
  );
};

export default TodoItem;