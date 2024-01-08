import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.css";

import "./components/charts/ChartjsConfig";

// Import pages
import Dashboard from "./pages/Dashboard";
import Assumptions from "./pages/Assumptions";
import Integrations from "./pages/Integrations";
import Profile from "./pages/Profile";

// Import components
import Sidebar from "./components/partials/Sidebar";
import Header from "./components/partials/Header";
function App() {
  const location = useLocation();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/assumptions" element={<Assumptions />} />
          <Route exact path="/integrations" element={<Integrations />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
