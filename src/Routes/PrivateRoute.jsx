import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { useContext } from "react";


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  console.log(user)
  const location = useLocation();
  if (loading) {
    return (
      <>
        <progress className="progress w-56" value="0" max="100"></progress>
      </>
    );
  }
  if (user) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" state={{from:location}} replace></Navigate>;
  }
};

export default PrivateRoute;
