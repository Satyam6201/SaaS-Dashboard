import React from "react";
import DashboardCard from "../components/DashboardCard";
import LineChart from "../charts/LineChart";

function Dashboard() {
  return (
    <div className="p-6">
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-6">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard title="Total Users" value="1,250" percentage={4.5} />
        <DashboardCard title="Revenue" value="$12,500" percentage={-2.3} />
        <DashboardCard title="Orders" value="530" percentage={5.7} />
      </div>
      <div className="mt-8">
        <LineChart />
      </div>
    </div>
  );
}

export default Dashboard;
