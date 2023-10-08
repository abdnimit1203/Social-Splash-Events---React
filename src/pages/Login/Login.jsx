import { useLocation } from "react-router-dom";
import LoginForm2 from "../../components/LoginForm2/LoginForm2";

const Login = () => {
    const location = useLocation()
    console.log(location);
    return (
        <div>
           <LoginForm2></LoginForm2>
        </div>
    );
};

export default Login;