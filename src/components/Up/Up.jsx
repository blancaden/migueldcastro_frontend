import React, { useState, useEffect } from 'react';
import './Up.css';

const Up = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 20) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleClick}
      className="back-to-top"
      style={{ display: showButton ? 'block' : 'none' }}
    >
      <img src="/public/img/up-img.svg" alt="up" />
    </button>
  );
};

export default Up;
