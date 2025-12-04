import Navbar from '../../template/Navbar';
import MainHistoriaLeo from '../../MainHistoriaLeo'
import Footer from '../../template/Footer';

function Leo() {

return(
<>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    
                    <MainHistoriaLeo />
                    <Footer />

                </div>
            </div>
        </ >
);

}
export default Leo;
