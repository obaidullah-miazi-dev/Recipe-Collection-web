/* eslint-disable react-hooks/static-components */
"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  
  const closeMenu = () => setIsOpen(false);

  const NavLinks = () => (
    <>
      <Link
        href="/"
        className="hover:text-green-600 transition"
        onClick={closeMenu} 
      >
        Home
      </Link>
      <Link
        href="/recipes"
        className="hover:text-green-600 transition"
        onClick={closeMenu}
      >
        Recipes
      </Link>
      <Link
        href="/"
        className="hover:text-green-600 transition"
        onClick={closeMenu}
      >
        About Us
      </Link>
      <Link
        href="/"
        className="hover:text-green-600 transition"
        onClick={closeMenu}
      >
        Contact
      </Link>
    </>
  );

  return (
    <nav className="sticky top-2 z-50">
      <div className="m-2 md:w-8/12 w-11/12 mx-auto p-4 rounded-full backdrop-blur-xl bg-white/50 shadow-lg flex justify-between items-center">
        
        <Link
          href="/"
          className="font-bold text-green-600 text-3xl md:text-4xl font"
          onClick={closeMenu}
        >
          Recipe
        </Link>

        
        <div className="hidden md:flex gap-10 text-green-800 text-lg font-medium">
          <NavLinks />
        </div>

        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-green-700 z-50"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white/95 backdrop-blur-xl shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-12 text-2xl font-semibold text-green-800">
          <NavLinks />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;