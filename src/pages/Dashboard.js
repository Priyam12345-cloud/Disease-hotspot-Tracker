import React, { useEffect, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

function Dashboard() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Fetch data from the backend
    fetch("http://localhost:5000/api/disease-data")
      .then((response) => response.json())
      .then((data) => {
        // Prepare data for charts
        const locations = data.map((item) => item.location_key);
        const areas = data.map((item) => item.area_sq_km);

        setChartData({
          bar: {
            labels: locations.slice(0, 10), // First 10 locations
            datasets: [
              {
                label: "Area (sq km)",
                data: areas.slice(0, 10), // First 10 areas
                backgroundColor: "rgba(75, 192, 192, 0.6)",
              },
            ],
          },
          pie: {
            labels: locations.slice(0, 5), // First 5 locations
            datasets: [
              {
                label: "Area Distribution",
                data: areas.slice(0, 5),
                backgroundColor: [
                  "rgba(255, 99, 132, 0.6)",
                  "rgba(54, 162, 235, 0.6)",
                  "rgba(255, 206, 86, 0.6)",
                  "rgba(75, 192, 192, 0.6)",
                  "rgba(153, 102, 255, 0.6)",
                ],
              },
            ],
          },
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!chartData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Analytics Dashboard</h2>

      {/* Bar Chart */}
      <div className="bg-gray-200 h-auto rounded-lg flex items-center justify-center p-4">
        <Bar data={chartData.bar} options={{ plugins: { legend: { display: true } } }} />
      </div>

      {/* Pie Chart */}
      <div className="bg-gray-200 h-auto rounded-lg flex items-center justify-center p-4 mt-6">
        <Pie data={chartData.pie} options={{ plugins: { legend: { display: true } } }} />
      </div>
    </div>
  );
}

export default Dashboard;
