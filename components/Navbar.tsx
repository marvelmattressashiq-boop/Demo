import React, { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              {/* Logo Placeholder */}
              <div className="w-10 h-10 bg-marvel-900 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                M
              </div>
              <span className="font-bold text-2xl text-marvel-900 tracking-tight">Marvel Mattress</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`${
                  location.pathname === link.href
                    ? 'text-marvel-600 font-semibold'
                    : 'text-slate-600 hover:text-marvel-600'
                } transition-colors duration-200`}
              >
                {link.label}
              </Link>
            ))}
            <button className="bg-marvel-900 text-white px-6 py-2.5 rounded-full hover:bg-marvel-800 transition-colors duration-300 font-medium text-sm flex items-center gap-2">
              <ShoppingCart size={18} />
              Shop Now
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-marvel-900 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  location.pathname === link.href
                    ? 'text-marvel-600 bg-marvel-50'
                    : 'text-slate-600 hover:text-marvel-600 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <button className="w-full bg-marvel-900 text-white px-6 py-3 rounded-lg hover:bg-marvel-800 transition-colors font-medium">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;