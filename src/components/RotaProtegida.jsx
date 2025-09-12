import { Navigate } from "react-router-dom";

const checkAutorizacao = (allowedRoles) => {
    const token = localStorage.getItem('token');
    const regra = localStorage.getItem('regra');

    if (!token){
        return false;
    }

    if(!allowedRoles.includes(regra)){
        return false;
    }
    return true;
};

const ProtectedRoute = ({allowedRoles, children}) => {
    const isAutorizacao = checkAutorizacao(allowedRoles);

    if(!isAutorizacao){
        return<Navigate to="/" />; //navega para rota login
    }
    return children;
}
export default ProtectedRoute;