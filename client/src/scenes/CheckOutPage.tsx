import { useState } from "react";
import { CartItem, useCartStore } from "../stores/useCartStore";
import { calculateTotal } from "../utils/cartUtils";
import Success from "../components/Success";
import { useCheckoutStore } from "../stores/useCheckoutStore";
import * as Yup from "yup";

function CheckoutPage() {
  const { cartItems } = useCartStore();
  const { createOrder, isLoading, success } = useCheckoutStore();
  const [customerName, setCustomerName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e: any) => {
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


  const validationSchema = Yup.object({
    customerName: Yup.string().required("The customer name is required"),
    address: Yup.string().required("The address is required"),
    phone: Yup.string().required("The phone number is required"),
  });

  if (isLoading) return <p>Loading...</p>

  if (success) return <Success />;

  return (
    <div className="h-screen bg-gray-100 px-12 py-8">
      <div className="md:flex justify-center gap-4 px-12 w-full">
        <div className="bg-white p-6 rounded-lg shadow-md md:w-1/3">
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
        <div className="bg-white rounded-lg p-6 shadow-md md:w-1/2 w-full">
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
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
                leading-tight focus:outline-none focus:shadow-outline"
                id="city"
                type="text"
                placeholder="0555-XXX-XX-XX"
              />
            </div>
            <button className="btn">Place Order</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
