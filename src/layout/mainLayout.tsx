import Navigator from "../components/navigator";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navigator />
      <Outlet />
    </>
  );
};

export default MainLayout;
