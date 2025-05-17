import React from "react";

function Values() {
  return (
    <div className="bg-[#1E1E1E] py-[80px] flex flex-col items-center">
      <h1 className="text-white text-[54px] font-semibold !mb-[72px]">
        Our Values
      </h1>
      <div className="flex gap-[50px] flex-wrap items-center justify-center">
        <div className="w-[350px] h-[334px] bg-[#2d2d2d] relative px-[28px] pt-[140px] rounded-[30px]">
            <img src="/assets/gradient.png" alt="" className="absolute right-0 top-0 rounded-[30px] "/>
            <h1 className="text-white text-[32px] font-semibold leading-[36px] tracking-normal mb-[20px]">AI-Powered Excellence</h1>
            <span className="text-white text-[16px] font-light leading-[17px] tracking-normal">Harnessing artificial intelligence to deliver smarter, faster, and impactful solutions.</span>
        </div>
        <div className="w-[350px] h-[334px] bg-[#2d2d2d] relative px-[38px] pt-[140px] rounded-[30px]">
            <img src="/assets/gradient.png" alt="" className="absolute right-0 top-0 rounded-[30px]"/>
            <h1 className="text-white text-[32px] font-semibold leading-[36px] tracking-normal mb-[20px]">Sustainable Growth</h1>
            <span className="text-white text-[16px] font-light leading-[17px] tracking-normal">Driving business success with a focus on long-term sustainability.</span>
        </div>
        <div className="w-[350px] h-[334px] bg-[#2d2d2d] relative px-[28px] pt-[140px] rounded-[30px]">
            <img src="/assets/gradient.png" alt="" className="absolute right-0 top-0 rounded-[30px]"/>
            <h1 className="text-white text-[32px] font-semibold leading-[36px] tracking-normal mb-[20px]">Innovation with Purpose</h1>
            <span className="text-white text-[16px] font-light leading-[17px] tracking-normal">Solving challenges creatively to unlock opportunities.</span>
        </div>
        <div className="w-[350px] h-[334px] bg-[#2d2d2d] relative px-[28px] pt-[140px] rounded-[30px]">
            <img src="/assets/gradient.png" alt="" className="absolute right-0 top-0 rounded-[30px]"/>
            <h1 className="text-white text-[32px] font-semibold leading-[36px] tracking-normal mb-[20px]">Client-Centric Partnership</h1>
            <span className="text-white text-[16px] font-light leading-[17px] tracking-normal">Building collaborative and tailored strategies for measurable success.</span>
        </div>
        <div className="w-[350px] h-[334px] bg-[#2d2d2d] relative px-[28px] pt-[140px] rounded-[30px]">
            <img src="/assets/gradient.png" alt="" className="absolute right-0 top-0 rounded-[30px]"/>
            <h1 className="text-white text-[32px] font-semibold leading-[36px] tracking-normal mb-[20px]">Agility and Adaptability</h1>
            <span className="text-white text-[16px] font-light leading-[17px] tracking-normal">Crafting solutions to meet the challenges of a fast-changing world.</span>
        </div>
      </div>
    </div>
  );
}

export default Values;
