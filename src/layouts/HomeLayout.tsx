import {Outlet} from "react-router-dom";
import {AppNavbar} from "@/components/AppNavBar";
const HomeLayout = () => {
  return (
    <div>
      {/* <nav style={{padding: 20, borderBottom: "1px solid #ccc"}}> */}
        <AppNavbar />
      {/* </nav> */}
      <div style={{padding: 20}}>
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
