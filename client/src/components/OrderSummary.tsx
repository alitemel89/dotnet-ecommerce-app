import React from "react";
import { useCartStore } from "../stores/useCartStore";
import { calculateTotal } from "../utils/cartUtils";
import { XMarkIcon } from "@heroicons/react/24/solid";

function OrderSummary() {
  const { cartItems, removeCartItem } = useCartStore();

  return (
    <div className="md:mx-28 px-12 py-8 flex gap-8">
      <div className="bg-white shadow-md rounded-md p-4 md:p-8 flex-1 md:w-2/3">
        {cartItems.map((item) => (
          <div
            key={item.productId}
            className="flex items-center mb-4 border-b-2 border-indigo-100"
          >
            <img
              src={`/assets/${item.productCategory
                .replace(/\s+/g, "-")
                .toLowerCase()}.jpg`}
              alt={item.productCategory}
              className="w-24 h-36 mr-4 object-cover"
            />
            <div>
              <p className="text-lg font-medium">{item.productName}</p>
              <p className="text-gray-500">
                {item.quantity} x {item.productPrice}
              </p>
              <p className="text-slate-500 py-2 pr-4">
                {item.productDescription}
              </p>
              <div>
                <button
                  onClick={() => removeCartItem(item.productId)}
                  className="px-2 py-1 bg-slate-500 text-white text-sm rounded flex items-center"
                >
                  Remove
                  <XMarkIcon className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
            <p className="ml-auto font-medium text-xl">
              ${item.quantity * item.productPrice}
            </p>
          </div>
        ))}
      </div>

      <div className="md:w-1/3 shadow-md rounded-md p-4 md:p-8 h-min bg-white">
        <h2 className="text-2xl font-medium mb-4 uppercase text-center">
          Order Summary
        </h2>
        <div className="flex justify-between text-gray-600">
          <p>Delivery</p>
          <p>Free</p>
        </div>
        <div className="flex items-center mt-8">
          <p className="text-2xl font-medium mr-auto">Total</p>
          <p className="text-2xl font-medium">
            ${calculateTotal(cartItems).toFixed(2)}
          </p>
        </div>
        <button className="btn">Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default OrderSummary;
