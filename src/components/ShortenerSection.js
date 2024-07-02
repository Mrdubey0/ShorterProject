import React from 'react';
import '../Styles/ShortenerSection.css';

const ShortenerSection = () => {
  return (
    <div className="shortener-section">
      <h1 className="shortener-title">What Would You Like To Create Today?</h1>
      <p className="shortener-subtitle">
        Our custom URL/link shortener is at your service. Get the shortest link and the most optimized QR code possible. Let's begin!
      </p>
      <div className="shortener-form">
        <input type="text" className="shortener-input" placeholder="Paste a link to shorten it" />
        <button className="shortener-button">Shorten ✨</button>
      </div>
      <p className="shortener-note">No credit card required. Your free plan includes</p>
      <div className="features">
        <div className="feature-item">✔️ It’s Free</div>
        <div className="feature-item">✔️ Fast</div>
        <div className="feature-item">✔️ Secure</div>
        <div className="feature-item">✔️ Long Term Link</div>
      </div>
    </div>
  );
}

export default ShortenerSection;
