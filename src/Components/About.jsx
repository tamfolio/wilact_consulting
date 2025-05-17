import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  return (
    <div>
      <div className="px-[30px] md:px-[50px] lg:px-[100px]">
        <Navbar src="/assets/logo3.png" textColor="black" />
      </div>
      <div className="lg:px-[100px]">
        <h1 className="!mt-[60px] lg:w-[777px] text-center md:!text-left">
          About Us
        </h1>
        <p className="!mb-[60px] text-center md:text-left">
          Transforming Organizations through AI, Innovative Solutions, and
          Sustainable Practices.
        </p>
        <div className="flex flex-col lg:flex-row lg:gap-[100px] px-[20px] lg:px-0">
          <img
            src="/assets/about1.png"
            alt=""
            className="lg:w-1/2 w-full mb-[80px] rounded-xl"
          />
          <div className="flex flex-col items-start justify-start w-full lg:w-1/2">
            <div className="flex items-center justify-center gap-3 mb-2 lg:mb-5">
              <h1 className="lg:!text-[40px] text-md !font-bold">Our Story</h1>
              <img
                src="/assets/down-arrow.png"
                alt=""
                className="w-[23px] h-[23px]"
              />
            </div>
            <p className="leading-[27px] tracking-normal text-[16px]">
              Lorem ipsum dolor sit amet consectetur. Aliquet scelerisque mattis
              orci interdum. Vestibulum maecenas urna mauris erat venenatis
              egestas et libero a. Lorem ut et massa ut varius ipsum. Enim
              mauris diam risus sit. Venenatis turpis suscipit tortor diam. Amet
              vestibulum nisi sed placerat convallis pulvinar sed faucibus diam.
              Habitant nunc ut auctor id urna posuere id. Sit enim duis donec
              leo fringilla semper sollicitudin. Ipsum blandit ut orci nec
              nullam. Venenatis ultrices sit aliquam semper duis. Erat commodo
              feugiat condimentum tellus aliquam nunc ultricies. Purus diam
              tristique pharetra amet facilisis nunc sed. Vitae ultrices amet
              tincidunt arcu et. Tincidunt elit cras quam facilisi cras
              vestibulum scelerisque ultrices. Ultrices sit urna ipsum nunc
              suscipit gravida. In viverra proin rhoncus purus risus. Eget sit
              id condimentum et hendrerit dictumst. Integer ornare facilisis
              dolor id eget vel arcu. Diam sit{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-5">
        <h1 className="text-[54px] font-semibold">Our Team</h1>
        <div className="flex flex-col md:flex-row gap-[24px] lg:mb-[110px] px-[10px] lg:px-0">
          <div>
            <img src="/assets/about2.png" alt="" />
            <p className="text-[20px] font-semibold text-[#808080] mt-3 mb-0">
              Founder
            </p>
            <span className="text-[#1A1A1A] text-[20px] font-semibold">
              Ayo Ogunlowo
            </span>
          </div>
          <div>
            <img src="/assets/about3.png" alt="" />
            <p className="text-[20px] font-semibold text-[#808080] mt-3 mb-0">
              Co-founder
            </p>
            <span className="text-[#1A1A1A] text-[20px] font-semibold">
              Adetoun Sulaimon
            </span>
          </div>
        </div>
      </div>
      <div className="about-banner flex flex-col items-center justify-center px-3">
        <h1 className="text-md lg:!text-[48px] lg:w-[695px] text-center !mb-8">Ready to unlock the power of AI for your business?</h1>
        <p className="text-[#1A1A1A] text-[16px] !mb-8 lg:w-[695px] text-center"> Partner with us to identify opportunities, streamline operations, and build intelligent solutions tailored to your goals.</p>
        <div className="bg-[#0B8E53] py-[15px] px-[30px] rounded-[30px] flex items-center jus">
            <span className="text-white text-[16px] font-medium">
              Get in Touch
            </span>
          </div>
      </div>
      {/* <div className="bg-[#1E1E1E] py-[50px] md:pt-[110px] md:pb-[40px] border-b-1 border-[#FFFFFF80]">
        <div className="flex flex-col-reverse md:flex-row px-[20px] md:px-[104px] md:gap-[103px]">
          <div className="w-full md:w-[780px]">
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
        <div className="flex flex-col md:flex-row px-[20px] md:px-[104px] md:gap-[103px] mt-[100px]">
          <img
            src="/assets/mission.png"
            alt=""
            className="w-[280px] h-[280px]"
          />
          <div className="w-full md:w-[780px]">
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
      </div> */}
      <Footer />
    </div>
  );
}

export default About;
