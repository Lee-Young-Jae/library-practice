import { Link } from "react-router-dom";
import { NAVIGATOR_LIST } from "../constance";

const Navigator = () => {
  return (
    <nav className="w-full h-10 bg-gray-500 flex justify-center items-center gap-4">
      {NAVIGATOR_LIST.map(({ label, path }) => (
        <Link key={path} to={path} className="text-white hover:text-gray-300">
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default Navigator;
