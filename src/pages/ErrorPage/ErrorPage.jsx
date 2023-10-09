import { TbFaceIdError } from "react-icons/tb";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="bg-rose-700 min-h-screen flex flex-col justify-center items-center text-white gap-6">
      <p className="text-9xl">
        <TbFaceIdError />
      </p>
      <h2 className="text-5xl font-bold ">Error 404</h2>
      <p>Sorry, The page you are looking for is not found!</p>
      <Link to={"/"}>
        <button className="btn btn-primary text-white">Go Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;