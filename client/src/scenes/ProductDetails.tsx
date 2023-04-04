import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductStore } from "../stores/useProductStore";
import { formatPrice } from "../utils/cartUtils";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import { useCartStore } from "../stores/useCartStore";

function ProductDetails() {
  const { product, fetchSingleProduct } = useProductStore();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addCartItem } = useCartStore();

  const handleQuantityChange = (event: any) => {
    const newQuantity = parseInt(event.target.value);
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    if (id) fetchSingleProduct(id);
  }, [id, fetchSingleProduct]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="md:mx-28 px-12 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Product Image */}
        <div className="bg-white">
          <img
            src={`/assets/${product.category
              .replace(/\s+/g, "-")
              .toLowerCase()}.jpg`}
            alt={product.category}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="p-4">
          <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
          <h2 className="text-xl font-medium mb-2">{product.category}</h2>
          <p className="text-gray-700 text-base mb-4">{product.description}</p>
          <p className="text-2xl font-bold mb-4">
            {formatPrice(product.price)}
          </p>
          <div className="flex space-x-2 items-center">
            <button onClick={decrementQuantity}>
              <MinusIcon className="w-6 h-6 cursor-pointer" />
            </button>

            <input
              className="mx-2 border text-center w-8"
              type="text"
              value={quantity}
              onChange={handleQuantityChange}
            />
            <button onClick={incrementQuantity}>
              <PlusIcon className="w-6 h-6 cursor-pointer" />
            </button>
          </div>
          <button className="btn" onClick={() => addCartItem(product, quantity)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
