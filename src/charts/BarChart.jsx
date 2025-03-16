import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: "Revenue",
      data: [3000, 4500, 4000, 6000, 7000],
      backgroundColor: [
        "rgba(54, 162, 235, 0.7)",
        "rgba(75, 192, 192, 0.7)",
        "rgba(255, 99, 132, 0.7)",
        "rgba(255, 159, 64, 0.7)",
        "rgba(153, 102, 255, 0.7)",
      ],
      borderRadius: 5,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: "top" },
    tooltip: { backgroundColor: "rgba(0, 0, 0, 0.8)", bodyColor: "#fff" },
  },
};

function BarChart() {
  return (
    <div className="h-72 w-full bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
      <Bar data={data} options={options} />
    </div>
  );
}

export default BarChart;
