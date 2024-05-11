import { Outlet } from "react-router-dom";
import Sidebar from "../../../shared/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex ">
      <div className="sidebar flex-[1]">
        <Sidebar />
      </div>
      <div className="outlet flex-[5] bg-white">
        {/* <Navbar /> */}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
