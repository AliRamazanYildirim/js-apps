import {create} from 'zustand';

const useProductStore = create((set) => ({
  currentPage: 1,
  totalPages: 1,
  products: [],
  setCurrentPage: (page) => set({ currentPage: page }),
  setTotalPages: (total) => set({ totalPages: total }),
  setProducts: (products) => set({ products }),
}));

export default useProductStore;