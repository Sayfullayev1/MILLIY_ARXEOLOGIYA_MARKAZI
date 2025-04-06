import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './navbarComponent.scss';

export default function NavbarComponent() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/uz'); // Default language can be set to 'en'
    }
  }, [location, navigate]);

  return (
    <nav className="navbar">
      {/* <ul className="navLinks">
        <li><a href="#home" className="link">Home</a></li>
        <li><a href="#about" className="link">About</a></li>
        <li><a href="#services" className="link">Services</a></li>
        <li><a href="#contact" className="link">Contact</a></li>
      </ul> */}
    </nav>
  );
}
