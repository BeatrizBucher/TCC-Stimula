import React from "react";
import { Link } from "react-router-dom";
import "./paginas/Games/Games.css";
import { FaArrowLeft } from 'react-icons/fa';

function CardSelecaoNivel() {
    return (
        <main className="d-flex justify-content-center align-items-center" style={{ minHeight: '70vh', width: '100%' }}>
            <Link
                to="/games"
                className="btn botao-voltar"
            >
                <FaArrowLeft size={16} color="#fff" />
                Voltar
            </Link>
            <div className="card shadow p-4 text-center" style={{ width: '400px' }}>
                <h3 className="mb-4 fw-bold titulo-inicial ">Escolha o Nível</h3>

                <div className="d-flex flex-column gap-3">

                    <Link
                        to="/jogodamemoriafacil"
                        className="btn btn-success fw-bold py-2"
                    >
                        Fácil
                    </Link>

                    <Link
                        to="/jogodamemoria"
                        className="btn btn-primary fw-bold py-2"
                    >
                        Intermediário
                    </Link>

                    <Link
                        to="/jogodamemoriadificil"
                        className="btn btn-danger fw-bold py-2"
                    >
                        Difícil
                    </Link>

                </div>
            </div>


        </main>
    );
}

export default CardSelecaoNivel;
