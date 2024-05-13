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
      <div className="w-60 h-screen fixed bg-slate-50  pt-10 hidden lg:block">
        <div className="logo pl-5">
          <h1 className="text-3xl md:text-3xl font-semibold">
            Harve <span className="text-orange-500">Share</span>
          </h1>
        </div>

        <div className="dashboard-items flex flex-col gap-4 pt-12">
          {dashboardItems.map((item, index) => (
            <li
              key={index}
              className="text-lg uppercase flex justify-start pl-5"
            >
              <Link to={item.link}>
                <div className="flex items-center gap-2 text-xl text-black font-medium hover:text-orange-500 transition-all duration-300">
                  <span> {item.icon}</span>
                  <span> {item.label}</span>
                </div>
              </Link>
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
        <div className="fixed  top-10 z-20 w-52 h-screen bg-white shadow-xl">
          <div className="nav-items flex flex-col items-center pt-16 gap-5">
            {dashboardItems.map((item, index) => (
              <li
                key={index}
                className="text-lg uppercase flex justify-start text-black"
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
