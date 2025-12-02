import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logostimula.png';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  const iconStyle = { color: '#fff', fontSize: '24px' };

  return (
    <header className="navbar navbar-expand-md nav-custom sticky-top p-2">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo sempre visível */}
        <img src={logo} alt="logo" className="me-1" style={{ width: '70px', height: '100px', objectFit: 'cover' }} />
        
        {/* Ícones sempre visíveis, alinhados à direita */}
        <div className="d-flex align-items-center">
          <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="me-3">
            <FaFacebook style={iconStyle} />
          </Link>
          <Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="me-3">
            <FaInstagram style={iconStyle} />
          </Link>
          <Link to="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="me-3">
            <FaTwitter style={iconStyle} />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Footer;
