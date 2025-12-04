import './Games.css'
import MainQuizzFormas from '../../MainQuizzFormas';
import Navbar from '../../template/Navbar';
import React from "react";

function GamesQuizFormas() {

  
    return (
        <>
            <Navbar />

            <div className="container-fluid">
                <div className="row">
                  
                    <MainQuizzFormas />
                    


                </div>
            </div>
        </ >
    );
}
export default GamesQuizFormas;