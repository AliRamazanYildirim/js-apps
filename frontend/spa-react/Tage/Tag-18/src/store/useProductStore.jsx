import {create} from "zustand";

const useProductStore = create((set) => ({
  products: [],
  addProduct: (product) =>
    set((state) => ({ products: [...state.product, product] })),
  updateProduct: (id, updatedProduct) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id == id ? updatedProduct : product
      ),
    })),
  removeProduct: (id) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    })),
}));

export default useProductStore;