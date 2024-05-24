import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="contact-info">
          <p><img src="/img/location.svg" alt="Location" /><span>Calle Palas Atenea, 31, Almería</span></p>
          <p><img src="/img/whatsapp.svg" alt="Whatsapp" /><span>+34 675 281 352</span></p>
          <p><img src="/img/email.svg" alt="Email" /><span>dime@migueldecastro.org</span></p>
        </div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/miguel-de-castro-carranza-34004b67/">
            <img src="/img/Linkedin.svg" alt="LinkedIn" />
          </a>
          <a href="https://www.facebook.com/miguel.decastrocarranza/">
            <img src="/img/Facebook.svg" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/migueldecc/">
            <img src="/img/Instagram.svg" alt="Instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
