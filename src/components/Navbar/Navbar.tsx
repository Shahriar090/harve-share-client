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
    <header className="w-full h-12 fixed top-0 left-0 right-0 z-50 bg-[#FF4800]">
      {/* contact and donate button start */}
      <div className="hidden lg:flex justify-between items-center h-full max-w-screen-xl mx-auto">
        <div className="contacts flex text-white gap-5 font-medium">
          <p>
            <span>Email</span> harveshare@gmail.com
          </p>
          <p>
            <span>Phone</span> +88 01865017300
          </p>
        </div>
        <div className="donate-btn">
          <button className="px-6 py-3 inline-flex items-center justify-center text-white outline-none bg-[#262222] font-medium">
            Donate Now
          </button>
        </div>
      </div>
      {/* contact and donate button end */}

      {/* main nav contents start*/}
      <nav className="w-full max-w-screen-xl mx-auto h-full flex items-center lg:py-8">
        <div className="nav-container flex justify-between w-full items-center px-4 lg:px-0">
          <div className="logo">
            <h1 className="text-2xl md:text-3xl font-semibold">
              Harve <span className="text-white lg:text-[#FF4800]">Share</span>
            </h1>
          </div>
          <div className="hidden nav-items lg:flex gap-5">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="uppercase font-medium hover:text-[#FF4800] transition-all duration-300"
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
            <div className="fixed top-12 right-0 z-20 w-full h-screen bg-white text-black">
              <div className="nav-items flex flex-col items-center pt-10 gap-5">
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
