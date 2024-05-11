import { Link } from "react-router-dom";
import { dashboardItems } from "../../components/layouts/Dashboard/DashboardItems";
import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

const Sidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <div className="w-60 h-screen fixed bg-slate-100  pt-10 hidden lg:block">
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

      {/* mobile drawer */}
      <div className="lg:hidden">
        <button onClick={handleDrawerToggle} className="text-4xl">
          {isMobileMenuOpen ? (
            <MdClose className="text-red-500" />
          ) : (
            <MdMenu className="text-red-500" />
          )}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="fixed  left-0 z-20 w-52 h-screen bg-black ">
          <div className="nav-items flex flex-col items-center pt-16 gap-5">
            {dashboardItems.map((item, index) => (
              <li
                key={index}
                className="text-lg uppercase flex justify-start text-white"
              >
                <Link to={item.link}>{item.label}</Link>
              </li>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
