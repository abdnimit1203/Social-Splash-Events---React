import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
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
        to="/registration"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? " active text-primary border-0 border-b-2 border-b-primary"
            : "hover:text-primary"
        }
      >
        Registration
      </NavLink>
    </>
  );
  
  return (
    <div>
      <div className="navbar bg-base-100 font-main uppercase font-semibold">
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
          <img src="/lightLogo.png" alt="Social Splash Logo" className="w-52" />
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="gap-6 menu menu-horizontal px-2 ">{navLinks1}</ul>
        </div>
        <div className="navbar-end">
          <Link to={"/login"}>
            <a className="btn btn-secondary">Login</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;