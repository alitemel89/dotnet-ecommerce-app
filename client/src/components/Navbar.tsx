import React from 'react'
import { ShoppingBagIcon } from '@heroicons/react/24/outline';

function Navbar() {
  return (
    <nav className="bg-slate-100">
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-between h-16">
        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex-shrink-0">
            <h1 className='text-2xl font-bold'>SEPHORA</h1>
          </div>
        </div>
        <div className="ml-4 flex items-center md:ml-6">
            <ShoppingBagIcon className="h-6 w-6 cursor-pointer" />
            <span className="absolute -right-2 top-4 rounded-full bg-emerald-600 w-4 h-4 
            p-0 m-0 text-white font-mono text-sm leading-tight text-center">2</span>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar