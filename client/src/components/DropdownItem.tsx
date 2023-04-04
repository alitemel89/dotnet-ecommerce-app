import React from "react";

interface Props {
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
}

function DropdownItem({ name, description, price, quantity, category }: Props) {
  return (
    <div>
      <div className="hidden md:flex flex-col m-2 border-b-2 border-gray-200 p-4">
        <div className="p-2 flex items-center mr-auto">
          <img
            src={`/assets/${category.replace(/\s+/g, "-").toLowerCase()}.jpg`}
            alt="makeup"
            className="w-12 h-16 object-cover"
          />
          <div className="ml-4">
            <h3 className="text-xl uppercase font-extrabold">{name}</h3>
            <p className="text-gray-500 truncate">{description.slice(0, 40)}</p>
          </div>
        </div>

        <div className="flex justify-between items-center px-2 py-2">
          <p>Quantity: {quantity}</p>
          <p className="text-xl">{price} $</p>
        </div>
      </div>
    </div>
  );
}

export default DropdownItem;
