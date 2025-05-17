import React from "react";

function WhyChoose() {
  return (
    <div className="bg-white h-auto py-[50px] lg:py-[130px] relative flex flex-col items-center justify-center">
      <h1 className="font-semibold text-[54px] !mb-[70px]">Why Choose Us</h1>
      {/* <div className='flex flex-col md:items-center md:justify-center md:flex-row md:flex-wrap gap-[50px] !mt-[80px]'>
                <div className='w-[350px] h-[300px] border-solid border-[1px] border-[#E9E9E9] flex flex-col items-center justify-center px-[30px]'>
                        <img src="/assets/Product Icons.png" alt="" className='mb-[20px]'/>
                        <p className='text-center text-[24px]'>Proven expertise in integrating cutting-edge technology.</p>
                </div>
                <div className='w-[350px] h-[300px] border-solid border-[1px] border-[#E9E9E9] flex flex-col items-center justify-center px-[30px]'>
                        <img src="/assets/Product Icons (1).png" alt="" className='mb-[20px]'/>
                        <p className='text-center text-[24px]'>A track record of measurable client success stories</p>
                </div>
                <div className='w-[350px] h-[300px] border-solid border-[1px] border-[#E9E9E9] flex flex-col items-center justify-center px-[30px]'>
                        <img src="/assets/Vector (6).png" alt="" className='mb-[20px]'/>
                        <p className='text-center text-[24px]'>Dedicated focus on AI and sustainability for the future.</p>
                </div>
            </div> */}
      <div className="flex flex-col lg:flex-row gap-[25px] items-start">
        <div>
          <img src="/assets/choose1.png" alt="" />
          <p className="text-[24px] w-[467px] !mt-[20px]">
            Proven expertise in integrating cutting-edge technology.
          </p>
        </div>
        <div className="flex flex-col">
          <div>
            <p className="text-[24px] w-[467px]">
              A track record of measurable client success stories
            </p>
            <img src="/assets/choose3.png" alt="" />
          </div>
          <div className="mt-[30px]">
            <img src="/assets/choose2.png" alt="" className="rounded-[20px]" />
            <p className="text-[24px] w-[467px] !mt-[20px]">
              Dedicated focus on AI and sustainability for the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
