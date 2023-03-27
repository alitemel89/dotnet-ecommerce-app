import { useEffect } from "react";
import { useProductStore } from "../stores/useProductStore";

function ProductList() {
  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
        {products.map((product) => (
          <li key={product.id} className="bg-white rounded-lg m-4 shadow-sm shadow-pink-400 p-4">
            <h3 className="text-3xl text-slate-800 font-medium mb-2">{product.name}</h3>
            <p className="text-emerald-500 text-2xl font-extrabold marker:mb-2">${product.price.toFixed(2)}</p>
            <p className="text-gray-500 truncate">{product.description}</p>
            <p className="text-gray-500 mt-2">Category: {product.category}</p>
            <p className="text-gray-500 mt-2">
              Stock Quantity: {product.stockQuantity}
            </p>
            <button className="px-4 py-2 bg-rose-600 text-white rounded-md w-full mt-4">ADD TO CART</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
