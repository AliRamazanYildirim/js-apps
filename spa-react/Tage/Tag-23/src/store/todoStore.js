import { create } from 'zustand';

const useTodoStore = create((set, get) => ({
  todos: [],
  input: '',
  setInput: (value) => set(() => ({ input: value })),
  addTodo: (text) => set((state) => ({
    todos: [...state.todos, { id: Date.now(), text, completed: false }]
  })),
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