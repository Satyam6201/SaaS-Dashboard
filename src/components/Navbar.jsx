import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaMoon, FaSun, FaBars } from "react-icons/fa";

function Navbar({ sidebarOpen, setSidebarOpen }) {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white shadow-md py-4 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-2xl">
          <FaBars />
        </button>
        <h1 className="text-xl font-bold">Dashboard</h1>
      </div>
      <div className="flex items-center gap-4">
        {/* Dark Mode Toggle */}
        <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        {/* Profile Avatar */}
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
          U
        </div>
      </div>
    </div>
  );
}

export default Navbar;
