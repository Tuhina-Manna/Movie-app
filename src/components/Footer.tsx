import React from 'react';
import './Footer.css'; // For styling (you can customize this)

interface FooterProps {
  // You can add props here if needed, like links or other data
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>CineDuniya</h2>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div><br/>
        <p>&copy; {new Date().getFullYear()}, CineDuniya.com, Inc. or its affiliates</p>      
      </div>
    </footer>
  );
}

export default Footer;
