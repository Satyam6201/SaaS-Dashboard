import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-gray-900 text-white p-5 transition-all duration-300">
      <h2 className="text-xl font-bold mb-5">Admin Panel</h2>
      <nav>
        <ul>
          <li className="mb-3">
            <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-400 font-bold" : "hover:text-gray-300"}>
              Dashboard
            </NavLink>
          </li>
          <li className="mb-3">
            <NavLink to="/analytics" className={({ isActive }) => isActive ? "text-blue-400 font-bold" : "hover:text-gray-300"}>
              Analytics
            </NavLink>
          </li>
          <li className="mb-3">
            <NavLink to="/users" className={({ isActive }) => isActive ? "text-blue-400 font-bold" : "hover:text-gray-300"}>
              Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" className={({ isActive }) => isActive ? "text-blue-400 font-bold" : "hover:text-gray-300"}>
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
