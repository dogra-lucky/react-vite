import {Outlet} from "react-router-dom";
import { Button } from "react-bootstrap";
import { logoutApi } from "@/features/auth/authSlice";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/app/store";
import { useNavigate } from "react-router-dom";
const HomeLayout = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logoutApi());
    navigate("/login");
  };
  return (
    <div>
      <nav style={{padding: 20, borderBottom: "1px solid #ccc"}}>
        <Button onClick={handleLogout}>logout</Button>
      </nav>
      <div style={{padding: 20}}>
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
