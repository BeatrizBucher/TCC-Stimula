import './Games.css'
import MainJogoDaMemoria from '../../MainJogoDaMemoria';
import Navbar from '../../template/Navbar';
import React from "react";

function JogoDaMemoria() {

  
    return (
        <>
            <Navbar />

            <div className="container-fluid">
                <div className="row">
                  
                    <MainJogoDaMemoria />


                </div>
            </div>
        </ >
    );
}
export default JogoDaMemoria;