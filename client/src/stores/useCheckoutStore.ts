import axios from "axios";
import { create } from "zustand";

export type Order = {
  customerName: string;
  address: string;
  phone: string;
  items: OrderItem[];
  totalPrice: number;
};

export type OrderItem = {
  productId: string;
  productName: string;
  price: number;
  quantity: number;
};

export type CheckoutStore = {
  order: Order;
  isLoading: boolean;
  error: string;
  createOrder: (order: Order) => Promise<void>;
  success: boolean;
};

export const useCheckoutStore = create<CheckoutStore>((set) => ({
  order: {
    customerName: "",
    address: "",
    phone: "",
    items: [],
    totalPrice: 0,
  },
  isLoading: false,
  error: "",
  success: false,
  createOrder: async (order: Order) => {
    try {
      set({ isLoading: true, error: "" });
      const response = await axios.post(
        "http://localhost:5000/api/orders",
        order
      );
      if (response.data) {
        set({ isLoading: false, success: true, order: response.data });
      } else {
        set({ isLoading: false, error: "Failed to create order" });
      }
    } catch (error) {
      set({ isLoading: false, error: "Failed to create order" });
    }
  },
}));
