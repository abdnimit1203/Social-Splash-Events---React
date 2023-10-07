import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center flex-col">
            <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-page-templates.jpg" alt="404 error" className="w-full bg-cover" />
            <Link to={"/"} className="btn btn-secondary btn-wide  ">Home</Link>
        </div>
    );
};

export default ErrorPage;