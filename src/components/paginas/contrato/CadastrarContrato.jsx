import './contrato.css'
import Navbar from '../../template/Navbar';
import MainCadastroContrato from '../../MainCadastroContrato'

function CadastrarContrato() {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <MainCadastroContrato />

                </div>
            </div>
        </ >
    );
}
export default CadastrarContrato;