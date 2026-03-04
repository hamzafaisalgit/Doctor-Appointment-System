import React, { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets'

const MyProfile = () => {

  const [userDate, setUserData] = useState({
    name:"Edward Vincent",
    image: assets.profile_pic,
    email: "mhamzafaisal2214@gmail.com",
    phone: "+92-xxx-xxxx",
    address: {
      line1:"Nust Universit",
      line2:"Islamabad, Pakistan"
    }
  })
  return (
    <div>
      
    </div>
  )
}

export default MyProfile
