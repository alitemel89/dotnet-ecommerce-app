import { useEffect } from "react";
import { useProductStore } from "../stores/useProductStore";
import Product from "./Product";
import { ClimbingBoxLoader } from "react-spinners";

function ProductList() {
  const { products, fetchProducts, isLoading } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  if (isLoading) return <ClimbingBoxLoader color="#000" className="mx-auto" />;

  return (
    <div className="bg-slate-100">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
        {products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
