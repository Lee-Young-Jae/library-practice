import Navigator from "../components/navigator";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navigator />
      <div className="m-4">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
