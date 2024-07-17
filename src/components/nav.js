// // NavPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsPhoneVibrate } from 'react-icons/bs';
import { AiOutlineGlobal } from 'react-icons/ai';
import { CgMenuGridO } from 'react-icons/cg';
import './nav.css';
const NavPage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const showNavBar = () => {
    setIsNavOpen(true);
  };

  const hideNavBar = () => {
    setIsNavOpen(false);
  };

  return (
    <div className='totalnav'>
      {/* Toggle button for mobile view */}
      <div onClick={isNavOpen ? hideNavBar : showNavBar} className='togglebtn'>
        <CgMenuGridO className='icon' />
      </div>

      {/* Navbar section */}
      <div className={`navBarMenu ${isNavOpen ? 'showNavBar' : ''}`}>
        <ul className='menulist'>
          <li onClick={hideNavBar}><Link to="/">Home</Link></li>
          <li onClick={hideNavBar}><Link to="/support">About</Link></li>
          <li onClick={hideNavBar}><Link to="/info">Services</Link></li>
          <li onClick={hideNavBar}><Link to="/search">Search</Link></li>
          <li onClick={hideNavBar}><Link to="/contact">Contact Us</Link></li>
          {/* <li onClick={hideNavBar}><Link to="/fakeapi">seats</Link></li> */}
        </ul>
      </div>

      {/* Sign in and sign out buttons */}
      <div className="navbuttons">
        <Link to="/signpage" className="inbtn">Sign In</Link>
        <Link to="/signout" className="outbtn">Sign Out</Link>
      </div>

      {/* Logos and links section */}
      <ul className="navlogos">
        <li><BsPhoneVibrate />Support</li>
        <li><AiOutlineGlobal />Languages</li>
      </ul>
    </div>
  )
}

export default NavPage


