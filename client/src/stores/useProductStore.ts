import axios from "axios";
import { create } from "zustand";

export interface IProduct {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  stockQuantity: number;
}

export interface ProductState {
  products: IProduct[];
  fetchProducts: () => Promise<void>;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  fetchProducts: async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/products");
      set({ products: response.data });
    } catch (error) {
      console.error(error);
    }
  },
}));
