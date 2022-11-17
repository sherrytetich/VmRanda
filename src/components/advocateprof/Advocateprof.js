import './advocate.css'
import React from 'react'
import {Link} from 'react-router-dom';

const Advocateprof = () => {
  return (
    <div id='advocateProfile'>
    <div className='about'>
        <div className='left'>
            <h1>Veronica Wangui Randa</h1>
            <p>I'm an advocate of the high court
                with over 7 years in legal practice.
                Your case is in the right hands.
            </p>
            
        </div>
        <div className='right'>
            <div className='img-container'>
                <img className='img' src='/images/img2.jpg'></img>
            </div>

        </div>
    </div>

    <div className='about'>
        <div className='left'>
            <h1>Samuel Wanjohi</h1>
            <p>I'm an advocate of the high court
                with over 5 years in legal practice.
                Your case is in the right hands.
            </p>
            
        </div>
        <div className='right'>
            <div className='img-container'>
                <img className='img' src='/images/img2.jpg'></img>
            </div>

        </div>
    </div>
    

    </div>
  )
}

export default Advocateprof