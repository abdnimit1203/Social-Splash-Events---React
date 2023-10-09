import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";

const MainLayout = () => {
    const location = useLocation();
//   console.log(location);
  useEffect(() => {
    if (location.pathname === "/") {
      document.title = `Social Splash Events`;
    } else {
      document.title = `Social Splash Events | ${
        location.pathname.replace("/", "").charAt(0).toUpperCase() +
        location.pathname.slice(2)
      }`;
    }
    if (location.state) {
      if(location.pathname == "/login"){
        document.title = `Login`;
      }else{

        document.title = `${location.state}`;
        console.log(location);
      }
    }
  }, [location]);
  return (
    <>
      <div><Navbar></Navbar></div>
      <div>
        <Outlet></Outlet>
      </div>
      <div><Footer></Footer></div>
    </>
  );
};

export default MainLayout;
