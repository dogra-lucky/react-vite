import { Outlet, Navigate ,useLocation} from "react-router-dom";

const isAuthenticated = !!localStorage.getItem("token");
export const PrivateRoute = () => {
    const location = useLocation();
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{from: location}} />
  );
};