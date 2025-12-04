import MainDemandas from '../../MainDemandas';
import Navbar from '../../template/Navbar';
import React from "react";


function Demandas() {
  
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <MainDemandas />
                </div>
            </div>
        </ >
    );
}
export default Demandas;