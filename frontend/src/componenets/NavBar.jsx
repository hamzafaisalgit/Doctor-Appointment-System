import React, { useState, useEffect } from 'react'
import {assets} from '../assets/assets_frontend/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const NavBar = () => {

  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showMenu]);

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img onClick={()=>{navigate('/')}} className='w-44 cursor-pointer' src={assets.logo} alt="" />
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
        <img onClick={()=>setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />
        
        {/* ----- Mobile Menu ----- */}
        <div className={`md:hidden absolute top-0 right-0 bottom-0 z-20 overflow-hidden bg-white transition-all ${showMenu ? 'w-full' : 'w-0'}`}>
          <div className='flex items-center justify-between px-5 py-6'>
            <img className='w-36' src={assets.logo} alt="" />
            <img className='w-7 cursor-pointer' onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="" />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <NavLink onClick={() => setShowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>Home</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/Doctors'><p className='px-4 py-2 rounded inline-block'>All Doctors</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/About'><p className='px-4 py-2 rounded inline-block'>About</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/Contact'><p className='px-4 py-2 rounded inline-block'>Contact</p></NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar
