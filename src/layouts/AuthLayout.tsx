import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
