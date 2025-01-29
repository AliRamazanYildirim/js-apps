import useTodoStore from "../store/todoStore";

const TodoForm = () => {
  const { input, setInput, handleSubmit } = useTodoStore();

  return (
    <form onSubmit={handleSubmit}>
      <div className="todo-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Neue Aufgabe hinzufügen..."
        />
        <button className="btn" type="submit">Ekle</button>
      </div>
    </form>
  );
};

export default TodoForm;
