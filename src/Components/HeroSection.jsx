import React from "react";
import Navbar from "./Navbar";

function HeroSection() {
  return (
    <div className="hero-banner flex flex-col items-start justify-start w-full lg:px-[100px]">
      <Navbar src="/assets/logo2.png"/>
      <div className="h-[90vh] flex flex-col items-start justify-center">
        <h1 className="text-white lg:text-[64px] font-medium leading-[60px] lg:w-[745px] mb-[30px]">
          Empowering Businesses with AI, Innovation, and Sustainable Strategies.
        </h1>
        <p className="mb-[30px] text-[24px] text-white font-normal">Future-ready consulting tailored for transformative results</p>
        <div className="bg-[#0B8E53] py-[15px] px-[30px] rounded-[30px]">
          <span className="text-white text-[16px] font-medium">Explore Our Services</span>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
