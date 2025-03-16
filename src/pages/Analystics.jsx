import React from "react";
import BarChart from "../charts/BarChart";
import DoughnutChart from "../charts/DoughnutChart";

function Analytics() {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold text-center dark:text-white mb-5">
        Analytics
      </h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        <div className="w-full max-w-md bg-white dark:bg-gray-900 p-4 rounded shadow">
          <BarChart />
        </div>
        <div className="w-full max-w-md bg-white dark:bg-gray-900 p-4 rounded shadow">
          <DoughnutChart />
        </div>
      </div>
    </div>
  );
}

export default Analytics;
