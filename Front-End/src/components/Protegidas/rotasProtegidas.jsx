import { useAuth } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, allowedRoles }) {
  const { regra } = useAuth();

  console.log(regra);

  if (!regra) {
    return <Navigate to="/" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(regra)) {
    return <Navigate to="/acesso-negado" replace />;
  }

  return children;
}