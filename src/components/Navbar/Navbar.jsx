import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../hooks/AuthProvider";
import { MdEditSquare } from "react-icons/md";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const {user ,userSignOut} = useContext(AuthContext);
  const navigate = useNavigate();
  const toastSignOutSuccess = () => toast.success("Signed Out SuccessFully");
  const toastSignOuterror = (err) => toast("Opps: ", err);

  console.log(user);

  const handleSignOut = ()=>{
        userSignOut()
        .then(() => {
          toastSignOutSuccess();
          navigate("/login");
        })
        .catch((error) => {
          toastSignOuterror(error.message);
        });
  }
  const navLinks1 = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? " active text-primary border-0 border-b-2 border-b-primary"
            : "hover:text-primary"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/featured-ideas"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? " active text-primary border-0 border-b-2 border-b-primary"
            : "hover:text-primary"
        }
      >
        Featured Ideas
      </NavLink>
      <NavLink
        to="/upcoming-events"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? " active text-primary border-0 border-b-2 border-b-primary"
            : "hover:text-primary"
        }
      >
        Upcoming Events
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? " active text-primary border-0 border-b-2 border-b-primary"
            : "hover:text-primary"
        }
      >
        About
      </NavLink>

      
    </>
  );
  const navlinksUser = (
    <>
      {!user && (
        <>
        
        
        <div className=" flex-col sm:flex-row items-end gap-2 justify-end">
          <Link className="btn btn-secondary rounded-sm shadow-md shadow-red-200 btn-xs sm:btn-sm rounded-ee-2xl rounded-ss-2xl " to={"/login"}>
            <button>LOGIN</button>
          </Link>
          <Link className="btn bg-white hover:bg-secondary hover:text-white text-secondary  shadow-md shadow-red-200 border-2 border-secondary hover:border-secondary sm:mx-2 btn-xs sm:btn-sm rounded-sm rounded-ee-2xl rounded-ss-2xl" to={"/registration"}>
            <button>REGISTER</button>
          </Link>
        </div>
        </>
        
      )}
      {user && (
        <div className="flex flex-col lg:flex-row gap-2 items-center justify-center border-l-2 lg:border-0">
          {user.photoURL ? (
            <img
              src={user?.photoURL}
              alt="profilepic"
              className="w-12 rounded-full aspect-square"
            />
          ) : (
            <h2 className="font-semibold px-2">{user.email} </h2>
          )}

          <h3 className="text-sm font-semibold px-2 text-center">
            {user?.displayName}
            <span className="flex justify-center items-center text-[10px] md:text-xs font-light bg-teal-500 text-white rounded-xl px-2 hidden">
              <p>Edit profile</p>
              <Link to={"/user-profile"}>
                <MdEditSquare className="ml-2" />
              </Link>
            </span>
          </h3>
          <button className="btn btn-xs bg-gradient-to-r from-primary to-blue-500 hover:from-secondary hover:to-yellow-500 text-white "  onClick={handleSignOut}>
            Sign out
          </button>
        
        </div>
      )}
    </>
  );
  
  return (
    <div>
      <div className="navbar bg-base-100 font-main uppercase font-semibold p-2 py-6 md:p-6 lg:px-[10%]">
      
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-6 shadow bg-base-100 rounded-box w-52 gap-6"
            >
              {navLinks1}
            </ul>
          </div>
          <Link to={"/"}>
          
          <img src="/lightLogo.png" alt="Social Splash Logo" className="w-40 sm:w-52" />
          </Link>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="gap-6 menu menu-horizontal px-2 ">{navLinks1}</ul>
        </div>
        <div className="navbar-end">
        {
          navlinksUser
        }
        </div>
       
        <span className="capitalize font-normal"><ToastContainer/></span>
      </div>
    </div>
  );
};

export default Navbar;
