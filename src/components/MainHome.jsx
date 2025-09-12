import './paginas/home/Home.css';
import React from "react";
import Book from "../img/book.png"
import ABC from "../img/abc.png"
import Numero from "../img/numero.png"
import Lampada from "../img/lampada.png"

function MainHome() {
  return (
    <main className="col-md-12 ms-sm-auto col-lg-12 px-md-4 container-fluid">

      <div className="row justify-content-between mt-3 d-flex ">

        <div className='row p-2 row-cols-1 row-cols-md-3 row-cols-lg-4 g-3 '>

          <div className="col d-flex ">
            <div className='card-inicial'>
              <div className="row justify-content-center align-items-center ">
                <img src={Book} className='img-card align-items-center justify-content-center' alt="" srcset="" />
                <p>Leitura</p>
              </div>
            </div>
          </div>

          <div className="col d-flex">
            <div className='card-inicial'>
              <div className="row justify-content-center align-items-center">
                <img src={Numero} className='img-card align-items-center justify-content-center' alt="" srcset="" />
                <p>Números</p>
              </div>
            </div>
          </div>

          <div className="col d-flex">
            <div className='card-inicial'>
            <div className="row justify-content-center align-items-center">
              <img src={ABC} className='img-card align-items-center justify-content-center' alt="" srcset="" />
              <p>Alfabetização</p>
            </div>
            </div>
          </div>

          <div className="col d-flex">
            <div className='card-inicial'>
            <div className="row justify-content-center align-items-center">
              <img src={Lampada} className='img-card align-items-center justify-content-center' alt="" srcset="" />
              <p>Raciocínio</p>
            </div>
            </div>
            
          </div>

        </div>



        {/* Sobre a empresa */}

        <div className="container-fluid bg-primary mt-5">
          <div className="row">
            <div className="col-md-8 bg-warning">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, reprehenderit architecto ad quisquam alias sequi! Possimus dolorum, natus voluptatum eaque distinctio veniam quasi, assumenda obcaecati in enim sit rem blanditiis?
            </div>
            <div className="col-md-4 bg-primary">2</div>
          </div>
        </div>


      </div>
    </main>
  );
}

export default MainHome;