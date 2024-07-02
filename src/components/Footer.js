import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
  return (
<footer className="footer">
    
      <div className="footer-cta">
        <h1>Create Personalized Short Links Today</h1>
        <p>Make your links shorter and mesmerize your audience into clicking them</p>
        <button className="cta-button">Explore Our Pricing ✨</button>
      </div>
      
      <div className="footer-container">
        <div className="footer-logo">
          <img src="path-to-logo.png" alt="Logo" />
          <p>info@gsl.com</p>
        </div>
        <div className="footer-links">
          <div>
            <h4>Product</h4>
            <ul>
              <li><a href="#">Features</a></li>
              <li><a href="#">Apps & Integrations</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li><a href="#">API for developers</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4>About us</h4>
            <ul>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">About Company</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4>Community</h4>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Help Center</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
