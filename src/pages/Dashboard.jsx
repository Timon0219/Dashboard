import React, { useState } from "react";

import WelcomeBanner from "../components/partials/dashboard/WelcomeBanner";
import FilterButton from "../components/DropdownFilter";
import Datepicker from "../components/Datepicker";
import DashboardCard01 from "../components/partials/dashboard/DashboardCard01";
import DashboardCard02 from "../components/partials/dashboard/DashboardCard02";
import DashboardCard03 from "../components/partials/dashboard/DashboardCard03";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [startDate, setStartDate] = useState("2022-01-01");
  const [endDate, setEndDate] = useState("2022-01-31");
  return (
    <main>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        {/* Welcome banner */}
        <WelcomeBanner />

        {/* Dashboard actions */}
        <div className="sm:flex-row-reverse sm:justify-between sm:items-center mb-8">
          {/* Right: Actions */}
          <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
            {/* Filter button */}
            <FilterButton />
            {/* Datepicker built with flatpickr */}
            <Datepicker setStartDate={setStartDate} setEndDate={setEndDate} />
            {/* Add view button */}
            <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
              <svg
                className="w-4 h-4 fill-current opacity-50 shrink-0"
                viewBox="0 0 16 16"
              >
                <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
              </svg>
              <span className="hidden xs:block ml-2">Add view</span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-12 gap-6">
          {/* Line chart (Sales Over Time) */}
          <DashboardCard01 startDate={startDate} endDate={endDate} />
          {/* Card (Customers) */}
          <DashboardCard02 />
          {/* Card (Income/Expenses) */}
          <DashboardCard03 />
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
