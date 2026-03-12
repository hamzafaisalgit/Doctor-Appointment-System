import React, { useContext } from 'react'
import {AppContext} from '../context/AppContext'
const MyAppointments = () => {

  const {doctors} = useContext(AppContext) // Assuming you have a custom hook to fetch doctors
  return (
    <div>
      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My Appointments</p>
      {
        doctors.slice(0, 5).map((item, index) => (
          <div className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b" key={index}>
            <div>
              <img className="w-32 bg-indigo-50" src={item.image} alt={item.name} />
            </div>
            <div className="flex-1 text-sm text-zinc-600">
              <p className="font-semibold text-neutral-800">{item.name}</p>
              <p>{item.specialty}</p>
              <p className='text-zinc-700 font-medium mt-1'>Address:</p>
              <p className='text-xs'>{item.address.line1}</p>
              <p className='text-xs'>{item.address.line2}</p>
              <p classname='text-s mt-1'><span classname='text-sm text-neutral-700 font-medium'>Date & Time:</span> 1st March 2026 | 9pm</p>
            </div>
            <div></div>
            <div className='flex flex-col gap-2 justify-end'>
              <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-[#5f6fff] hover:text-white transition-all duration-300">Pay Online</button>
              <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-[#5f6fff] hover:text-white transition-all duration-300">Cancel Appointment</button>
            </div>
          </div>
        ))

      }
    </div>
  )
}

export default MyAppointments
