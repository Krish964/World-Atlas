import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 font-mono">
      {/* Top Section */}
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            World <span className="text-teal-400">Atlas</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Discover countries, learn about cultures, and explore the world with World Atlas.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <NavLink to="/" className="hover:text-teal-400 transition">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-teal-400 transition">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/country" className="hover:text-teal-400 transition">
                Countries
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-teal-400 transition">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-teal-400 transition">
              🌐
            </a>
            <a href="#" className="hover:text-teal-400 transition">
              📘
            </a>
            <a href="#" className="hover:text-teal-400 transition">
              🐦
            </a>
            <a href="#" className="hover:text-teal-400 transition">
              📸
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} World Atlas. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
