import "./navbar.css"
import {Link} from 'react-scroll'
// import {Link} from 'react-router-dom'
import React,{useState} from 'react'
import{FaBars, FaTimes} from 'react-icons/fa';

function Navbar() {
    const [click,setClick] = useState(false);
    const handleclick = () => setClick(!click);
    const[color,setColor] = useState(false);
    const changeColor= () =>{
        if(window.scrollY >= 100){
            setColor(true);
        }else{
            setColor(false);
        }
    }
    window.addEventListener("scroll",changeColor);

  return (
    <div className="header">
        <Link to="hero" spy={true} smooth={true} offset={50} duration={500}>
        <img className='img-logo' src='/images/logowhite.png' />
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"} >
            <li>
                <Link to="hero" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
            </li>
            <li>
                <Link to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link>
            </li>
            <li>
                <Link to="services" spy={true} smooth={true} offset={50} duration={500}>Services</Link>
            </li>
            <li>
                <Link to="advocateProfile" spy={true} smooth={true} offset={50} duration={500}>AdvocateProfile</Link>
            </li>
            <li>
                <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>ContactUs</Link>
            </li>
        </ul>
        <div className="hambugger" onClick={handleclick}>
            {click ?<FaTimes size={20} style={{color:'#fff'}}/>:(<FaBars size={20} style={{color:'#fff'}}/>) }
            


        </div>
      
    </div>

  )
}

export default Navbar
