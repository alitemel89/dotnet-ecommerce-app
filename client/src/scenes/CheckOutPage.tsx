import { useState } from "react";
import { CartItem, useCartStore } from "../stores/useCartStore";
import { calculateTotal } from "../utils/cartUtils";
import Success from "../components/Success";
import { useCheckoutStore } from "../stores/useCheckoutStore";


function CheckoutPage() {
  const { cartItems } = useCartStore();
  const { createOrder, isLoading, success } = useCheckoutStore();
  const [customerName, setCustomerName] = useState("");
  const [surname, setSurname] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const items = cartItems.map((item: CartItem) => ({
      productId: item.productId,
      productName: item.productName,
      price: item.productPrice,
      quantity: item.quantity,
    }));
    await createOrder({
      customerName,
      address,
      phone,
      items,
      totalPrice: calculateTotal(cartItems),
    });
  };

  if (success) return <Success />


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Checkout
          </h2>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Order Summary</h3>
          {cartItems.map((item) => (
            <div key={item.productId} className="flex mb-4">
              <div className="ml-3 flex-1">
                <h4 className="font-bold">{item.productName}</h4>
                <p>
                  {item.quantity} x {item.productPrice}
                </p>
              </div>
              <div className="text-right">
                ${item.quantity * item.productPrice}
              </div>
            </div>
          ))}
          <div className="border-t border-gray-300 pt-4 mb-4">
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span>${calculateTotal(cartItems)}</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Shipping Address</h3>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
                leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="address"
              >
                Address
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
                leading-tight focus:outline-none focus:shadow-outline"
                id="address"
                placeholder="123 Main St"
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="city"
              >
                City
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
                leading-tight focus:outline-none focus:shadow-outline"
                id="city"
                type="text"
                placeholder="New York"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="state"
              >
                State
              </label>
              <input className="shadow" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
