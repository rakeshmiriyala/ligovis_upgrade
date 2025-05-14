import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Adjust the path based on your project structure

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[min(95%,1400px)] h-[65px] z-[999] bg-black rounded-xl bg-opacity-80  px-6 flex items-center justify-between text-white transition-all duration-300 ${isScrolled ? ' scale-[0.98]' : ''}`}>
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2 cursor-pointer">
        <img src={logo} alt="Celume Studios" className="h-8 w-auto" />
      </Link>

      {/* Links */}
      <div className="hidden md:flex items-center gap-6 text-xl font-medium">
        <a href="#hero" className="hover:text-gray-300 transition">About</a>
        <a href="#features" className="hover:text-gray-300 transition">Services</a>
        <a href="#products" className="hover:text-gray-300 transition">Products</a>
        <Link to="/contactus" className="hover:text-gray-300 transition">Contact Us</Link>
      </div>

      {/* Call to Action */}
      <div className="hidden md:flex">
        <button className="rounded-xl px-5 py-2 hover:cursor-pointer text-sm font-semibold bg-white text-black shadow hover:bg-gray-200 transition">
          Get Started
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-[#1f1f1f] backdrop-blur-md px-6 py-4 flex flex-col gap-4 text-sm font-medium md:hidden rounded-xl">
          <a href="#hero" onClick={() => setIsOpen(false)} className="hover:text-gray-300 transition">About</a>
          <a href="#features" onClick={() => setIsOpen(false)} className="hover:text-gray-300 transition">Services</a>
          <a href="#products" onClick={() => setIsOpen(false)} className="hover:text-gray-300 transition">Products</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-gray-300 transition">Contact Us</a>
          <button className="rounded-xl px-4 py-2 mt-2 bg-white text-black font-semibold shadow hover:bg-gray-200 transition">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
