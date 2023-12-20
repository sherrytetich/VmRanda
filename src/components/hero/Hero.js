import "./hero.css"

import React from 'react'
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero" id="hero">
     <div className="mask">
        <img className="into-img" src="/images/background.png" alt=""/>
     </div>
     <div className="content">
        <h2 className="first">Are you tired of searching for good advocates?</h2>
        <h2>Are you looking for the truth and justice?</h2>
        <h1>VmRanda & CO.advocates has you covered</h1>
     
    <div>
        <Link to="/projects" className="btn">Services</Link>
        <Link to="/contact" className="btn">ContactUs</Link>
    </div>
    </div>

    </div>
  )
}

export default Hero;