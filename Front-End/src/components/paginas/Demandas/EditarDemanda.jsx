import EditarDemanda from '../../MainEditarDemanda';
import Navbar from '../../template/Navbar';
import React from "react";


function Demandas() {
  
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <EditarDemanda />
                </div>
            </div>
        </ >
    );
}
export default Demandas;