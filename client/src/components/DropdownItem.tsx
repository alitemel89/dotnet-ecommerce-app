import React from "react";

interface Props {
  name: string;
  description: string;
  price: number;
  quantity: number;
  details: string;
}

function DropdownItem({ name, description, price, quantity, details }: Props) {
  return (
    <div>
      <div className="hidden md:flex flex-col m-2">
        <div className="p-2 flex justify-between">
          <img
            src="/assets/make-up.jpg"
            alt="makeup"
            className="w-12 h-16 object-cover"
          />
          <div className="-ml-8">
            <h3 className="text-xl uppercase font-extrabold">{name}</h3>
            <p className="text-gray-500">{description}</p>
          </div>

          <p className="text-xl">{price} $</p>
        </div>

        <div className="flex justify-between px-2 py-2">
          <p className="text-gray-500 w-32 truncate">{details}</p>
          <p>Quantity: {quantity}</p>
        </div>
        <div className="flex justify-between px-2 py-2">
          <p className="text-gray-500">Delivery</p>
          <p>3.99 $</p>
        </div>
      </div>
      <button
        className="btn px-2"
      >
        Complete Shopping
      </button>
    </div>
  );
}

export default DropdownItem;
