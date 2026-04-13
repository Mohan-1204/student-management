import Sidebar from "../layout/Sidebar";

function Dashboard() {
  return (
    <div className="d-flex">
      <Sidebar />

      <div className="p-3">
        <h2>Dashboard</h2>

        <p>Welcome Admin</p>
      </div>
    </div>
  );
}

export default Dashboard;
