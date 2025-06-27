import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const NavMenu = () => {
  const [open, setOpen] = useState(false);

  const navItems = ["Home", "About", "Services", "Contact"];

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">MyApp</h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="text-gray-700 hover:text-blue-600 transition">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {open && (
        <ul className="md:hidden mt-2 px-4 space-y-2">
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="block text-gray-700 hover:text-blue-600">
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavMenu;
