import React from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../stores/useCartStore";
import { IProduct } from "../stores/useProductStore";

interface Props {
  product: IProduct;
}

function Product({ product }: Props) {
  const { addCartItem } = useCartStore();

  return (
    <li key={product.id} className="bg-white rounded-lg m-4 shadow-md p-4">
      <img
        src={`/assets/${product.category
          .replace(/\s+/g, "-")
          .toLowerCase()}.jpg`}
        alt="productCategory"
        className="w-full h-48 object-cover"
      />
      <h3 className="text-3xl text-slate-800 font-medium mt-2">
        {product.name}
      </h3>
      <p className="text-emerald-500 text-2xl font-extrabold marker:mb-2 my-4">
        ${product.price.toFixed(2)}
      </p>
      <p className="truncate text-xl font-semibold">
        {product.description}
      </p>
      <p className="text-gray-500 mt-2">Category: {product.category}</p>

      <p className="text-gray-500 mt-2">
        Stock Quantity: {product.stockQuantity}
      </p>
      <Link to={`/products/${product.id}`}>
      <button onClick={() => addCartItem(product)} className="px-4 py-2 bg-rose-600 text-white rounded-md w-full mt-4">
        PRODUCT DETAILS
      </button>
      </Link>
    </li>
  );
}

export default Product;
