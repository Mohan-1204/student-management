import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-dark text-white p-3 vh-100">
      <h4>Student App</h4>

      <Link to="/dashboard">Dashboard</Link>
      <br />

      <Link to="/students">Students</Link>
      <br />

      <Link to="/profile">Profile</Link>
    </div>
  );
}

export default Sidebar;
