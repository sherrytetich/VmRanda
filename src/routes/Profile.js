import React from 'react'
import Advocateprof from '../components/advocateprof/Advocateprof'
import Navbar from '../components/Navbar/Navbar'
import ContactUs from '../components/contactus/ContactUs'
import Footer from '../components/footer/Footer'

const Profile = () => {
  return (
    <div>
        <Navbar/>
        <Advocateprof/>
        <ContactUs/>
        <Footer/>

    </div>
  )
}

export default Profile