import { Link } from "react-router-dom";

const NAVIGATOR_LIST = [{ label: "App", path: "/" }];

const Navigator = () => {
  return (
    <nav className="w-full h-10 bg-gray-500 flex justify-center items-center">
      {NAVIGATOR_LIST.map(({ label, path }) => (
        <Link to={path}>{label}</Link>
      ))}
    </nav>
  );
};

export default Navigator;
