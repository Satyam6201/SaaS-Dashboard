import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analystics";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <ThemeProvider>
      <Router>
        <div className="flex min-h-screen bg-gray-100 dark:bg-gray-800 transition-all duration-300">
          {/* Sidebar with animation */}
          <div className={`transform ${sidebarOpen ? "translate-x-0" : "-translate-x-64"} transition-transform duration-300`}> 
            <Sidebar />
          </div>
          <div className="flex-1 flex flex-col">
            <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="p-6 flex-grow flex flex-col items-center">
              <div className="w-full max-w-7xl">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/analytics" element={<Analytics />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
