import React, { useState } from 'react';
import '../styles/NavBar.css'; // The CSS file for NavBar styling

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">MyChatbot</h1>
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item"><a href="#home" className="navbar-link">Home</a></li>
          <li className="navbar-item"><a href="#about" className="navbar-link">About</a></li>
          <li className="navbar-item"><a href="#services" className="navbar-link">Services</a></li>
          <li className="navbar-item"><a href="#contact" className="navbar-link">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
