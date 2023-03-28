import React, { useState } from "react";
import {
  ShoppingBagIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import DropdownItem from "./DropdownItem";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center space-x-8 px-12 h-24">
        <div>
          <h1 className="text-3xl font-bold tracking-wider">SEPHORA</h1>
        </div>

        {/* SearchBar */}
        <div className="relative w-4/5 mx-auto">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
          </span>

          <input
            type="text"
            placeholder="Search"
            className="w-4/5 first-line:w-full bg-slate-200
            rounded-full py-4 pl-10 pr-4 placeholder-gray-400 outline-none"
          />
        </div>

        {/* Shops and Services */}
        <div className="flex items-center space-x-2">
          <MapPinIcon className="h-6 w-6 cursor-pointer" />
          <p className="md:flex hidden cursor-pointer md:w-max">
            Shops & Services
          </p>
        </div>

        {/* My Account */}
        <div className="flex items-center space-x-2">
          <UserCircleIcon className="h-6 w-6 cursor-pointer" />
          <p className="md:flex hidden cursor-pointer md:w-max">My Account</p>
          <span
            className="absolute right-29 top-8 rounded-full bg-red-600 w-4 h-4 
            p-0 m-0 text-white font-mono text-sm leading-tight text-center animate-bounce"
          ></span>
        </div>

        {/* CartIcon */}
        <div
          className="ml-4 flex items-center"
          onMouseLeave={() => setOpen(false)}
        >
          <ShoppingBagIcon
            className="h-6 w-6 cursor-pointer"
            onMouseOver={() => setOpen(true)}
          />
          <span
            className="absolute right-6 top-8 md:right-10 md:top-8 rounded-full bg-emerald-600 w-4 h-4 
            p-0 m-0 text-white font-mono font-bold text-sm leading-tight text-center"
          >
            2
          </span>
          <div
            className={`absolute z-50 top-10 bg-gray-50 right-16 w-96 py-2 mt-2 rounded-lg shadow-xl ${
              open ? "block" : "hidden"
            }`}
          >
            {/* CartItems */}
            <DropdownItem
              name="Sephora Collection"
              description="Size up mascara"
              price={32.99}
              quantity={2}
            />
            <button
              className="bg-rose-600 px-4 py-2 
            rounded-md text-white flex text-center text-xl my-2 mx-auto"
            >
              Complete Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
