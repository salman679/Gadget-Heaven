import { FaCartShopping } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export default function Header({ logoColor, linkColor }) {
  return (
    <header className="max-w-screen-xl mx-auto px-28 py-6 ">
      <div className="flex justify-between items-center">
        <Link to={"/"} className={`font-bold text-lg ${logoColor} `}>
          Gadget Heaven
        </Link>
        <ul className={`flex gap-10 ${linkColor} font-medium`}>
          <li>
            <NavLink
              className={({ isActive }) => `${isActive ? "underline" : ""}`}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "font-bold text-purple-600" : ""}`
              }
              to="/statistics"
            >
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "font-bold text-purple-600" : ""}`
              }
              to="/about-us"
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "font-bold text-purple-600" : ""}`
              }
              to="/dashboard"
              end
            >
              Dashboard
            </NavLink>
          </li>
        </ul>

        <div>
          <button className="p-2 rounded-full bg-white mr-4 border">
            <FaCartShopping />
          </button>
          <button className="p-2 rounded-full bg-white border">
            <MdFavoriteBorder />
          </button>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  logoColor: PropTypes.string,
  linkColor: PropTypes.string,
};
