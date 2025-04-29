import React from 'react'
import HeroSection from './HeroSection'
import WhoWeAre from './WhoWeAre'
import CoreServices from './CoreServices'
import Values from './Values'
import WhyChoose from './WhyChoose'
import Clients from './Clients'
import Footer from './Footer'

function Homepage() {
  return (
    <div className=''>
      <HeroSection/>
      <WhoWeAre/>
      <CoreServices/>
      <Values/>
      <WhyChoose/>
      <Clients/>
      <Footer/>
    </div>
  )
}

export default Homepage
