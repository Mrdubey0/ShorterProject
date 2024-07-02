import React, { useState, useEffect } from 'react';
import '../Styles/Navbar.css';

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // if scroll down, hide the navbar
      setShow(false);
    } else {
      // if scroll up, show the navbar
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${show ? 'show' : 'hide'}`}>
      <div className="navbar-container">
        <a href="#" className="navbar-logo">LOGO</a>
        <ul className="nav-menu">
          <li className="nav-item"><a href="#" className="nav-links">Features</a></li>
          <li className="nav-item"><a href="#" className="nav-links">Pricing</a></li>
          <li className="nav-item"><a href="#" className="nav-links">About</a></li>
          <li className="nav-item"><a href="#" className="nav-links">Contact</a></li>
          
        </ul>
      
        <a href="#" className="nav-button1">Get Started ✨</a>
        <a href="#" className="nav-button2">Login</a>
       
      </div>
    </nav>
  );
}

export default Navbar;
