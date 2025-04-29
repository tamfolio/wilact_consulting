import React from "react";
import { Link } from "react-router-dom";

function Navbar({ src }) {
  return (
    <div className="w-full py-3 flex items-center justify-between">
      <Link to="/">
        <img src={src} alt="" className="w-[55px] h-[56px]" />
      </Link>
      <div className="flex gap-[30px]">
        <Link to="/about-us" className="no-underline">
          <span className="font-semibold text-black text-[16px] no-underline">
            About Us
          </span>
        </Link>
        <span className="font-semibold text-black text-[16px]">
          Core Services
        </span>
        <span className="font-semibold text-black text-[16px]">Our Values</span>
        <span className="font-semibold text-black text-[16px]">Clients</span>
      </div>
      <div className="bg-[#FFCC00] py-[15px] px-[30px] rounded-[30px]">
        <span className="text-white text-[16px] font-medium">Contact Us</span>
      </div>
    </div>
  );
}

export default Navbar;
