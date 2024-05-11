import { Outlet } from "react-router-dom";
import Sidebar from "../../../shared/Sidebar/Sidebar";
import Navbar from "../../Navbar/Navbar";

const Dashboard = () => {
  return (
    <div className="flex ">
      <div className="sidebar flex-[1]">
        <Sidebar />
      </div>
      <div className="outlet flex-[5] bg-white pt-10">
        {/* <Navbar /> */}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
