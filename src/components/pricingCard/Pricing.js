import './pricing.css'
import {Link} from 'react-router-dom'

import React from 'react'

function Pricing() {
  return (
    <div  className='pricing' id='services'>
        <div className='card-container'>
            <div className='card'>
                <h3>Criminal law</h3>
                <span className='bar'></span>
                <p> we deal in criminal law</p>
                <p>- No need to struggle-</p>
                <p>- we are always here -</p>
                
                <Link to="/contact" className='btn'>
                    Contact us today
                </Link>

            </div>

            <div className='card'>
                <h3>Insurance law</h3>
                <span className='bar'></span>
                <p>- we also deal in -</p>
                <p>- insurance law -</p>
                <p>-today -</p>
               
                <Link to="/contact" className='btn'>
                Contact us today
                </Link>

            </div>

            <div className='card'>
                <h3>Land law</h3>
                <span className='bar'></span>
                <p>- one two three -</p>
                <p>- four five six -</p>
                <p>- Seven eight nine -</p>
                
                <Link to="/contact" className='btn'>
                Contact us today
                </Link>

            </div>


        </div>
      
    </div>
  )
}

export default Pricing
