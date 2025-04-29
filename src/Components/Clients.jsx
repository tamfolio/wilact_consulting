import React from "react";
import ClientLogoSlider from "./LogoSlider";

function Clients() {
  return (
    <div className="bg-white pb-[50px]">
      <div className="bg-[#F7F7F7] flex flex-col items-center justify-center md:mb-[60px] lg:mb-[120px] py-[66px]">
        <h1 className="font-semibold text-[54px] mb-[30px] mt-[67px]">
          Our Clients
        </h1>
        <p className="text-[24px] font-light text-[#585858] mb-[57px]">
          Trusted by Leading Brands
        </p>
        <div className="clients-banner flex flex-col items-start justify-between py-[63px] pl-[40px]">
            <h1 className="text-white font-medium text-[34px] lg:w-[500px]">AI-driven diagnostics helped Access Bank optimize operations and save 20% in costs</h1>
            <span className="bg-[#FFCC00] text-black px-[30px] py-[15px] rounded-[30px]">Learn More</span>
        </div>
      </div>
      <ClientLogoSlider/>
    </div>
  );
}

export default Clients;
