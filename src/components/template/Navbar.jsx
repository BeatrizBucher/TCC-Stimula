import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logostimula.png"

function Navbar() {
  return (
    <header className="navbar navbar-expand-md nav-custom sticky-top p-2 shadow-sm">
      <div className="container-fluid">
        <div className="d-flex align-items-center order-1">
          <button className="btn btn-link nav-botao d-md-none me-2" data-bs-toggle="offcanvas" data-bs-target="#navbarNav">
            <i className="bi bi-list h4"></i>
          </button>
          <img src={logo} alt="logo" className=" me-1 " style={{ width: "70px", height: "65px", objectFit: "cover" }} />
          <a href="/home" className="logo-brand d-flex align-items-center text-decoration-none">
            <span className="text-dark fw-semibold">Stimula</span>
          </a>
        </div>
      </div>
      <div class="collapse navbar-collapse ms-5 " id="navbarNav">

        <ul class="navbar-nav">
          <Link to="/home" className="nav-item me-1 nav-link d-inline-flex text-decoration-none rounded text-white nav-estilo">Home</Link>
          <Link to="/home" className="nav-item me-1 nav-link d-inline-flex text-decoration-none rounded text-white nav-estilo">Games</Link>
          <Link to="/historia" className="nav-item me-1 nav-link d-inline-flex text-decoration-none rounded text-white nav-estilo">Histórias</Link>
          <Link to="/quadro" className="nav-item me-1 nav-link d-inline-flex text-decoration-none rounded text-white nav-estilo">Quadro</Link>
          <Link to="/cadastrar-contrato" className="nav-item me-1 nav-link d-inline-flex text-decoration-none rounded text-white nav-estilo">Tarefas</Link>
          <Link to="/cadastrar-contrato" className="nav-item me-4 nav-link d-inline-flex text-decoration-none rounded text-white nav-estilo">Teste</Link>
         </ul>
         <ul class="navbar-nav">
          <Link to="/" className="nav-item me-5 nav-link d-inline-flex text-decoration-none rounded text-white nav-entrar">Entrar</Link>   
        </ul>
      </div>
      

    </header>
  );
}

export default Navbar;