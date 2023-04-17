import { useState } from "react";
import { CartItem, useCartStore } from "../stores/useCartStore";
import { calculateTotal } from "../utils/cartUtils";
import Success from "../components/Success";
import { Order, useCheckoutStore } from "../stores/useCheckoutStore";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import MyTextField from "../components/MyTextField";

function CheckoutPage() {
  const { cartItems } = useCartStore();
  const { createOrder, isLoading, success } = useCheckoutStore();
  const [orderData, setOrderData] = useState<Order>({
    customerName: "",
    address: "",
    phone: "",
    items: cartItems.map((item: CartItem) => ({
      productId: item.productId,
      productName: item.productName,
      price: item.productPrice,
      quantity: item.quantity,
    })),
    totalPrice: calculateTotal(cartItems),
  });

  const handleFormSubmit = async (order: Order) => {
    setOrderData({ ...order });
    await createOrder(order);
  };

  const validationSchema = Yup.object({
    customerName: Yup.string().required("The customer name is required"),
    address: Yup.string().required("The address is required"),
    phone: Yup.string().required("The phone number is required"),
  });

  if (isLoading)
    return (
      <p className="text-center text-lg text-indigo-600 animate-pulse">
        Loading...
      </p>
    );

  if (success) return <Success />;



  return (
    <div className="h-screen bg-gray-100 px-12 py-8">
      <div className="md:flex justify-center gap-4 md:px-12 w-full space-y-4 md:space-y-0">
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
          <Formik
            initialValues={orderData}
            enableReinitialize
            validationSchema={validationSchema}
            onSubmit={(values) => handleFormSubmit(values)}
          >
            {({ handleSubmit, isValid, isSubmitting, dirty }) => (
              <Form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <MyTextField
                    name="customerName"
                    placeholder="Jane Doe"
                    type="text"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="address"
                  >
                    Address
                  </label>
                  <MyTextField
                    name="address"
                    placeholder="123 Main St."
                    type="text"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <MyTextField
                    name="phone"
                    placeholder="05XX-XXX-XX-XX"
                    type="text"
                  />
                </div>
                <button
                  className={`${
                    isSubmitting || !dirty || !isValid
                      ? "btn opacity-20"
                      : "btn"
                  }`}
                  type="submit"
                >
                  Place Order
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
