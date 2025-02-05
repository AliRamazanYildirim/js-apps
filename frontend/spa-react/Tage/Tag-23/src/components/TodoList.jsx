import TodoItem from "./TodoItem";
import useTodoStore from '../store/todoStore';

const TodoList = () => {
  const { todos } = useTodoStore();

  return (
    <div>
      {todos.length === 0 ? (
        <p className="empty">Keine Todos vorhanden</p>
      ) : (
        <ul>
          <TodoItem />
        </ul>
      )}
    </div>
  );
};

export default TodoList;