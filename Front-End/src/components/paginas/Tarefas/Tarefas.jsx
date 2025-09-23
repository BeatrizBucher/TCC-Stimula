import MainTarefas from '../../MainTarefas';
import Navbar from '../../template/Navbar';
import React from "react";


function Demandas() {

  
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <MainTarefas />
                </div>
            </div>
        </ >
    );
}
export default Demandas;