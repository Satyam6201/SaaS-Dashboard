import React, { useRef } from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const dataValues = [300, 450, 400, 600, 700, 650, 800];
const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

const chartData = {
  labels,
  datasets: [
    {
      label: "Sales",
      data: dataValues,
      borderColor: "#4F46E5",
      pointBackgroundColor: "#4F46E5",
      backgroundColor: "rgba(79, 70, 229, 0.2)",
      fill: true,
      tension: 0.3,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      callbacks: {
        label: function (context) {
          const currentValue = context.parsed.y;
          const dataset = context.dataset.data;
          const index = context.dataIndex;
          let label = `Sales: ${currentValue}`;
          if (index > 0) {
            const previousValue = dataset[index - 1];
            const diff = currentValue - previousValue;
            const sign = diff >= 0 ? "+" : "";
            label += ` (${sign}${diff})`;
          }
          return label;
        },
      },
    },
  },
  scales: {
    y: { beginAtZero: true },
  },
};

function LineChart() {
  return (
    <div className="h-72 w-full bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
}

export default LineChart;
