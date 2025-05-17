import React from "react";
import Navbar from "./Navbar";

function HeroSection() {
  return (
    <div className="hero-banner flex flex-col items-start justify-start w-full px-[30px] md:px-[50px] lg:px-[100px]">
      <Navbar src="/assets/logo2.png" textColor='white'/>
      <div className="w-full h-[90vh] flex flex-col items-center justify-center">
        <h1 className="text-white lg:!text-[64px] font-medium leading-[60px] lg:w-[1015px] mb-[50px] text-center">
          Empowering Businesses with AI, Innovation, and Sustainable Strategies.
        </h1>
        <p className="!mb-[50px] text-[24px] text-[#C1C1C1] font-normal">
          Future-ready consulting tailored for transformative results
        </p>
        <div className="bg-[#0B8E53] py-[15px] px-[30px] rounded-[30px]">
          <span className="text-white text-[16px] font-medium">
            Explore Our Services
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
