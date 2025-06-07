import { useEffect, useState } from 'react';
import {MdOutlineLightMode  } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', dark);
  }, [dark]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition duration-300 shadow-md bg-white rounded">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold"> Paulina's Blog</h1>

        <div className="hidden md:flex space-x-6">
          <a href="#home" className="nav-link hover:underline">Home</a>
          <a href="#about" className="nav-link hover:underline">Blog</a>
          <a href="#services" className="nav-link hover:underline">About</a>
          <a href="#contact" className="nav-link hover:underline">Newsletter</a>
        </div>

        <div className="flex items-center space-x-2">
          {dark ? (
            <button
              onClick={() => setDark(false)}
              className="menu-button px-4 py-1 rounded bg-gray-200 hover:bg-gray-300 transition"
            >
        <MdOutlineDarkMode />
            </button>
          ) : (
            <button
              onClick={() => setDark(true)}
              className="menu-button px-4 py-1 rounded bg-gray-200 text-black hover:bg-gray-300 transition"
            >
          <MdOutlineLightMode />
            </button>
          )}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="menu-button md:hidden px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 transition"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-60' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col px-4 pb-4 space-y-2">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">Blog</a>
          <a href="#services" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Newsletter</a>
        </div>
      </div>
    </nav>
  );
}
