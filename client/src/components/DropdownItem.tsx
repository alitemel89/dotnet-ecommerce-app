import React from "react";

interface Props {
  name: string;
  description: string;
  price: number;
  quantity: number;
}

function DropdownItem({ name, description, price, quantity }: Props) {
  return (
    <div className="m-2">
      <div className="flex justify-between items-center p-2">
        <img
          src="/assets/make-up.jpg"
          alt="makeup"
          className="w-12 h-16 object-cover"
        />
        <div>
          <h3 className="text-xl uppercase font-extrabold -ml-4">{name}</h3>
          <p className="text-gray-500 -ml-4">{description}</p>
        </div>

        <p className="text-xl">{price} $</p>
      </div>
      <div className="flex justify-between px-2 py-2">
        <p className="text-gray-500">{description}</p>
        <p>Quantity: {quantity}</p>
      </div>
      <div className="flex justify-between px-2 py-2">
        <p className="text-gray-500">Delivery</p>
        <p>3.99 $</p>
      </div>
    </div>
  );
}

export default DropdownItem;
