import Sidebar from "../layout/Sidebar";
import { Bar } from "react-chartjs-2";

function Dashboard() {
  const data = {
    labels: ["A", "B", "C"],
    datasets: [
      {
        label: "Marks",
        data: [50, 60, 70],
      },
    ],
  };

  return (
    <div className="d-flex">
      <Sidebar />

      <div className="p-3">
        <h2>Dashboard</h2>

        <p>Welcome Admin</p>

        <Bar data={data} />
      </div>
    </div>
  );
}

export default Dashboard;
