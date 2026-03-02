import React from 'react'
import {specialityData} from '../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
      <h1 className='text-3xl font-medium'>Find by Speciality</h1>
      <p className='w-1/3 text-center text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, dicta sapiente accusantium laborum officiis voluptatum.</p>
      <div className='flex sm:justify-center gap-4 overflow-scroll w-full pt-5'>
        {specialityData.map((item, index) => {
            return (
                <Link onClick={()=>{scrollTo(0,0)}} className='flex flex-col items-center cursor-pointer text-xs shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/Doctors/${item.speciality}`}>
                    <img className='w-16 sm:w-24 mb-2' src={item.image} alt="" />
                    <p>{item.speciality}</p>
                </Link>
            )
        })}
      </div>
    </div>
  )
}

export default SpecialityMenu
