import { create } from "zustand";

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  stockQuantity: number;
}

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface CartState {
  cartItems: CartItem[];
  addCartItem: (product: Product) => void;
  removeCartItem: (productId: string) => void;
}

export const useCartStore = create<CartState>((set) => ({
  cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]"),
  addCartItem: (product: Product) => {
    set((state) => {
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.productId === product.id
      );

      if (existingItemIndex !== -1) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex] = {
          productId: product.id,
          quantity: updatedCartItems[existingItemIndex].quantity + 1,
        };
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
        return { cartItems: updatedCartItems };
      }

      const updatedCartItems = [
        ...state.cartItems,
        { productId: product.id, quantity: 1 },
      ];
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      return { cartItems: updatedCartItems };
    });
  },
  removeCartItem: (productId: string) => {
    set((state) => {
      const updatedCartItems = state.cartItems.filter(
        (item) => item.productId !== productId
      );
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      return { cartItems: updatedCartItems };
    });
  },
}));
