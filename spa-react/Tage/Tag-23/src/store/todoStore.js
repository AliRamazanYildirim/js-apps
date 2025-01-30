import { create } from 'zustand';

const useTodoStore = create((set, get) => ({
  todos: [],
  input: '',
  setInput: (value) => set(() => ({ input: value })),
  addTodo: (text) => set((state) => {
    const newTodo = { id: Date.now(), text, completed: false };
    console.log('Neuer Todo hinzugefügt:', newTodo); // In die Konsole drucken
    return { todos: [...state.todos, newTodo] };
  }),
  toggleTodo: (id) => set((state) => ({
    todos: state.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  })),
  deleteTodo: (id) => set((state) => ({
    todos: state.todos.filter(todo => todo.id !== id)
  })),
  handleSubmit: (e) => {
    e.preventDefault();
    if (!get().input.trim()) return;
    get().addTodo(get().input);
    set(() => ({ input: '' }));
  }
}));

export default useTodoStore;