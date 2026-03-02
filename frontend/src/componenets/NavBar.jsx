import React from 'react'
import { useState } from 'react'
import {assets} from '../assets/assets_frontend/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const NavBar = () => {

  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img className='w-44 cursor-pointer' src={assets.logo} alt="" />
      <ul className='md:flex items-start gap-5 justify-around hidden font-medium'>
        <NavLink to={'/'}>
            <li className='py-1'>Home</li>
            <hr className='border-none outline-none h-0.5 w-3/5 m-auto bg-[#5F6FFF] hidden'/>
        </NavLink>
        <NavLink to={'/Doctors'}>
            <li className='py-1'>All Doctors</li>
            <hr className='border-none outline-none h-0.5 w-3/5 m-auto bg-[#5F6FFF] hidden'/>
        </NavLink>
        <NavLink to={'/About'}>
            <li className='py-1'>About</li>
            <hr className='border-none outline-none h-0.5 w-3/5 m-auto bg-[#5F6FFF] hidden'/>
        </NavLink>
        <NavLink to={'/Contact'}>
            <li className='py-1'>Contact</li>
            <hr className='border-none outline-none h-0.5 w-3/5 m-auto bg-[#5F6FFF] hidden'/>
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        {
          token
          ? <div className='flex items-center gap-2 group relative cursor-pointer'>
            <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
            <img className='w-2.5' src={assets.dropdown_icon} alt="" />
            <div className='absolute top-0 right-0 text-base pt-14 font-medium text-gray-600 z-20 hidden group-hover:block'>
              <div className='min-w-48 flex flex-col bg-stone-100 rounded  gap-4 p-4'>
                <p onClick={()=>{navigate('/MyProfile')}} className='hover:text-black cursor-pointer'>My Profile</p>
                <p onClick={()=>{navigate('/MyAppointments')}} className='hover:text-black cursor-pointer'>My appointments</p>
                <p onClick={()=>{setToken(false)}} className='hover:text-black cursor-pointer'>Logout</p>
              </div>
            </div>
          </div>
          :
          <button onClick={()=>{
            navigate('/Login')
          }} className=' cursor-pointer prim white py-3 px-8 rounded-full font-light hidden md:block color'>Create account</button>
        }
      </div>
    </div>
  )
}

export default NavBar
