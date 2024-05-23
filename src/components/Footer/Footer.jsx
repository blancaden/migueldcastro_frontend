import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
    <div className='footer'>
    <div class="footer-content">
        
        <ul class="footer-links">
            <li><a href="/">Calle Palas Atenea, 31 Almería</a></li>
            <li><a href="/about">+34 675 281 352</a></li>
            <li><a href="/contact">dime@migueldecastro.org</a></li>
        </ul>

        <div className="footer-right">
          <img src="public\img\linkedin.svg" alt="" />
          <img src="public\img\facebook.svg" alt="" />
          <img src="public\img\instagram.svg" alt="" />
        </div>
    </div>
  </div>
    </>
  );
};
export default Footer;