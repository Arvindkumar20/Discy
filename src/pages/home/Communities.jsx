import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
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
import MainHome from "./MainHome";

const communitiesData = [
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
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("Popular");

  const isDark = theme === "dark";
  const themeClasses = isDark ? "bg-gray-900 text-white" : "bg-white text-gray-800";
  const cardTheme = isDark ? "bg-gray-800 border-gray-700" : "bg-gray-100 border-gray-300";

  // Filter + sort communities based on dropdown and search input
  const filteredCommunities = communitiesData
    .filter((com) =>
      com.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (filter === "Popular") return b.followers - a.followers;
      if (filter === "Newest") return a.name.localeCompare(b.name); // simulate by name
      if (filter === "Trending") return (a.name.length % 2) - (b.name.length % 2); // random logic
      return 0;
    });

  return (
    <div className={`min-h-screen p-6 transition-all duration-300 ${themeClasses}`}>
      <MainHome>
        <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
          <p className="text-lg font-semibold w-full sm:w-auto">
            <span className="text-gray-400">Home / </span>Communities
          </p>

          <div className="flex items-center gap-2 flex-wrap">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className={`px-2 py-1 rounded text-sm ${isDark ? "bg-gray-700 text-white" : "bg-white text-gray-800 border border-gray-300"}`}
            >
              <option value="Popular">Popular</option>
              <option value="Newest">Newest</option>
              <option value="Trending">Trending</option>
            </select>

            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Type to find..."
              className={`px-2 py-1 rounded text-sm ${isDark ? "bg-gray-700 text-white placeholder-gray-400" : "bg-white text-gray-800 border border-gray-300"}`}
            />

            <button className={`px-2 py-1 rounded ${isDark ? "bg-blue-600 text-white" : "bg-blue-500 text-white"}`}>
              🔍
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCommunities.length ? (
            filteredCommunities.map((com, index) => (
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
            ))
          ) : (
            <p className="col-span-full text-center text-gray-400">No communities found.</p>
          )}
        </div>
      </MainHome>
    </div>
  );
};

export default Communities;
