import React from "react";
import { FaFileContract, FaHome, FaLock, FaShoppingCart, FaTags, FaTrophy, FaUsers } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import { Link } from "react-router-dom";
import { RiAddCircleLine, RiCommunityLine } from "react-icons/ri";
import { MdGroups, MdHelpOutline, MdOutlineQuestionAnswer } from "react-icons/md";
import { BsMegaphone } from "react-icons/bs";

const navLinks = [
  { to: "/", menuItem: "Home" ,icon: <FaHome />},
  { to: "/about-us", menuItem: "About Us",icon: <FaFileContract /> },
  { to: "/blog", menuItem: "Blog" ,icon: <BsMegaphone />},
  { to: "/contact-us", menuItem: "Contact Us",icon: <BsMegaphone /> },
  { menuItem: "Communities", icon: <RiCommunityLine />, to: "/communities" },
  { menuItem: "Questions", icon: <MdOutlineQuestionAnswer />, to: "#" },
  { menuItem: "Polls", icon: <BsMegaphone />, to: "#" },
  { menuItem: "Groups", icon: <MdGroups />, to: "#" },
  { menuItem: "Add group", icon: <RiAddCircleLine />, to: "#" },
  { menuItem: "Tags", icon: <FaTags />, to: "#" },
  { menuItem: "Badges", icon: <FaTrophy />, to: "#" },
  { menuItem: "Users", icon: <FaUsers />, to: "#" },
  { menuItem: "Help", icon: <MdHelpOutline />, to: "#" },
];

const NavSideBar = ({ isOpen, toggleSidebar }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`fixed top-0 left-0 w-64 h-full z-50 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out ${
        theme === "light" ? "bg-gray-100 text-black" : "bg-gray-900 text-white"
      }`}
    >
      {/* Close Button */}
      <button
        onClick={toggleSidebar}
        className={`absolute top-4 right-4 text-2xl ${
          theme === "light" ? "text-gray-600" : "text-white"
        }`}
      >
        &times;
      </button>

      {/* Sidebar Links */}
      <ul className="flex flex-col  p-6 mt-10">
        {navLinks?.map((menu) => (
          <li
            key={menu.menuItem}
            className={`${
              theme === "light"
                ? "hover:text-gray-800 hover:bg-gray-200"
                : "hover:text-gray-200 hover:bg-gray-800"
            } cursor-pointer py-2 px-4 rounded-md`}
          >
            <Link
              to={menu.to}
              onClick={toggleSidebar}
              className="flex items-center gap-2"
            >
              {menu.icon && <span>{menu.icon}</span>}
              {menu.menuItem}
            </Link>
          </li>
        ))}
      </ul>

      {/* Lock Icon for Login */}
      <div
        className={`absolute bottom-3 left-7 flex items-center gap-2 cursor-pointer ${
          theme === "light" ? "text-gray-600" : "text-gray-400"
        }`}
        onClick={toggleSidebar}
      >
        <FaLock />
        <span>Sign In</span>
      </div>
    </div>
  );
};

export default NavSideBar;
