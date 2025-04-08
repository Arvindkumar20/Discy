import React from "react";
import { useTheme } from "../context/ThemeContext"; // Adjust path as needed
import {
  FaUsers,
  FaLaptopCode,
  FaUniversity,
  FaLanguage,
  FaBuilding,
  FaSuitcase,
  FaChartLine,
  FaComments,
  FaThList,
} from "react-icons/fa";
import MainHome from "./home/MainHome";

const communities = [
  { name: "Programs", followers: 112, icon: <FaThList /> },
  { name: "Programmers", followers: 93, icon: <FaLaptopCode /> },
  { name: "Language", followers: 81, icon: <FaLanguage /> },
  { name: "Management", followers: 79, icon: <FaSuitcase /> },
  { name: "Company", followers: 77, icon: <FaBuilding /> },
  { name: "Analytics", followers: 67, icon: <FaChartLine /> },
  { name: "University", followers: 12, icon: <FaUniversity /> },
  { name: "Communication", followers: 9, icon: <FaComments /> },
];

const Communities = () => {
  const { theme } = useTheme();
  const themeClasses =
    theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-800";

  const cardTheme =
    theme === "dark"
      ? "bg-gray-800 border-gray-700"
      : "bg-gray-100 border-gray-300";

  return (
    <div className={`min-h-screen p-6 ${themeClasses}`}>
      <MainHome>
        <div className="flex justify-between items-center mb-6">
          <p className="text-lg font-semibold">
            <span className="text-gray-400">Home / </span>Communities
          </p>
          <div className="flex items-center gap-2">
            <select className="bg-gray-700 text-white px-2 py-1 rounded">
              <option>Popular</option>
              <option>Newest</option>
              <option>Trending</option>
            </select>
            <input
              type="text"
              placeholder="Type to find..."
              className="px-2 py-1 rounded bg-gray-700 text-white focus:outline-none"
            />
            <button className="text-white bg-blue-600 px-2 py-1 rounded">
              🔍
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {communities.map((com, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border ${cardTheme} hover:shadow-md transition`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xl">{com.icon}</span>
                <h3 className="font-bold text-lg">{com.name}</h3>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <FaUsers className="mr-2" />
                {com.followers} Followers
              </div>
            </div>
          ))}
        </div>
      </MainHome>
    </div>
  );
};

export default Communities;
