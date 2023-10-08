import { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../hooks/AuthProvider";
import { Navigate } from "react-router-dom";

const LoggedInRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    
    if(!user){
        return children;
    }
    return <Navigate to="/"></Navigate>
};
LoggedInRoute.propTypes = {
    children: PropTypes.object.isRequired,
  };
export default LoggedInRoute;