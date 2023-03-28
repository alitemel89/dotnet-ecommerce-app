import React from "react";
import {
  ShoppingBagIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

function Navbar() {
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
        <div className="flex items-center space-x-2">
          <UserCircleIcon className="h-6 w-6 cursor-pointer" />
          <p className="md:flex hidden cursor-pointer md:w-max">My Account</p>
          <span
            className="absolute right-29 top-8 rounded-full bg-red-600 w-4 h-4 
            p-0 m-0 text-white font-mono text-sm leading-tight text-center animate-bounce"
          >
          </span>
        </div>
        <div className="ml-4 flex items-center">
          <ShoppingBagIcon className="h-6 w-6 cursor-pointer" />
          <span
            className="absolute right-6 top-8 md:right-10 md:top-8 rounded-full bg-emerald-600 w-4 h-4 
            p-0 m-0 text-white font-mono font-bold text-sm leading-tight text-center"
          >
            2
          </span>
        </div>

      </div>
    </div>
  );
}

export default Navbar;
