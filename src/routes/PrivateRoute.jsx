import { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../hooks/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation();
    console.log(location);
    
    const toastLoginWarning = () =>
    toast.warning("You have to log in first!", { theme: "colored",position: "top-center",limit:1});

    if(loading){
        return <><div className="flex min-h-screen justify-center items-center text-center">
            <span className=" w-40 loading loading-bars bg-secondary "></span>
            </div></>

    }
    if(user){
        return children;
    }
    else{
        toastLoginWarning()
    }
    return <>

    <Navigate state={location.pathname} to="/login"></Navigate>
    
    </>
};
PrivateRoute.propTypes = {
    children: PropTypes.object.isRequired,
  };
export default PrivateRoute;