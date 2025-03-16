import React from "react";
import { FaArrowUp, FaArrowDown, FaChartLine } from "react-icons/fa";

function DashboardCard({ title, value, percentage }) {
  const isPositive = percentage >= 0;
  const arrowIcon = isPositive ? <FaArrowUp className="text-green-500" /> : <FaArrowDown className="text-red-500" />;

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white shadow-md p-5 rounded-md w-64 text-center hover:shadow-lg transition">
      <div className="flex items-center justify-center mb-2 text-blue-500">
        <FaChartLine size={24} />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl font-bold mt-1">{value}</p>
      <div className="flex items-center justify-center mt-2">
        {arrowIcon}
        <span className={`ml-2 ${isPositive ? "text-green-500" : "text-red-500"}`}>
          {Math.abs(percentage)}%
        </span>
      </div>
    </div>
  );
}

export default DashboardCard;
