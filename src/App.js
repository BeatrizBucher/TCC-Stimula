import Home from "./components/paginas/home/Home";
import Login from "./components/paginas/Login/Login";
import NotFound from "./components/paginas/404/NotFound";
import Protegida from "./components/RotaProtegida.jsx";

import { Route, Routes } from "react-router-dom";
import Quadro from "./components/paginas/Quadro/Quadro.jsx";
import Historia from "./components/paginas/Historia/Historia.jsx"
import AlternadorDeTema from "./components/AlternadorDeTema"

import CadastrarContrato from "./components/paginas/contrato/CadastrarContrato"
import ListarContrato from "./components/paginas/contrato/ListarContrato"
import EditarContrato from "./components/paginas/contrato/EditarContrato"
import Cadastro from "./components/paginas/Cadastro/Cadastro.jsx";

import ResetarSenha from './components/paginas/Login/ReseteSenha';



function App() {
  return (
    <>
      <AlternadorDeTema />
      <Routes>

        <Route
          path="/quadro"
          element={
            <Protegida allowedRoles={['admin', 'usuario']}>
              <Quadro />
            </Protegida>
          }
        />

        <Route
          path="/historia"
          element={
            <Protegida allowedRoles={['admin', 'usuario']}>
              <Historia />
            </Protegida>
          }
        />


        <Route
          path="/listar-contrato"
          element={
            <Protegida allowedRoles={['admin', 'usuario']}>
              <ListarContrato />
            </Protegida>
          }
        />

        <Route
          path="/cadastrar-contrato"
          element={
            <Protegida allowedRoles={['admin', 'usuario']}>
              <CadastrarContrato />
            </Protegida>
          }
        />
        <Route
          path="/editar-contrato/:id"
          element={
            <Protegida allowedRoles={['admin', 'usuario']}>
              <EditarContrato />
            </Protegida>
          }
        />
        <Route path="/home"
          element={
            <Protegida allowedRoles={['admin']}>
              <Home />
            </Protegida>
          } />

        <Route path="/cadastro"
          element={
            <Protegida allowedRoles={['admin', 'usuario']}>
              <Cadastro />
            </Protegida>
          } />

        {/*Rotas públicas*/}
        <Route path="/resetarsenha" element={<ResetarSenha />} />
        <Route path="/" element={<Login />} />

        {/*Rota para página 404*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;