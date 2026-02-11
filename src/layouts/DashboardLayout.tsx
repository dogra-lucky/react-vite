import {Outlet, Link} from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <nav style={{padding: 20, borderBottom: "1px solid #ccc"}}>
        <Link to="/login">Login</Link>
      </nav>
      <div style={{padding: 20}}>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
