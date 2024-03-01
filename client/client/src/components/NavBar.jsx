import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import { FaHome, FaShoppingBag, FaRegistered, FaUser } from "react-icons/fa";
import { GiMeal } from "react-icons/gi";

const NavBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center py-4">
        <NavLink to="/" className="text-xl font-bold">
          Ecommerce Website
        </NavLink>
        <nav>
          <ul className="flex">
            <li className="mr-4">
              <NavLink to="/" className="flex items-center">
                <FaHome className="mr-1" /> Home
              </NavLink>
            </li>
            <li className="mr-4">
              <NavLink to="/usersSeeAllProducts" className="flex items-center">
                <FaShoppingBag className="mr-1" /> Products
              </NavLink>
            </li>
            <li className="mr-4">
              <NavLink to="/contactUs" className="flex items-center">
                <FaUser className="mr-1" /> Contact Us
              </NavLink>
            </li>
            {isLoggedIn ? (
              <li>
                <NavLink to="/logout" className="flex items-center">
                  Logout
                </NavLink>
              </li>
            ) : (
              <>
                <li className="mr-4">
                  <NavLink to="/register" className="flex items-center">
                    <FaRegistered className="mr-1" /> Register
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/login" className="flex items-center">
                    <FaUser className="mr-1" /> Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
