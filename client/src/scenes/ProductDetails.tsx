import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductStore } from "../stores/useProductStore";

function ProductDetails() {
  const { product, fetchSingleProduct } = useProductStore();
  const { id } = useParams();

  useEffect(() => {
    if (id) fetchSingleProduct(id);
  }, [id, fetchSingleProduct]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return <div>{product.name}</div>;
}

export default ProductDetails;
