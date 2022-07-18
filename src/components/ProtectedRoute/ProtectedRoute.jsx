import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../utils/contexts";

const ProtectedRoute = ({ user, redirectPath = "/", children }) => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser?.token) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default ProtectedRoute;
