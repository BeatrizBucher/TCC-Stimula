// fontes:
// https://developer.mozilla.org/pt-BR/docs/Web/CSS/box-shadow
// https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow
// https://www.w3.org/Style/Examples/007/text-shadow.pt_BR.html
// https://youtu.be/pn4xhOmmMVE?si=IrViPwoosIKFbpm4
// https://youtu.be/J5r_1vB3MWg?si=chKJ0rMulQEOarah

import './paginas/home/Home.css';
import { useState } from "react";
import { notificacao, notificacaoErro, notificacaoSucesso } from "./Notificacoes";
import Book from "../img/book.png"
import ABC from "../img/abc.png"
import Numero from "../img/numero.png"
import Lampada from "../img/lampada.png"
import Crianca from "../img/imagem-home.png"
import Usuario1 from "../img/1.png"
import Usuario2 from "../img/2.png"
import Usuario3 from "../img/3.png"
import Usuario4 from "../img/4.png"

function MainHome() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [observacao, setObservacao] = useState('');

  async function enviarMensagem(event) {
    event.preventDefault();

    let contato = {
      nome: nome,
      email: email,
      observacao: observacao
    }

    contato = JSON.stringify(contato);
    console.log(contato)
    try {
      let cadastro = await fetch('http://localhost:3001/cadastrarMensagem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: contato
      })

      if (cadastro.status === 201) {
        setEmail("");
        setNome("");
        setObservacao("");
        notificacaoSucesso();
      }

    } catch (erro) {
      notificacaoErro();
    }
  }

  return (
    <main className="col-md-12 ms-sm-auto col-lg-12 px-md-4 container-fluid">

      <div className='container-fluid'>
        <div class="custom-shape-divider-top-1758030568">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
          </svg>
        </div>
      </div>

      <div className="row mt-3 d-flex ">

        {/* topicos */}
        <div>
          <h2 className='titulo-inicial mt-5'>Por que nos escolher?</h2>
        </div>

        <div className='row p-2 row-cols-1 row-cols-md-3 row-cols-lg-4 g-3'>

          <div className="col d-flex">
            <div className="card-teste">
              <div className="img-box">
                <img src={Book} alt="Sample photo" />
              </div>
              <h5 className='card-titulo'>Leitura</h5>
              <div className="content-teste">
                <h2>Leitura</h2>
                <p>Estimula a imaginação e compreensão de textos de forma divertida.</p>
              </div>
            </div>
          </div>

          <div className="col d-flex">
            <div className="card-teste">
              <div className="img-box">
                <img src={Numero} alt="Sample photo" />
              </div>
              <h5 className='card-titulo'>Números</h5>
              <div className="content-teste">
                <h2>Números</h2>
                <p>Desenvolve o raciocínio lógico e o aprendizado matemático.</p>
              </div>
            </div>
          </div>

          <div className="col d-flex">
            <div className="card-teste">
              <div className="img-box">
                <img src={ABC} alt="Sample photo" />
              </div>
              <h5 className='card-titulo'>Alfabetização</h5>
              <div className="content-teste">
                <h2>Alfabetização</h2>
                <p>Facilita o reconhecimento das letras e a construção de palavras.</p>
              </div>
            </div>
          </div>

          <div className="col d-flex">
            <div className="card-teste">
              <div className="img-box">
                <img src={Lampada} alt="Sample photo" />
              </div>
              <h5 className='card-titulo'>Raciocínio</h5>
              <div className="content-teste">
                <h2>Raciocínio</h2>
                <p>Atividades que fortalecem a lógica e a resolução de problemas.</p>
              </div>
            </div>
          </div>


        </div>


        {/* Sobre a empresa */}

        <div className="container-fluid mt-5 mb-5">
          <div className="row">
            <div className="col-md-7 ">
              <h1 className='bem-vindo mt-5'>Bem-Vindo ao Stimula!</h1>
              <p className='paragrafo'>
                 O Stimula nasceu com a missão de criar um espaço acolhedor, inclusivo e divertido para apoiar o desenvolvimento de crianças com TEA por meio da tecnologia. Acreditamos que aprender pode ser uma experiência leve, lúdica e cheia de descobertas, e por isso reunimos em um só lugar atividades que unem jogos e imaginação. Aqui você encontrará jogos de memória, quizzes de associação que estimulam a atenção e o raciocínio, além de um quadro interativo de rotina que incentiva a organização de forma simples e prática. Também oferecemos histórias encantadoras, criadas especialmente para despertar a curiosidade, a imaginação e a compreensão das emoções. Nosso objetivo é mostrar que cada criança tem seu próprio ritmo e potencial, e que a inclusão pode ser construída com ferramentas criativas, acessíveis e envolventes. O Stimula é mais do que uma plataforma: é um convite para brincar, aprender e crescer em um ambiente seguro, colorido e cheio de possibilidades.
              </p>
            </div>
            <div className="col-md-5 ">
              <img src={Crianca} className=' sombra-img align-items-center justify-content-center mt-5' alt="" srcset="" />
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
                  <strong>Paula Lopes</strong>
                </div>
              </div>
            </div>
            <div class="comment">
              <p>
                O Stimula foi um grande aliado no aprendizado do meu filho. Ele se envolve com as histórias e os jogos de um jeito leve e divertido.
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
                  <strong>Marcos Rocha</strong>
                </div>
              </div>
            </div>
            <div class="comment">
              <p>
                Gostei muito da proposta! As atividades são simples, bem pensadas e realmente ajudam a desenvolver concentração e criatividade.
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
                  <strong>Julia Kudies</strong>
                </div>
              </div>
            </div>
            <div class="comment">
              <p>
                Percebi que as interações do site fazem diferença no dia a dia. Minha filha se sente motivada e adora participar dos desafios.
              </p>
            </div>
          </div>

          <div class="comment-box ">
            <div class="box-top">
              <div class="Profile">
                <div class="profile-image">
                  <img src={Usuario4} />
                </div>
                <div class="Name">
                  <strong>Victor Augusto</strong>
                </div>
              </div>
            </div>
            <div class="comment">
              <p>
                Eu gosto de jogar no Stimula! As histórias são legais e os joguinhos me deixam feliz. Quero sempre brincar e aprender mais!
              </p>
            </div>
          </div>

       


        </div>
      </div>

      {/* form */}

      <div class="contact-form-container mt-5 mb-5">
        <div class="content-form">
          <div class="left-side">
            <div class="address details">
              <i class="fas fa-map-marker-alt "></i>
              <div class="topic">Endereço</div>
              <div class="text-one">Rua das Anjos, 245 – Centro</div>
              <div class="text-two">Garça – SP, 17400-000</div>
            </div>
            <div class="phone details">
              <i class="fas fa-phone-alt "></i>
              <div class="topic">Telefone</div>
              <div class="text-one">14 99978-5615</div>
            </div>
            <div class="email details">
              <i class="fas fa-envelope "></i>
              <div class="topic">Email</div>
              <div class="text-one">stimulaempresa@gmail.com</div>
            </div>
          </div>

          <div class="right-side">
            <div class="topic-text">Envie uma mensagem para nós</div>
            <p>
              Sua comunicação é importante. Preencha os campos e nossa equipe responderá em breve.
            </p>
            <form onSubmit={enviarMensagem}>
              <div class="input-box mb-5">
                <label htmlFor="nome" className="form-label">Nome:</label>
                <input value={nome} onChange={(e) => setNome(e.target.value)}
                  type="text" placeholder="Nome" id="nome" required />
              </div>
              <div class="input-box mb-5">
                <label htmlFor="nome" className="form-label">Email:</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}
                  type="email" placeholder="Email" id="email" required />
              </div>
              <div class="input-box message-box mb-5">
                <label htmlFor="nome" className="form-label">Mensagem:</label>
                <textarea value={observacao} onChange={(e) => setObservacao(e.target.value)} id="observacao" placeholder="Mensagem" required></textarea>
              </div>


              <div className="button-form">
                <button type="submit" className="botao-cadastrar">
                  Enviar
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>


    </main>
  );
}

export default MainHome;