import React from 'react';
import logo from '../assets/Assignment-logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer bg-base-200 text-base-content p-10">
        <aside>
            <img src={logo} alt="" />
        
          <p>
            Assignment related website that
            <br />
            providing service  since 2020
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">About Us</h6>
          <li>Collaborative Learning Platform</li>
          <li>Easy Assignment Management</li>
          <li>Secure & User-Friendly</li>
         
        
        </nav>
        <nav>
          <h6 className="footer-title">Contact Us</h6>
          <li><a href="https://mail.google.com/mail">zahidhosen203@gmail.com</a></li>
          <li>8801793397830</li>
          <li>Whats Up</li>
          
         
        </nav>
        <nav>
          <h6 className="footer-title">Links</h6>
         <li><Link to={`/`}>Home</Link></li> 
         <li> <Link to={`/assignPage`}>Assignment Page</Link></li>
         <li><Link to={`/createAssign`}>Create Assignment</Link></li>
          
          
       
        </nav>
      </footer>
    );
};

export default Footer;