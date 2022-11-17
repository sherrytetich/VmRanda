import "./footer.css"
import React from 'react'
import {FaHome,FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"


function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={30} style={{color:"#fff",
            marginRight:"2rem"
            }}/><div>
            <p>Kayole Junction,Junction Plaza</p>
            <p>Nairobi</p>
        </div>
            
            </div>
            <div className="phone">
            <h4>
            <FaPhone size={20} style={{color:"#fff",
            marginRight:"2rem"
            }}/> 072314232</h4>
            
            </div>
            <div className="email">
            <h4>
            <FaMailBulk size={20} style={{color:"#fff",
            marginRight:"2rem"
            }}/> alvin@gmail.com</h4>
            
            </div>

        </div>
        <div className="right">
            <h4>About the company</h4>
            <p>
                This is among the best Law firms within
                nairobi area. Our customer service is
                exemplary starting from the receiption 
                to the advocates themselves. 
            </p>
            <div className="social">
            <FaFacebook size={20} style={{color:"#fff",
            marginRight:"2rem"
            }}/>
             <FaTwitter size={20} style={{color:"#fff",
            marginRight:"2rem"
            }}/>
             <FaLinkedin size={20} style={{color:"#fff",
            marginRight:"2rem"
            }}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
