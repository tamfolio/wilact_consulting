import React from 'react'

function Navbar() {
  return (
    <div className='w-full py-3 flex items-center justify-between'>
      <img src="/assets/logo.png" alt="" className='w-[250px]' />
      <div className='flex gap-[30px]'>
        <span className='font-semibold text-black text-[16px]'>About Us</span>
        <span className='font-semibold text-black text-[16px]'>Core Services</span>
        <span className='font-semibold text-black text-[16px]'>Our Values</span>
        <span className='font-semibold text-black text-[16px]'>Clients</span>
      </div>
      <div className='bg-[#FFCC00] py-[15px] px-[30px] rounded-[30px]'>
        <span className='text-white text-[16px] font-medium'>Contact Us</span>
      </div>
    </div>
  )
}

export default Navbar
