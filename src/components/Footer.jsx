import React from 'react'
import { NavLink } from 'react-router-dom';
import '../index.css';

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
        <nav className='d-flex justify-content-center text'>
            <span>Connect with us</span>
            <NavLink to="www.google.com" className='links'>Instagram</NavLink>
            <NavLink to="www.google.com" className='links'>Facebook</NavLink>
            <NavLink to="www.google.com" className='links'>Linked In</NavLink>
            <NavLink to="www.google.com" className='links'>Instagram</NavLink>
            <span>Phone:- 9999999999 </span>
            <span>BITS Hyderabad Campus</span>
            <div className="copyrights">
          &copy; 2023 <NavLink to="/" className='links'> E-Commerce Store</NavLink> - All Rights Reserved.
        </div>
        </nav>

        </div>
    </div>
  )
}

export default Footer;