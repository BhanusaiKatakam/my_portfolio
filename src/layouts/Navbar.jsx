import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b-2 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">Bhanu Sai Katakam</h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-800 hover:text-blue-500">
              Home
            </a>
            <a href="#experience" className="text-gray-800 hover:text-blue-500">
              Experience
            </a>
            <a href="#projects" className="text-gray-800 hover:text-blue-500">
              Projects
            </a>
            <a href="#skills" className="text-gray-800 hover:text-blue-500">
              Skills
            </a>
            <a href="#contact" className="text-gray-800 hover:text-blue-500">
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block text-gray-800 hover:text-blue-500">
              Home
            </a>
            <a
              href="#experience"
              className="block text-gray-800 hover:text-blue-500"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="block text-gray-800 hover:text-blue-500"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="block text-gray-800 hover:text-blue-500"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="block text-gray-800 hover:text-blue-500"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
