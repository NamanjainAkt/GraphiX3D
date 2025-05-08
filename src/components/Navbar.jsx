import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Why Join ?', path: '#why-join' },
    { name: 'Wings', path: '#wings' },
    { name: 'Events', path: '#events' },
    { name: 'About', path: '#about' },
    { name: 'Contact', path: '#contact' }
  ];

  return (
    <nav className="fixed w-full z-50 bg-primary/90 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/"  className="flex items-center">
            <span onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-2xl font-bold bg-gradient-to-r from-[#27e0b3] to-purple-600 bg-clip-text text-transparent">GraphiX3D</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-white hover:text-secondary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.path)?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="block py-2 text-gray-300 hover:text-accent transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  document.querySelector(link.path)?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
