import { Link } from "react-router-dom";
export default function AcessoNegado() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h1 className="card-title text-danger">Acesso Negado!</h1>
              <p className="card-text">Você não tem permissão para acessar esta página.</p>
              <div className="mt-3">
                        <Link to="/home" className="btn btn-danger">Voltar</Link>
                    </div>
            </div>
          </div>    
        </div>
      </div>
    </div>
  );
}
