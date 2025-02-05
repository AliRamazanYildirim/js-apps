import { create } from 'zustand';

const useUserStore = create((set) => ({
  users: [],
  fetchUsers: async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    set({ users: data });
  },
}));

export default useUserStore;