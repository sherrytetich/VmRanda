import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/footer/Footer'
import Hero from '../components/hero/Hero'
import Aboutus from '../components/aboutus/Aboutus'
import Pricing from '../components/pricingCard/Pricing'
import Advocateprof from '../components/advocateprof/Advocateprof'
import ContactUs from '../components/contactus/ContactUs'

function About() {
  return (
    <div>
      <Navbar/>
      <Aboutus/>
      <Pricing/>
      <Advocateprof/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default About
