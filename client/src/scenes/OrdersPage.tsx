import { useEffect, useState } from "react";
import axios from "axios";
import { formatPrice } from "../utils/cartUtils";

interface Order {
  orderId: string;
  customerName: string;
  address: string;
  phone: string;
  items: OrderItem[];
  totalPrice: number;
  isDelivered: boolean;
}

interface OrderItem {
  productId: number;
  productName: string;
  price: number;
  quantity: number;
}

const OrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const { data } = await axios.get("http://localhost:5000/api/orders");
      setOrders(data);
    };
    fetchOrders();
  }, []);

  return (
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <div className="bg-white shadow-md rounded my-6 overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Order ID</th>
              <th className="py-3 px-6 text-left">Customer Name</th>
              <th className="py-3 px-6 text-left">Address</th>
              <th className="py-3 px-6 text-left">Phone</th>
              <th className="py-3 px-6 text-left">Items</th>
              <th className="py-3 px-6 text-left">Total Price</th>
              <th className="py-3 px-6 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {orders.map((order) => (
              <tr
                key={order.orderId}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {order.orderId}
                </td>
                <td className="py-3 px-6 text-left font-bold">
                  {order.customerName}
                </td>
                <td className="py-3 px-6 text-left font-bold">
                  {order.address}
                </td>
                <td className="py-3 px-6 text-left font-bold">{order.phone}</td>
                <td className="py-3 px-6 text-left">
                  <ul>
                    {order.items.map((item) => (
                      <li key={item.productId}>
                        {item.productName} x {item.quantity}
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="py-3 px-6 text-left text-lg font-bold">
                  {formatPrice(order.totalPrice)}
                </td>
                <td
                  className={`${
                    order.isDelivered
                      ? "text-green-500 py-3 px-6 text-left text-sm"
                      : "text-red-500 py-3 px-6 text-left text-sm"
                  }`}
                >
                  {order.isDelivered ? "Delivered" : "Not Delivered"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersPage;
