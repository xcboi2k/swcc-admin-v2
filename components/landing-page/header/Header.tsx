import React from 'react'
import Image from 'next/image'

import LandingPageImage1 from '@/public/landing-page-images/landing-image-1.jpeg'
import LandingPageImage2 from '@/public/landing-page-images/landing-image-2.jpg'

const Header = () => {
  return (
    <div className="w-full relative">
      <div className="absolute w-full h-full top-0 left-0 bg-[#243447BF] z-20"></div>
        <div className="absolute w-full h-full top-0 left-0 bg-[#243447BF] z-10">
          {/* <img src="https://placehold.co/1080x1920" alt="landing" className="w-full h-full object-cover"/> */}
          <Image src={LandingPageImage2} alt='landing' className="w-full h-full object-cover" height={1080} width={1920}/>
        </div>
        <div className="flex flex-col justify-center z-40 relative px-20 py-20">
          <div className="mb-[30px]">
            <div className="text-[60px] font-bold text-white text-center mt-8 w-[90%] mx-auto">
              Welcome to 
            </div>
            <div className="text-[80px] font-bold text-white text-center mt-2 w-[90%] mx-auto">
              Star Wars Collectible Companion Admin
            </div>
            <div className="text-[24px] text-white text-center mt-12 w-[55%] mx-auto">
              Where you can manage the action figure database
            </div>
          </div>
      </div>
    </div>
  )
}

export default Header