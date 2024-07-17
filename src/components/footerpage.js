import React from 'react';
import { AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import { TiSocialFacebook } from 'react-icons/ti';
import "./footerpage.css";

function Footer() {
  return (
    <footer className='footer'>
      <div className='section-container'>
        <div className='grid-one'>
          {/* Social Icons */}
          <div className='social-icons'>
            <TiSocialFacebook className='icon' />
            <AiOutlineTwitter className='icon' />
            <AiFillYoutube className='icon' />
          </div>
        </div>
        {/* Footer Links */}
        <div className='footer-links'>
          <div className='footer-column'>
            <span className='link-title'>Information</span>
            <ul>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>Explore</a></li>
              <li><a href='#'>Flight Status</a></li>
              <li><a href='#'>Travel</a></li>
              <li><a href='#'>CheckIn</a></li>
              <li><a href='#'>Manage Your Booking</a></li>
            </ul>
          </div>
          <div className='footer-column'>
            <span className='link-title'>Quick Guide</span>
            <ul>
              <li><a href='#'>FAQ</a></li>
              <li><a href='#'>How To</a></li>
              <li><a href='#'>Features</a></li>
              <li><a href='#'>Baggage</a></li>
              <li><a href='#'>Route Map</a></li>
              <li><a href='#'>Our Communities</a></li>
            </ul>
          </div>
          <div className='footer-column'>
            <span className='link-title'>Information</span>
            <ul>
              <li><a href='#'>Chauffeur</a></li>
              <li><a href='#'>Our Partners</a></li>
              <li><a href='#'>Destination</a></li>
              <li><a href='#'>Careers</a></li>
              <li><a href='#'>Transportation</a></li>
              <li><a href='#'>Programme Rules</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
