import './Games.css'
import MainQuizzPortugues from '../../MainQuizzPortugues';
import Navbar from '../../template/Navbar';
import React from "react";

function GamesQuizPortugues() {

  
    return (
        <>
            <Navbar />

            <div className="container-fluid">
                <div className="row">
                  
                    <MainQuizzPortugues />
                    


                </div>
            </div>
        </ >
    );
}
export default GamesQuizPortugues;