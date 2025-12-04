import './Games.css'
import MainQuizzNumeros from '../../MainQuizzNumero';
import Navbar from '../../template/Navbar';
import React from "react";

function GamesQuizNumero() {

  
    return (
        <>
            <Navbar />

            <div className="container-fluid">
                <div className="row">
                  
                    <MainQuizzNumeros />
                    


                </div>
            </div>
        </ >
    );
}
export default GamesQuizNumero;