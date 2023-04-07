import { create } from "zustand";

type Order = {
  customerName: string;
  address: string;
  phone: string;
  items: OrderItem[];
  totalPrice: number;
};

type OrderItem = {
  productId: string;
  productName: string;
  price: number;
  quantity: number;
};

type CheckoutStore = {
  order: Order;
  isLoading: boolean;
  error: string;
  createOrder: (order: Order) => Promise<void>;
  clearOrder: () => void;
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
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });
      if (response.ok) {
        set({ isLoading: false, success: true });
      } else {
        set({ isLoading: false, error: "Failed to create order" });
      }
    } catch (error) {
      set({ isLoading: false, error: "Failed to create order" });
    }
  },
  clearOrder: () => {
    set({
      order: {
        customerName: "",
        address: "",
        phone: "",
        items: [],
        totalPrice: 0,
      },
    });
  },
}));
