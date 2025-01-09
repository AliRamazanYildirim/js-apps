import {create} from "zustand";

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== id),
    })),
  total: 0,
  calculateTotal: () =>
    set((state) => ({
      total: state.cart.reduce((sum, product) => sum + product.price, 0),
    })),
}));

export default useCartStore;
