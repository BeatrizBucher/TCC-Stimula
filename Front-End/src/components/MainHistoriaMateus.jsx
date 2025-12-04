import './paginas/Historia/Historia.css';
import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Mateus01 from "../img/Mateus01.png";
import Mateus02 from "../img/Mateus02.png";
import Mateus03 from "../img/Mateus03.png";

function MainHistoriaMateus() {
    return (
        <main className="col-md-12 ms-sm-auto col-lg-12 px-md-4 container-fluid">

            <div className="mt-3">
                <Link 
                    to="/historia" 
                    className="btn d-flex align-items-center gap-2 botao-Mateus"
                >
                    <FaArrowLeft size={18} color="#fff" />
                    Voltar
                </Link>
            </div>

            <div className="row justify-content-between mt-4 align-items-center">
                <div className="col-md-6">

                    <h2 className='titulo-3'>O Mistério das Chaves Coloridas ♦️</h2>

                    <p>Mateus era um garoto que adorava colecionar chaves. Ele tinha chaves grandes, pequenas, redondas, quadradas, de todas as cores. Cada chave ele guardava em uma caixinha especial.</p>

                    <p>Um dia, quando estava brincando no quintal, encontrou um cofre misterioso enterrado perto de uma árvore. O cofre tinha quatro fechaduras diferentes, mas nenhuma das chaves da coleção de Mateus servia.</p>

                    <p>De repente, apareceu uma coruja falante, com penas brilhantes e olhos atentos.</p>

                    <p>— “Olá, Mateus. Esse é o Cofre da Imaginação. Ele só pode ser aberto com quatro chaves mágicas que estão escondidas em lugares especiais. Cada chave representa algo importante para o coração: coragem, amizade, criatividade e confiança.”</p>

                    <p>Mateus ficou animado e aceitou a missão. A coruja abriu suas asas e, com um bater forte, levou Mateus para o Mundo das Chaves Coloridas, onde começava sua aventura.</p>
                </div>

                <div className="col-md-6">
                    <img 
                        src={Mateus01}
                        className='img-historia mt-4'
                        alt="Mateus encontrando o cofre misterioso no quintal."
                    />
                </div>
            </div>

            <div className="row mt-5 align-items-center">
                <div className="col-md-6">
                    <img 
                        src={Mateus02}
                        className='img-historia'
                        alt="Mateus ajudando uma criança a atravessar a ponte."
                    />
                </div>

                <div className="col-md-6 mt-3">
                    <p>Mateus chegou a uma ponte de madeira que balançava sobre um rio fundo. No meio da ponte havia uma criança chorando, com medo de atravessar.</p>

                    <p>Mateus pegou sua mão e disse:</p>

                    <p>— “Vamos juntos, passo a passo, bem devagar.”</p>

                    <p>Os dois atravessaram calmamente e, quando chegaram ao outro lado, uma chave vermelha brilhou no ar. Era a chave da coragem!</p>

                    <p>No bosque, Mateus encontrou três animais diferentes: um cachorro, um gato e um passarinho. Eles discutiam sem parar, cada um querendo brincar sozinho.</p>

                    <p>Mateus sugeriu:</p>

                    <p>— “E se brincarmos juntos? Podemos inventar uma corrida divertida!”</p>

                    <p>Eles toparam, riram muito e perceberam como era bom estar juntos. Nesse instante, uma chave verde apareceu entre eles, representando a amizade.</p>

                    <p>Mais à frente, Mateus encontrou um muro enorme, sem porta e sem fim. Como poderia continuar?</p>

                    <p>Ele se sentou, pensou, e começou a desenhar com um pedaço de giz colorido que achou no chão. Desenhou uma porta no muro… e, como mágica, a porta se abriu!</p>

                    <p>De dentro do muro saiu uma chave amarela brilhante, a chave da criatividade.</p>
                </div>
            </div>

            <div className="row mt-5 align-items-center mb-5">
                <div className="col-md-6 mt-3">

                    <p>Na última parte da jornada, Mateus encontrou um espelho gigante. Mas, em vez de mostrar sua imagem, o espelho estava apagado.</p>

                    <p>A coruja explicou:</p>

                    <p>— “Para encontrar a última chave, você precisa acreditar em si mesmo.”</p>

                    <p>Mateus fechou os olhos, respirou fundo e disse:</p>

                    <p>— “Eu consigo!”</p>

                    <p>Quando abriu os olhos, viu sua imagem sorridente no espelho. De repente, uma chave azul surgiu em suas mãos: era a chave da confiança.</p>

                    <p>Com as quatro chaves mágicas, Mateus voltou até o cofre misterioso. Ele girou cada chave em sua fechadura, uma a uma, até que a tampa se abriu.</p>

                    <p>De dentro, não saiu tesouro nem ouro. O que havia lá dentro eram milhares de pequenas luzes coloridas, que voaram pelo céu formando desenhos mágicos.</p>

                    <p>A coruja disse:</p>

                    <p>— “O verdadeiro tesouro está dentro de você: coragem, amizade, criatividade e confiança. Com essas chaves, você pode abrir qualquer porta na vida.”</p>

                    <p>Mateus sorriu e guardou as chaves no coração. Ele sabia que aquela aventura nunca iria acabar, porque sempre que precisasse, poderia usar uma delas para iluminar seu caminho.</p>
                </div>

                <div className="col-md-6">
                    <img 
                        src={Mateus03}
                        className='img-historia'
                        alt="Mateus segurando as quatro chaves mágicas no final da aventura."
                    />
                </div>
            </div>

        </main>
    );
}

export default MainHistoriaMateus;
