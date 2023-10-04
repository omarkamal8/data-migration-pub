import { useLocation, Link } from "react-router-dom";
import { cn } from "../utils/cn";
const NavButton = ({ href, children }) => {
  const location = useLocation();
  return (
    <Link
      to={href}
      className={cn(href === location.pathname && "font-bold", "text-lg rounded px-4 py-2 hover:bg-gray-700  active:bg-gray-800 text-white" )}
    >
      {children}
    </Link>
  );
};
const NavBar = () => {
  return (
    <nav className="grid grid-flow-col grid-cols-3 w-full py-4 items-center border-b border-b-gray-700 ">
      <h1 className="font-bold text-[#d40032] text-4xl mb-4">QESTIT</h1>
      <div className="flex items-center space-x-4 justify-center">
        <NavButton href="/home">Home</NavButton>
        <NavButton href="/">Logout</NavButton>
      </div>
      <div></div>
    </nav>
  );
};
export default NavBar;
