import { create } from 'zustand'
import axios from 'axios'

const useUserStore = create((set) => ({
  users: [],
  loading: false,
  fetchUsers: async () => {
    set({ loading: true });
    try {
      const response = await axios.get('https://randomuser.me/api/?results=10');
      set({ users: response.data.results });
    } catch (error) {
      console.error('Error fetching users:', error);
      set({ users: [] });
    } finally {
      set({ loading: false });
    }
  }
}));

export default useUserStore;