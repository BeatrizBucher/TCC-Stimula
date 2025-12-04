import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logostimula.png";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  const iconStyle = { color: '#fff', fontSize: '24px' };

  return (
    <header className="navbar navbar-expand-md nav-custom sticky-top p-2">
      <div className="container-fluid">
        <div className="d-flex align-items-center order-1">
          <button className="btn btn-link nav-botao d-md-none me-2" data-bs-toggle="offcanvas" data-bs-target="#navbarNav">
            <i className="bi bi-list h4"></i>
          </button>
          <img src={logo} alt="logo" className=" me-1 " style={{ width: "70px", height: "100px", objectFit: "cover" }} />
        </div>
      </div>
      <div className="collapse navbar-collapse ms-5 " id="navbarNav">
        <ul className="navbar-nav">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="me-3">
              <FaFacebook style={iconStyle} />
            </Link>
            <Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="me-3">
              <FaInstagram style={iconStyle} />
            </Link>
            <Link to="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="me-5">
              <FaTwitter style={iconStyle} />
            </Link>
          </div>
        </ul>
        
      </div>
    </header>
  );
}

export default Footer;
