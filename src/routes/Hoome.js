import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/hero/Hero'
import Footer from '../components/footer/Footer'
import Aboutus from '../components/aboutus/Aboutus'
import Pricing from '../components/pricingCard/Pricing'
import Advocateprof from '../components/advocateprof/Advocateprof'
import ContactUs from '../components/contactus/ContactUs'

const Hoome = () => {
  return (
    <div>
     <Navbar/>
      <Hero/>
      <Aboutus/>
      <Pricing/>
      <Advocateprof/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default Hoome