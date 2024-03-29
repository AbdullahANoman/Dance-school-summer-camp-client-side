import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import LoadingSpinner from "../Pages/Shared/LoadSpinner/LoadSpinner";


const AdminRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const [isAdmin,isAdminLoading] = useAdmin();
    const location = useLocation();
    if(loading || isAdminLoading){
       <LoadingSpinner></LoadingSpinner>
    }
    
    if(user && isAdmin){
        return children ;
    }
    return (
        <Navigate to='/' state={{from:location}} replace></Navigate>
    );
};

export default AdminRoute;