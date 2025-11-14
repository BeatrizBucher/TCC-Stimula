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

            <div className="row mt-5 justify-content-center ">

                <div className="col-md-6 col-lg-3">
                    <div class="card-games">
                        <img src={JodoDaMemoria} alt="jogo da memoria" />
                        <h1>Jogo da memória</h1>
                         <p>Descubra onde cada figura está.
                            Encontre os pares escondidos.
                            Um desafio divertido para sua mente!</p>
                        <Link to="/jogodamemoria" class="btn-games">Jogar</Link>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3">
                    <div class="card-games">
                        <img src={QuizMatematica} alt="jogo da memoria" />
                        <h1>Quiz de número</h1>
                        <p>Conte, some e aprenda jogando.
                            Resolva desafios com os números.
                            Matemática nunca foi tão divertida!</p>
                        <Link to="/" class="btn-games">Jogar</Link>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3">
                    <div class="card-games">
                        <img src={QuizPortugues} alt="jogo da memoria" />
                        <h1>Quiz de português</h1>
                        <p>Explore letras e novas palavras.
                            Aprenda português brincando.
                            Um quiz cheio de descobertas!</p>
                        <Link to="/" class="btn-games">Jogar</Link>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3">
                    <div class="card-games">
                        <img src={QuizAssociacao} alt="jogo da memoria" />
                        <h1>Associação de formas</h1>
                        <p>Observe, compare e combine.
                            Junte formas e cores iguais.
                            Um jogo para estimular a atenção!</p>
                        <Link to="/" class="btn-games">Jogar</Link>
                    </div>
                </div>

            </div>

        </main>
    );
}

export default MainGames;