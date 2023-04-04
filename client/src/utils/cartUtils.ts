import { CartItem } from "../stores/useCartStore";

export function formatPrice(price: number) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return formatter.format(price);
}

export const calculateTotal = (cartItems: CartItem[]) => {
  let total = 0;
  cartItems.forEach((item) => {
    total += item.quantity * item.productPrice;
  });
  return total;
};
