import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap prim rounded-lg px-6 md:px-10 lg:px-20'>
      {/* Left Side */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        <p className='text-3xl md:text-4xl lg:text-5xl white leading-tight md:leading-tight lg:leading-tight'>Book Appointments <br /> With Trusted doctors</p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-sm font-light white'>
            <img className='w-28' src={assets.group_profiles} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br className='hidden sm:block' /> Debitis eveniet non fugit maxime. Maxime dolorum nam ratione atque, laborum soluta?</p>
        </div>
        <a href="speciality" className='flex items-center bg-white px-8 py-3 text-gray-600 rounded-full text-sm my-auto mx-auto hover:scale-105 transition-all duration-300' href="">Book Appointment <img className='w-3' src={assets.arrow_icon} alt="" /></a>
      </div>

      {/* Right Side */}
      <div className='md:w-1/2 relative'>
        <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
      </div>
    </div>
  )
}

export default Header
