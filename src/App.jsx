import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.css";

import "./charts/ChartjsConfig";

// Import pages
import Dashboard from "./pages/Dashboard";
import Assumptions from "./pages/Assumptions";
import Integrations from "./pages/Integrations";
import Profile from "./pages/Profile";

// Import components
import Sidebar from "./partials/Sidebar";
import Header from "./partials/Header";
import Banner from "./partials/Banner";
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

        <Banner />
      </div>
    </div>
  );
}

export default App;
