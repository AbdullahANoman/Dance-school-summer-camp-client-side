import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import useStudent from "../Hooks/useStudent";


const StudentRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const [isStudent,isStudentLoading] = useStudent()
    const location = useLocation();
    if(loading || isStudentLoading){
        <p>Loading....</p>
    }
    
    if(user && isStudent){
        return children ;
    }
    return (
        <Navigate to='/' state={{from:location}} replace></Navigate>
    );
};

export default StudentRoute;