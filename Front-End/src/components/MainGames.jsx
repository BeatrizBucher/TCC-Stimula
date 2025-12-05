import './paginas/Games/Games.css'
import React from "react";
import JodoDaMemoria from "../img/jododamemoria.png"
import QuizMatematica from "../img/quizmatematica.png"
import QuizPortugues from "../img/quizportugues.png"
import QuizAssociacao from "../img/quizformas.png"
import { Link } from 'react-router-dom';

function MainGames() {
    return (
        <main className="col-md-12 ms-sm-auto col-lg-12 px-md-4 container-fluid d-flex flex-column align-items-center">

 <div>
          <h1 className='titulo-inicial mt-4'>Games</h1>
        </div>

            <div className="row mt-2 justify-content-center mb-5">
                

                <div className="col-md-6 col-lg-3 mb-4">
                    <div class="card-games">
                        <img src={JodoDaMemoria} alt="jogo da memoria" />
                        <h1>Jogo da memória</h1>
                         <p className='mt-3'>Descubra onde cada figura está.
                            Encontre os pares escondidos.
                            Um desafio divertido para sua mente!</p>
                        <Link to="/nivel" class="btn-games">Jogar</Link>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3 mb-4">
                    <div class="card-games">
                        <img src={QuizMatematica} alt="quiz de matematica" />
                        <h1>Quiz de número</h1>
                        <p className='mt-3'>Conte, some e aprenda jogando.
                            Resolva desafios com os números.
                            Matemática nunca foi tão divertida!</p>
                        <Link to="/quizNumeros" class="btn-games">Jogar</Link>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3 mb-4">
                    <div class="card-games">
                        <img src={QuizPortugues} alt="quiz de portugues" />
                        <h1>Quiz de português</h1>
                        <p className='mt-3'>Explore letras e novas palavras.
                            Aprenda português brincando.
                            Um quiz cheio de descobertas!</p>
                        <Link to="/quizPortugues" class="btn-games">Jogar</Link>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3 mb-4">
                    <div class="card-games">
                        <img src={QuizAssociacao} alt="quiz de associação das formas" />
                        <h1>Associação de formas</h1>
                        <p className='mt-3'>Observe, compare e combine.
                            Junte as formas com seus nomes.
                            Um jogo para estimular a atenção!</p>
                        <Link to="/quizFormas" class="btn-games">Jogar</Link>
                    </div>
                </div>

            </div>

        </main>
    );
}

export default MainGames;