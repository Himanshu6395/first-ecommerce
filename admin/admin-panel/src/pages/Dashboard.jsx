import React from "react";
import Chart from "react-apexcharts";

export default function Dashboard() {
  // Dummy stats
  const stats = [
    { id: 1, title: "Users", value: 1240, color: "#4caf50" },
    { id: 2, title: "Products", value: 530, color: "#2196f3" },
    { id: 3, title: "Orders", value: 320, color: "#ff9800" },
    { id: 4, title: "Revenue", value: 152300, color: "#f44336", prefix: "₹" },
  ];

  // Line Chart Data (User Growth)
  const lineSeries = [
    { name: "Users", data: [10, 41, 35, 51, 49, 62, 69, 91, 148] },
  ];
  const lineOptions = {
    chart: { type: "line", height: 250, toolbar: { show: false } },
    stroke: { curve: "smooth" },
    xaxis: { categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"] },
    tooltip: { enabled: true },
  };

  // Pie Chart Data (Product Share)
  const pieSeries = [44, 55, 13, 43];
  const pieOptions = {
    chart: { type: 'pie' },
    labels: ['Product A', 'Product B', 'Product C', 'Product D'],
    legend: { position: 'bottom' },
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif", background: "#f5f5f5", minHeight: "100vh" }}>
      <h1 style={{ marginBottom: "20px" }}>Admin Dashboard</h1>

      {/* Stats Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "20px", marginBottom: "40px" }}>
        {stats.map((stat) => (
          <div
            key={stat.id}
            style={{ 
              padding: "20px", 
              borderRadius: "8px", 
              background: "#fff", 
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              borderTop: `4px solid ${stat.color}`
            }}
          >
            <h3 style={{ margin: "0 0 10px 0" }}>{stat.title}</h3>
            <p style={{ fontSize: "1.5rem", fontWeight: "bold", margin: 0 }}>
              {stat.prefix ? stat.prefix : ""}{stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        {/* Line Chart */}
        <div style={{ background: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
          <h3>User Growth</h3>
          <Chart options={lineOptions} series={lineSeries} type="line" height={250} />
        </div>

        {/* Pie Chart */}
        <div style={{ background: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
          <h3>Product Share</h3>
          <Chart options={pieOptions} series={pieSeries} type="pie" height={250} />
        </div>
      </div>
    </div>
  );
}
