import React from 'react'

function WhoWeAre() {
  return (
    <div className='bg-white py-[100px] flex flex-col items-start justify-start lg:pl-[100px]'>
      <div className='mb-[100px]'>
        <h1 className='lg:text-[54px] font-semibold'>Who We Are?</h1>
        <p className='w-[803px] text-[24px] text-[#585858] font-light'>At Will & Action Consulting, we specialize in AI-powered solutions, strategic advisory, and process transformation to help businesses thrive in an ever-evolving world.</p>
      </div>
      <div className='w-full flex items-center justify-between'>
        <div className='flex flex-col gap-[30px]'>
            <div className='border-l-2 border-l-[#0B8E53] border-[#0B8E53] h-[200px] pl-[42px] pt-[33px] w-[435px]'>
                <h3 className='text-[#0B8E53] font-medium text-[30px]'>Mission</h3>
                <span className='!w-[351px] text-[#1A1A1A] font-light text-[16px]'>Empowering organizations to thrive in an AI-driven, interconnected world by delivering transformative strategies, sustainable innovation, and measurable impact.</span>
            </div>
            <div className='border-l-2 border-l-[#0B8E53] border-[#0B8E53] h-[200px] pl-[42px] pt-[33px] w-[435px]'>
                <h3 className='text-[#0B8E53] font-medium text-[30px]'>Vision</h3>
                <span className='!w-[351px] text-[#1A1A1A] font-light text-[16px]'>To be the leading partner in building resilient, adaptive ecosystems that redefine success for businesses and societies. </span>
            </div>
        </div>
        <img src="/assets/who_we_are.png" alt="" className='w-[746px]'/>
      </div>
    </div>
  )
}

export default WhoWeAre
