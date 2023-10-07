import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <div>Nav</div>
      <div>
        <Outlet></Outlet>
      </div>
      <div>Footer</div>
    </>
  );
};

export default MainLayout;
