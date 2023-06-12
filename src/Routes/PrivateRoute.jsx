import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { useContext } from "react";
import LoadingSpinner from "../Pages/Shared/LoadSpinner/LoadSpinner";


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  console.log(user)
  const location = useLocation();
  if (loading) {
    return (
      <>
       <LoadingSpinner></LoadingSpinner>
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
