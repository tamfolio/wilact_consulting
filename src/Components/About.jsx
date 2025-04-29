import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  return (
    <div>
      <div className="px-[30px] md:px-[50px] lg:px-[100px]">
        <Navbar src="/assets/logo3.png" />
      </div>
      <div className="lg:px-[100px]">
        <h1 className="!my-[60px] lg:w-[777px]">
          Transforming Organizations through AI, Innovative Solutions, and
          Sustainable Practices.
        </h1>
        <img src="/assets/about (1).png" alt="" className="w-full mb-[80px]" />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-[54px] font-semibold">Our Team</h1>
        <span className="text-[24px] font-light text-[#585858] mb-[36px]">
          Empowering organizations to thrive by harnessing the transformative
          power of AI, we
        </span>
        <div className="flex gap-[24px] mb-[110px]">
          <img src="/assets/female.png" alt="" />
          <img src="/assets/male.png" alt="" />
        </div>
      </div>
      <div className="bg-[#1E1E1E] pt-[110px] pb-[40px] border-b-1 border-[#FFFFFF80]">
        <div className="flex px-[104px] gap-[103px]">
          <div className="w-[780px]">
            <h1 className="text-white text-[54px] font-medium mb-[29px]">
              Our Vision
            </h1>
            <span className="text-white text-[20px] leading-[40px]">
              Empowering organizations to thrive by harnessing the
              transformative power of AI, we are pioneering innovative solutions
              that drive efficiency and productivity. Our commitment to
              sustainable practices not only benefits the planet but also
              enriches the communities we serve. By integrating cutting-edge
              technology with a focus on environmental stewardship, we aim to
              create a brighter future for all.
            </span>
          </div>
          <img
            src="/assets/vision.png"
            alt=""
            className="w-[280px] h-[280px]"
          />
        </div>
        <div className="flex px-[104px] gap-[103px] mt-[100px]">
          <img
            src="/assets/mission.png"
            alt=""
            className="w-[280px] h-[280px]"
          />
          <div className="w-[780px]">
            <h1 className="text-white text-[54px] font-medium mb-[29px]">
              Our Mission
            </h1>
            <span className="text-white text-[20px] leading-[40px]">
              Empowering organizations to thrive by harnessing the
              transformative power of AI, we are pioneering innovative solutions
              that drive efficiency and productivity. Our commitment to
              sustainable practices not only benefits the planet but also
              enriches the communities we serve. By integrating cutting-edge
              technology with a focus on environmental stewardship, we aim to
              create a brighter future for all.
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
