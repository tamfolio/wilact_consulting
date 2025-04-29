import React from "react";

function WhoWeAre() {
  return (
    <div className="bg-white py-[100px] flex flex-col items-start justify-start md:px-[50px] lg:pl-[100px]">
      <div className="flex flex-col items-center lg:items-start mb-[30px] lg:mb-[100px]">
        <h1 className="lg:text-[54px] font-semibold">Who We Are?</h1>
        <p className="w-full lg:w-[803px] text-[24px] text-[#585858] font-light text-center md:!text-left">
          At Will & Action Consulting, we specialize in AI-powered solutions,
          strategic advisory, and process transformation to help businesses
          thrive in an ever-evolving world.
        </p>
      </div>
      <div className="w-full flex flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-col  items-center mb-[50px] lg:mb-0 gap-[30px]">
          <div className="border-l-2 border-l-[#0B8E53] border-[#0B8E53] h-[200px] pl-[22px] md:pl-[42px] pt-[33px] !w-[330px] md:!w-[435px]">
            <h3 className="text-[#0B8E53] font-medium text-[30px]">Mission</h3>
            <span className="lg:!w-[351px] text-[#1A1A1A] font-light text-[16px]">
              Empowering organizations to thrive in an AI-driven, interconnected
              world by delivering transformative strategies, sustainable
              innovation, and measurable impact.
            </span>
          </div>
          <div className="border-l-2 border-l-[#0B8E53] border-[#0B8E53] h-[200px] pl-[22px] md:pl-[42px] pt-[33px] !w-[330px] md:!w-[435px]">
            <h3 className="text-[#0B8E53] font-medium text-[30px]">Vision</h3>
            <span className="lg:!w-[351px] text-[#1A1A1A] font-light text-[16px]">
              To be the leading partner in building resilient, adaptive
              ecosystems that redefine success for businesses and societies.{" "}
            </span>
          </div>
        </div>
        <img src="/assets/who_we_are.png" alt="" className="w-[746px]" />
      </div>
    </div>
  );
}

export default WhoWeAre;
