import React from 'react'
import "./aboutus.css"
import {Link} from 'react-router-dom'

function Aboutus() {
  return (
    <div className="about" id='about'>
        <div className='left'>
            <h1 className='firs'>Who are we? </h1>
            <h2 className='firs'> Registered Notary Public and Commissioner for Oaths</h2>
            <p className='firs'>We are a well established lawfirm
                located at kayole junction with over 
                6 years of legal practice. We offer
                state-of-the-art services at affordable 
                prices. You deserve the best!
            </p>
            <Link to='/contact'>
                <button className='btn'>Contact Us</button>
            </Link>
        </div>
        <div className='right'>
          <div className='img-contain'>
           <img src='/images/books.jpg' alt='mm'/>
        </div>
        </div>

    </div>
  )
}

export default Aboutus
