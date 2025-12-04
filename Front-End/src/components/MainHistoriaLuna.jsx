import './paginas/Historia/Historia.css';
import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Luna01 from "../img/luna01.png";
import Luna02 from "../img/luna02.png";
import Luna03 from "../img/luna03.png";

function MainHistoriaLuna() {
    return (
        <main className="col-md-12 ms-sm-auto col-lg-12 px-md-4 container-fluid">

            <div className="mt-3">
                <Link 
                    to="/historia" 
                    className="btn d-flex align-items-center gap-2 botao-luna"
                >
                    <FaArrowLeft size={18} color="#fff" />
                    Voltar
                </Link>
            </div>

            <div className="row justify-content-between mt-4 align-items-center">
                <div className="col-md-6">

                    <h2 className='titulo-2'>Luna e o Jardim dos Sons 🐉</h2>

                    <p>Luna era uma menina muito curiosa, que adorava ouvir sons diferentes. Ela tinha uma caixinha mágica onde guardava tudo o que escutava: o canto dos pássaros, o barulho da chuva, o riso da mamãe, até o “plim” do micro-ondas.</p>

                    <p>Um dia, ao abrir a caixinha, Luna percebeu que os sons haviam desaparecido. Tudo ao redor estava silencioso… os passarinhos não cantavam, o vento não soprava, nem o coração dela batia forte como sempre.</p>

                    <p>De repente, apareceu um coelho branco de orelhas enormes. Ele falava com uma voz doce:</p>

                    <p>— “Olá, Luna! Eu sou o Guardião dos Sons. O Jardim dos Sons está apagado, e sem ele o mundo ficará sem música. Você quer me ajudar a devolver os sons?”</p>

                    <p>Luna abriu um sorriso e disse:</p>

                    <p>— “Sim, quero muito ajudar! Eu adoro os sons.”</p>

                    <p>O coelho pegou sua mão e, num pulo, os dois chegaram ao Jardim dos Sons, um lugar lindo, mas vazio. As flores não se mexiam, os rios não faziam barulho, e até as abelhas estavam paradas.</p>

                    <p>— “Cada som está escondido em uma parte do jardim”, explicou o coelho. — “Vamos buscá-los um por um!”</p>
                </div>

                <div className="col-md-6">
                    <img 
                        src={Luna01} 
                        className='img-historia mt-4' 
                        alt="Ilustração representando Luna chegando ao Jardim dos Sons."
                    />
                </div>
            </div>

            <div className="row mt-5 align-items-center">
                <div className="col-md-6">
                    <img 
                        src={Luna02} 
                        className='img-historia' 
                        alt="Ilustração de Luna fazendo uma menina rir no balanço."
                    />
                </div>

                <div className="col-md-6 mt-3">

                    <p>Eles chegaram até um balanço enferrujado. Uma menina triste estava sentada nele, sem rir, sem brincar.</p>

                    <p>Luna se aproximou e começou a fazer caretas engraçadas, depois pulou de um lado para o outro, fingindo ser um sapinho.</p>

                    <p>A menina começou a rir baixinho… depois alto… até soltar uma gargalhada deliciosa! O som do riso subiu ao céu e voltou para o jardim, enchendo tudo de luz amarela brilhante.</p>

                    <p>Mais adiante, havia uma nuvem cinza, imóvel. Um sapinho olhava para cima, triste.</p>

                    <p>— “Sem a chuva, eu não consigo brincar nas poças.”</p>

                    <p>Luna respirou fundo e começou a bater palmas no ritmo da chuva: <strong>plaft, plaft, plaft.</strong></p>

                    <p>O sapinho imitou, depois o coelho também, até que a nuvem começou a pingar devagarinho…</p>

                    <p>Logo, a chuva suave caiu sobre o jardim, trazendo o som calmante das gotas. O jardim ficou cheio de reflexos azuis brilhantes.</p>
                </div>
            </div>

            <div className="row mt-5 align-items-center mb-5">
                <div className="col-md-6 mt-3">

                    <p>No final do jardim, Luna encontrou uma árvore com vários instrumentos pendurados: tambor, violão, flauta. Mas nenhum fazia som.</p>

                    <p>Ela pegou o tambor e bateu: <strong>tum-tum-tum.</strong></p>

                    <p>O coelho tocou a flauta: <strong>fi-fiuuu.</strong></p>

                    <p>O sapinho pegou o violão e fez: <strong>strim-strim.</strong></p>

                    <p>Juntos, criaram uma melodia alegre. O som da amizade ecoou pelo Jardim dos Sons, pintando tudo de verde e laranja vibrante.</p>

                    <p>Quando os três sons voltaram, o Jardim dos Sons ficou vivo outra vez: as flores balançavam cantando, o rio corria com melodia, as abelhas zumbiam felizes.</p>

                    <p>O coelho sorriu e disse:</p>

                    <p>— “Obrigada, Luna. Você trouxe de volta o riso, a calma e a amizade. O mundo está cheio de sons novamente!”</p>

                    <p>Luna voltou para casa e abriu sua caixinha. Lá estavam todos os sons, guardadinhos e brilhando.</p>

                    <p>Naquela noite, antes de dormir, ela escutou o mais bonito de todos: o som do seu próprio coração batendo forte.</p>
                </div>

                <div className="col-md-6">
                    <img 
                        src={Luna03} 
                        className='img-historia' 
                        alt="Ilustração representando Luna feliz ao recuperar todos os sons."
                    />
                </div>
            </div>

        </main>
    );
}

export default MainHistoriaLuna;
