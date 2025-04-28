import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when navigating to a new page
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    { name: 'Order Now', path: '/order', isButton: true },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) =>
              link.isButton ? (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className="btn btn-primary"
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-lg font-medium transition-colors hover:text-pink-600 ${
                    location.pathname === link.path ? 'text-pink-600' : (isScrolled ? 'text-brown-900' : 'text-brown-900')
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Social Media Link */}
          <a
            href="https://www.instagram.com/gabbyscakehouse"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center text-brown-800 hover:text-pink-600 transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 focus:outline-none ${isScrolled || isOpen ? 'text-brown-900' : 'text-brown-900'}`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
        style={{ top: '60px' }}
      >
        <div className="flex flex-col h-full p-8 space-y-6">
          {navLinks.map((link) =>
            link.isButton ? (
              <Link
                key={link.name}
                to={link.path}
                className="btn btn-primary w-full text-center"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xl font-medium p-2 ${
                  location.pathname === link.path ? 'text-pink-600' : 'text-brown-900'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            )
          )}
          
          <div className="pt-6 border-t border-gray-200">
            <a
              href="https://www.instagram.com/gabbyscakehouse"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-brown-800 hover:text-pink-600 transition-colors p-2"
            >
              <Instagram size={24} />
              <span>@gabbyscakehouse</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;