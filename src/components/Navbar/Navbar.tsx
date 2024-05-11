import { Link } from "react-router-dom";
import { navItems } from "./NavItems";
import { MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className="w-full h-16 fixed top-0 left-0 right-0 z-50 bg-[#FF4800]">
      {/* main nav contents start*/}
      <nav className="w-full max-w-screen-xl mx-auto h-full flex items-center ">
        <div className="nav-container flex justify-between w-full items-center px-2 lg:px-0">
          <div className="logo">
            <h1 className="text-3xl md:text-3xl font-semibold">
              Harve <span className="text-white">Share</span>
            </h1>
          </div>
          <div className="hidden nav-items lg:flex gap-5">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="uppercase font-medium text-lg text-white hover:text-black transition-all duration-300"
              >
                <Link to={item.link}>{item.label}</Link>
              </li>
            ))}
          </div>

          {/* drawer for small device */}

          <div className="lg:hidden">
            <button onClick={handleDrawerToggle} className="text-4xl">
              {isMobileMenuOpen ? (
                <MdClose />
              ) : (
                <MdMenu className="text-white" />
              )}
            </button>
          </div>

          {/* mobile drawer */}
          {isMobileMenuOpen && (
            <div className="fixed top-12 right-0 z-20 w-full h-screen bg-black bg-opacity-60 text-white">
              <div className="nav-items flex flex-col items-center pt-16 gap-5">
                {navItems.map((item, index) => (
                  <li key={index} className="uppercase font-medium ">
                    <Link to={item.link}>{item.label}</Link>
                  </li>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
