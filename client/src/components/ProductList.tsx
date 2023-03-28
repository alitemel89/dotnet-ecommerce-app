import { FC, useEffect } from "react";
import { useProductStore } from "../stores/useProductStore";
import Product from "./Product";

function ProductList() {
  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="bg-slate-100">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
      {products?.map((product) => (
        <Product key={product.id} product={product} />
      ))}
      </ul>

    </div>
  );
}

export default ProductList;
