import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-200 border-b border-black">
      <div className="max-w-9xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Left Section (Logo + Text) */}
        <div>
          <img src="/img.jpg" alt="logo" className="h-8 w-8 sm:h-10 sm:w-10 object-contain"/>
          <h1 className="text-red-600 font-semibold text-base sm:text-xl">Colvin Cricket</h1>
          <p className="text-black text-[10px] sm:text-sm">Coaching Academy</p>
        </div>

        {/* Right Section (Menu Button) */}
        <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2 text-red-600 font-medium text-sm sm:text-base focus:outline-none" aria-label="Toggle Menu">
            <span className="text-xl sm:text-2xl">{isOpen ? "✕" : "≡"}</span>
        <span className="hidden sm:inline">Menu</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-white border-t border-black sm:hidden">
          <ul className="flex flex-col items-center py-4 gap-4 text-gray-700 font-medium">
            <li className="hover:text-red-600 cursor-pointer">Home</li>
            <li className="hover:text-red-600 cursor-pointer">About</li>
            <li className="hover:text-red-600 cursor-pointer">Programs</li>
            <li className="hover:text-red-600 cursor-pointer">Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;