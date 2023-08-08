import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import useInstructor from "../Hooks/useInstructor";
import LoadingSpinner from "../Pages/Shared/LoadSpinner/LoadSpinner";


const InstructorRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const [isInstructor, isInstructorLoading] = useInstructor()
    const location = useLocation();
    if(loading || isInstructorLoading){
        <LoadingSpinner></LoadingSpinner>
    }
    
    if(user && isInstructor){
        return children ;
    }
    return (
        <Navigate to='/' state={{from:location}} replace></Navigate>
    );
};

export default InstructorRoute;