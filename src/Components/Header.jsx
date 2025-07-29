import logo from "../assets/logo/logo1.svg";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="flex justify-between items-center gap-2">
      <figure>
        <img src={logo} className="size-full"/>
      </figure>
      <hr className="border-1 border-gray-500 w-1/2" />
      <div className="flex gap-16 w-3/4 py-8 justify-center text-white bg-blue-50/10 backdrop-blur-3xl">
        <Link to='/'>00 HOME</Link>
        <Link to='/Destination'>01 DESTINATION</Link>
        <Link to='/Crew'>02 CREW</Link>
        <Link to='/Technology'>03 TECHNOLOGY</Link>
      </div>
    </div>
  );
};

export default Header;
