import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Desktop", "Mobile", "Tablet"],
  datasets: [
    {
      label: "Visitors",
      data: [55, 35, 10],
      backgroundColor: ["#6366F1", "#34D399", "#F59E0B"],
      borderWidth: 2,
      borderColor: "#fff",
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: "bottom" },
    tooltip: { backgroundColor: "rgba(0, 0, 0, 0.8)", bodyColor: "#fff" },
  },
};

function DoughnutChart() {
  return (
    <div className="h-72 w-full bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default DoughnutChart;
