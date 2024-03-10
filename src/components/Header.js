import foodAppLogo from '../assets/logos/foodAppLogo.png';
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store when using a Selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-green-300">
      <div className="logo-container">
        <img className="w-28" src={foodAppLogo} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="text-gray-800 px-2 py-2 hover:pb-1 hover:border-b hover:border-black inline-block transition duration-300 ease-in-out text-xl font-medium font-serif">
            <Link to="/">Home</Link>
          </li>
          <li className="text-gray-800 hover:pb-1 hover:border-b hover:border-black font-medium px-2 py-2 inline-block transition duration-300 ease-in-out text-xl font-serif">
            <Link to="/about"> About Us</Link>
          </li>
          <li className="text-gray-800 hover:pb-1 hover:border-b hover:border-black font-medium px-2 py-2 inline-block transition duration-300 ease-in-out text-xl font-serif">
            <Link to="/contact"> Contact Us</Link>
          </li>
          <li className="text-gray-800 hover:pb-1 hover:border-b hover:border-black font-medium px-2 py-2 inline-block transition duration-300 ease-in-out text-xl font-serif">
            <Link to="/grocery"> Grocery</Link>
          </li>
          <li className="text-gray-800 hover:pb-1 hover:border-b hover:border-black font-medium px-2 py-2 inline-block transition duration-300 ease-in-out text-xl font-serif">
            <Link to="/cart"> Cart - ({cartItems.length} items)</Link>
          </li>
          <li className="text-gray-800 font-medium mr-px mx-8 px-2 py-2 inline-block text-xl font-sans">{loggedInUser}</li>
          <button
            className={
              btnNameReact === "Login" ? 
              "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" :
              "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            }
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
