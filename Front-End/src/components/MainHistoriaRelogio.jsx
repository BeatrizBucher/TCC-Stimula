import './paginas/Historia/Historia.css';
import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import  Relogio01 from "../img/Relogio01.png";
import Relogio02 from "../img/Relogio02.png";

function MainHistoriaRelogio() {
    return (
        <main className="col-md-12 ms-sm-auto col-lg-12 px-md-4 container-fluid">

            <div className="mt-3">
                <Link 
                    to="/historia" 
                    className="btn d-flex align-items-center gap-2 botao-Relogio"
                >
                    <FaArrowLeft size={18} color="#fff" />
                    Voltar
                </Link>
            </div>

            <div className="row justify-content-between mt-4 align-items-center">
                <div className="col-md-6">
                    <h2 className='titulo-4'>O Relógio das Emoções ⌚</h2>

                    <p>Clara era uma menina curiosa que adorava olhar para relógios. Ela tinha relógios de todos os tipos: grandes, pequenos, redondos e quadrados. Mas, diferente de outras pessoas, Clara podia sentir as emoções das pessoas apenas observando os ponteiros dos relógios.</p>

                    <p>Um dia, ao visitar o sótão da casa da avó, Clara encontrou um relógio enorme e antigo, com ponteiros que giravam sozinhos. Ao encostar nele, uma voz suave falou:</p>

                    <p>— “Olá, Clara. Eu sou o Relógio das Emoções. Meu tempo está confuso e as pessoas estão esquecendo como sentir alegria, calma, coragem e amizade. Você pode me ajudar a devolver o equilíbrio?”</p>

                    <p>Clara, fascinada, aceitou a missão e, de repente, os ponteiros giraram rapidamente, transportando-a para o Mundo do Relógio Mágico, um lugar onde o tempo parecia dançar, e cada hora representava uma emoção diferente.</p>

                    <p>Clara chegou a uma praça silenciosa onde crianças não conseguiam brincar. Ela começou a rir, a pular e a cantar músicas divertidas. Aos poucos, o riso se espalhou pelo lugar e pequenas luzes douradas apareceram, trazendo alegria para todos.</p>
                </div>

                <div className="col-md-6">
                    <img 
                        src={Relogio01} 
                        className='img-historia mt-4' 
                        alt="Clara observando o relógio mágico."
                    />
                </div>
            </div>

            <div className="row mt-5 align-items-center mb-5">
                <div className="col-md-6">
                    <img 
                        src={Relogio02} 
                        className='img-historia' 
                        alt="Clara restaurando as emoções do mundo mágico."
                    />
                </div>

                <div className="col-md-6 mt-3">
                    <p>Na floresta, árvores agitadas balançavam sem parar, e os animais pareciam ansiosos. Clara respirou fundo e começou a caminhar devagar, tocando suavemente as folhas e falando palavras tranquilizadoras. Logo, uma brisa suave espalhou-se pelo bosque, trazendo calma a todos.</p>

                    <p>Clara encontrou uma ponte estreita sobre um rio turbulento. Um menino estava com medo de atravessar. Ela segurou sua mão e disse:</p>

                    <p>— “Vamos juntos, passo a passo. Você consegue.”</p>

                    <p>Com confiança e coragem, eles atravessaram a ponte, e uma luz vermelha brilhou forte sobre eles, representando a coragem que agora crescia no coração de todos.</p>

                    <p>No final do caminho, Clara encontrou crianças e animais sozinhos e tristes. Ela reuniu todos para brincar, cantar e criar histórias juntos. A amizade surgiu como uma luz verde que se espalhou pelo céu, unindo todos.</p>

                    <p>Quando as quatro emoções foram restauradas, o Relógio das Emoções parou suavemente, e o Mundo do Relógio Mágico voltou a ter harmonia.</p>

                    <p>Clara retornou ao sótão sabendo que podia usar o que aprendeu: levar alegria, calma, coragem e amizade para todos ao seu redor.</p>
                </div>
            </div>

        </main>
    );
}

export default MainHistoriaRelogio;
