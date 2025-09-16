// fontes:
// https://developer.mozilla.org/pt-BR/docs/Web/CSS/box-shadow
// https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow
// https://www.w3.org/Style/Examples/007/text-shadow.pt_BR.html
// https://youtu.be/pn4xhOmmMVE?si=IrViPwoosIKFbpm4


import './paginas/home/Home.css';
import React from "react";
import Book from "../img/book.png"
import ABC from "../img/abc.png"
import Numero from "../img/numero.png"
import Lampada from "../img/lampada.png"
import Crianca from "../img/imagem-home.png"
import Usuario1 from "../img/1.png"
import Usuario2 from "../img/2.png"
import Usuario3 from "../img/3.png"
import Usuario4 from "../img/4.png"
import Usuario5 from "../img/5.png"
import Usuario6 from "../img/6.png"


function MainHome() {
  return (
    <main className="col-md-12 ms-sm-auto col-lg-12 px-md-4 container-fluid">
      
      <div className='container-fluid'> 
      <div class="custom-shape-divider-top-1758030568">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>
      </div>
      

      <div className="row justify-content-between mt-3 d-flex ">

        {/* topicos */}
        <div>
          <h2 className='titulo-inicial'>Por que nos escolher</h2>
        </div>

        <div className='row p-2 row-cols-1 row-cols-md-3 row-cols-lg-4 g-3'>
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

        <div className="container-fluid mt-5 mb-5">
          <div className="row">
            <div className="col-md-7 ">
              <h1 className='bem-vindo mt-5'>Bem-Vindo ao Stimula!</h1>
              <p className='paragrafo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore recusandae vero perspiciatis repellendus voluptate nostrum consectetur libero dolores quod fuga eligendi cumque esse, ratione necessitatibus at quia ipsum dolorem dolore.
                Reiciendis ut rerum sapiente, iste temporibus repudiandae vero, laborum ipsa tenetur ipsam ab consequatur eum nemo. Ad saepe assumenda incidunt sint optio ducimus exercitationem. Earum quas minus molestias eius maxime.Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore recusandae vero perspiciatis repellendus voluptate nostrum consectetur libero dolores quod fuga eligendi cumque esse, ratione necessitatibus at quia ipsum dolorem dolore.
                Reiciendis ut rerum sapiente, iste temporibus repudiandae vero, laborum ipsa tenetur ipsam ab consequatur eum nemo. Ad saepe assumenda incidunt sint optio ducimus exercitationem. Earum quas minus molestias eius maxime.</p>
            </div>
            <div className="col-md-5 ">
              <img src={Crianca} className=' sombra-img align-items-center justify-content-center' alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>


      {/* feedbacks */}

      <div>
        <h2 className='titulo-inicial mt-5'>O que falam da gente</h2>
      </div>

      <div class="main mb-5">
        <div class="full-boxer">
          <div class="comment-box">
            <div class="box-top">
              <div class="Profile">
                <div class="profile-image">
                  <img src={Usuario1} />
                </div>
                <div class="Name">
                  <strong>Ranidi Lochana</strong>
                </div>
              </div>
            </div>
            <div class="comment">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
          </div>

          <div class="comment-box">
            <div class="box-top">
              <div class="Profile">
                <div class="profile-image">
                  <img src={Usuario2} />
                </div>
                <div class="Name">
                  <strong>Ranidi Lochana</strong>
                </div>
              </div>
            </div>
            <div class="comment">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
          </div>

          <div class="comment-box">
            <div class="box-top">
              <div class="Profile">
                <div class="profile-image">
                  <img src={Usuario3} />
                </div>
                <div class="Name">
                  <strong>Ranidi Lochana</strong>
                </div>
              </div>
            </div>
            <div class="comment">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
          </div>

          <div class="comment-box">
            <div class="box-top">
              <div class="Profile">
                <div class="profile-image">
                  <img src={Usuario4} />
                </div>
                <div class="Name">
                  <strong>Senuda Dilwan</strong>
                </div>
              </div>
            </div>
            <div class="comment">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
          </div>

          <div class="comment-box">
            <div class="box-top">
              <div class="Profile">
                <div class="profile-image">
                  <img src={Usuario5} />
                </div>
                <div class="Name">
                  <strong>Rumali fernando</strong>
                </div>
              </div>
            </div>
            <div class="comment">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
          </div>

          <div class="comment-box">
            <div class="box-top">
              <div class="Profile">
                <div class="profile-image">
                  <img src={Usuario6} />
                </div>
                <div class="Name">
                  <strong>Midinu Thiranjana</strong>
                </div>
              </div>
            </div>
            <div class="comment">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* <div className='container  mb-5'>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </div> */}


    </main>
  );
}

export default MainHome;