import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <div><Navbar></Navbar></div>
      <div>
        <Outlet></Outlet>
      </div>
      <div>Footer</div>
    </>
  );
};

export default MainLayout;
