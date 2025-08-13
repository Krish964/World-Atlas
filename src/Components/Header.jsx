import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-gray-800 text-white font-mono sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">

        {/* ---------- Logo ---------- */}
        <div className="logo text-3xl font-bold cursor-pointer">
          World <span className="text-teal-400">Atlas</span>
        </div>

        {/* ---------- Navigation Menu ---------- */}
        <nav>
          <ul className="flex items-center justify-end gap-8 text-xl">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-teal-400 font-bold border-b-2 border-teal-400 pb-1"
                    : "text-white hover:text-teal-300 transition-colors duration-200"
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-teal-400 font-bold border-b-2 border-teal-400 pb-1"
                    : "text-white hover:text-teal-300 transition-colors duration-200"
                }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/country"
                className={({ isActive }) =>
                  isActive
                    ? "text-teal-400 font-bold border-b-2 border-teal-400 pb-1"
                    : "text-white hover:text-teal-300 transition-colors duration-200"
                }
              >
                Country
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-teal-400 font-bold border-b-2 border-teal-400 pb-1"
                    : "text-white hover:text-teal-300 transition-colors duration-200"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* ---------- Get Started Button ---------- */}
        <div>
          <NavLink to="/get-started">
            <button className="bg-teal-500 px-6 py-2 rounded-2xl text-lg font-semibold font-sans transition-all duration-200 hover:scale-105 hover:bg-teal-600">
              Get Started
            </button>
          </NavLink>
        </div>

      </div>
    </header>
  )
}

export default Header
