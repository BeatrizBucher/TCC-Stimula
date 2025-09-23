import MainQuadro from '../../MainQuadro';
import Navbar from '../../template/Navbar';

function Quadro() {
    return (
        <>
            <Navbar/>

            <div className="container-fluid">
                <div className="row">
                    <MainQuadro />

                </div>
            </div>


        </ >
    );
}
export default Quadro;