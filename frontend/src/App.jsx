import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Doctors from './pages/doctors'
import Appointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import Login from './pages/Login'
import MyProfile from './pages/MyProfile'
import NavBar from './componenets/NavBar'
import Contact from './pages/Contact'
import Footer from './componenets/Footer'

const App = () => {
  return (
    <div className='mx-2 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-24 2xl:mx-32'>

      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About/>}/>
        <Route path='/Doctors' element={<Doctors/>}/>
        <Route path='/Doctors/:speciality' element={<Doctors/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/MyAppointments' element={<Appointments/>}/>
        <Route path='/appointment/:docID' element={<Appointment/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/MyProfile' element={<MyProfile/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>

      <Footer />
    </div>
  )
}

export default App
