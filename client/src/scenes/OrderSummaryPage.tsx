import OrderSummary from "../components/OrderSummary";
import ProductList from "../components/ProductList";
import { useCartStore } from "../stores/useCartStore";

function OrderSummaryPage() {
  const { cartItems } = useCartStore();

  return (
    <div className="bg-slate-100 h-screen">
      {cartItems.length > 0 ? (
        <OrderSummary />
      ) : (
        <>
          <h3 className="text-lg text-center bg-slate-50 rounded-md p-10">
            Your Cart is Empty
          </h3>
          <ProductList />
        </>
      )}
    </div>
  );
}

export default OrderSummaryPage;
