import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";

function Navbar({ src }) {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <div className="w-full py-3 flex items-center justify-between">
      <Link to="/">
        <img src={src} alt="Logo" className="w-[55px] h-[56px]" />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-[30px]">
        <Link
          to="/about-us"
          className="no-underline font-semibold text-black text-[16px]"
        >
          About Us
        </Link>
        <span className="font-semibold text-black text-[16px]">
          Core Services
        </span>
        <span className="font-semibold text-black text-[16px]">Our Values</span>
        <span className="font-semibold text-black text-[16px]">Clients</span>
      </div>

      {/* Desktop Button */}
      <div className="bg-[#FFCC00] py-[15px] px-[30px] rounded-[30px] hidden md:block">
        <span className="text-white text-[16px] font-medium">Contact Us</span>
      </div>

      {/* Mobile Menu Icon */}
      <div className="block md:hidden">
        <GiHamburgerMenu
          size={32}
          fill="#FFCC00"
          onClick={toggleSidebar}
          className="cursor-pointer"
        />
      </div>

      {/* Mobile Offcanvas Menu */}
      <Offcanvas
        isOpen={showSidebar}
        toggle={toggleSidebar}
        direction="end" // open from right
        className="!z-[9999] !w-[250px] bg-white"
      >
        <OffcanvasHeader toggle={toggleSidebar}>
          <img src={src} alt="Logo" className="w-[40px] h-[40px]" />
        </OffcanvasHeader>
        <OffcanvasBody className="flex flex-col gap-6">
          <Link
            to="/about-us"
            className="font-semibold text-black"
            onClick={toggleSidebar}
          >
            About Us
          </Link>
          <span className="font-semibold text-black">Core Services</span>
          <span className="font-semibold text-black">Our Values</span>
          <span className="font-semibold text-black">Clients</span>
          <div className="bg-[#FFCC00] py-[15px] px-[30px] rounded-[30px] flex items-center justify-center">
            <span className="text-white text-[16px] font-medium">
              Contact Us
            </span>
          </div>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
}

export default Navbar;
