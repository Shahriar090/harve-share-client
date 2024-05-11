import { Link } from "react-router-dom";
import { dashboardItems } from "../../components/layouts/Dashboard/DashboardItems";

const Sidebar = () => {
  return (
    <div className="w-60 h-screen fixed bg-slate-100 hidden lg:block pt-10">
      <div className="dashboard-items flex flex-col gap-4">
        {dashboardItems.map((item, index) => (
          <li
            key={index}
            className="text-lg uppercase text-black flex justify-center"
          >
            <Link to={item.link}>{item.label}</Link>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
