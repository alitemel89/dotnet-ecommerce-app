import axios from "axios";
import { create } from "zustand";

export interface IProduct {
  id: string;
  name: string;
  price: number;
  image: string
  description: string;
  category: string;
  stockQuantity: number;
  details: string;
}

export interface ProductState {
  product: IProduct | null;
  products: IProduct[];
  fetchProducts: () => Promise<void>;
  fetchSingleProduct: (id: string ) => Promise<void>;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  product: null,
  fetchProducts: async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/products");
      set({ products: response.data });
    } catch (error) {
      console.error(error);
    }
  },
  fetchSingleProduct: async (id: string ) => {
    const response = await fetch(`http://localhost:5000/api/products/${id}`);
    const product = await response.json();
    set({ product });
  },
}));
