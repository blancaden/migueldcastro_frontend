import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="contact-info">
          <p><i className="fas fa-map-marker-alt"></i> Calle Palas Atenea, 31, Almería</p>
          <p><i className="fas fa-phone-alt"></i> +34 675 281 352</p>
          <p><i className="fas fa-envelope"></i> dime@migueldecastro.org</p>
        </div>
        <div className="social-icons">
          <img src="/img/Linkedin.svg" alt="LinkedIn" />
          <img src="/img/Facebook.svg" alt="Facebook" />
          <img src="/img/Instagram.svg" alt="Instagram" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;