import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FiShoppingCart, FiHome, FiGrid, FiSearch,FiMenu,FiX} from "react-icons/fi";

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)       // mobile menu open hai ya close, ye track krega
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Website logo */}
        <Link 
        to="/"
        className="flex items-center gap-2"
        >
          {/* Logo Icon */}
        <div className="w-5 h-5 bg-black text-white rounded-lg flex items-center justify-center font-bold">
          M
        </div>

        {/* Store Name */}
        <span classname="text-xl font-bold text-gray-900">
          My Store
        </span>
        </Link>

        <div className="hidden md:flex items-center border-gray-300 rounded-full px-4 py-2 w-72">     {/*Navbar Search bar*/}
          <FiSearch className="text-gray-500"/>       {/*Search Icon*/}

          <input
          type="text"
          placeholder="Search products"
          className="ml-2 w-full outline-none text-sm"
          />

        </div>

        <div className=" hidden md:flex items-center gap-8">               { /*Navigation Links */}

        <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-black transition">
        <FiHome/> 
        <span>Home</span>
        </Link>

        <Link to="/products" className="flex items-center gap-2 text-gray-600 hover:text-black transition">
        <FiGrid/>
        <span>Products</span>
        </Link>

        <Link to="/cart" className=" relative flex items-center gap-2 text-gray-600 hover:text-black transition">
        <FiShoppingCart/>
        <span>Cart</span> 
        <span className="absolute -top-3 -right-4 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          0 
        </span> 
        </Link>


        {/* Login */}
        <Link
        to="/login"
        className="px-4 py-2 border border-gray-900 rounded-lg text-sm font-medium hover:bg-gray-900 hover:text-white transition"
        >
          Login
        </Link>
          
          </div>

          {/* Mobile menu button */}
          <button
          onClick={()=> setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-2xl"
          >
            {/* Menu open hai -> X icon
                Menu close hai -> hamburger icon */}

                {isMenuOpen ? <FiX/> : <FiMenu/> }
          </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
          <div className="md:hidden border-t bg-white px-6 py-4">
            <div className="flex flex-col gap-4">
              {/* Mobile home */}
              <Link
              to="/"
              onClick={()=> setIsMenuOpen(false)}
              className="flex items-center gap-3 text-gray-700 hover:text-black"
              >
                <FiHome/>
                <span>Home</span>
              </Link>

              {/* Mobile products */}
              <Link
              to="/products"
              onClick={()=> setIsMenuOpen(false)}
              className="flex items-center gap-3 text-gray-700 hover:text-black"
              >
                <FiGrid/>
                <span>Products</span>
              </Link>

              {/* Mobile cart */}
              <Link
              to="/cart"
              onClick={()=> setIsMenuOpen(false)}
              className="flex items-center gap-3 text-gray-700 hover:text-black"
              >
                <FiShoppingCart/>
                <span>Cart</span>
              </Link>

        {/*  Mobile Login */}
        <Link
        to="/login"
        onClick={()=> setIsMenuOpen(false)}
        className=" text-center px-4 py-2 border border-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition"
        >
          Login
        </Link>

            </div>
          </div>
      )}
    </nav>
  )
}

export default Navbar