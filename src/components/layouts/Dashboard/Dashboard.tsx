import { Outlet } from "react-router-dom";
import Sidebar from "../../../shared/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="sidebar lg:flex-[1]">
        <Sidebar />
      </div>
      <div className="outlet lg:flex-[5] bg-white">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
