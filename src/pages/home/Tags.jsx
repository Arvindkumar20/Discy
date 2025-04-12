import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { FaUsers, FaTag } from "react-icons/fa";
import MainHome from "./MainHome";

const tagData = [
  { name: "analytics", followers: 77 },
  { name: "language", followers: 67 },
  { name: "english", followers: 65 },
  { name: "programs", followers: 67 },
  { name: "company", followers: 63 },
  { name: "google", followers: 62 },
  { name: "life", followers: 60 },
  { name: "startup", followers: 55 },
  { name: "coding", followers: 53 },
];

const Tags = () => {
  const { theme } = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("Popular");

  const isDark = theme === "dark";
  const themeClasses = isDark ? "bg-gray-900 text-white" : "bg-white text-gray-800";
  const cardTheme = isDark ? "bg-gray-800 border-gray-700" : "bg-gray-100 border-gray-300";

  const filteredTags = tagData
    .filter(tag => tag.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (filter === "Popular") return b.followers - a.followers;
      if (filter === "Alphabetical") return a.name.localeCompare(b.name);
      if (filter === "Trending") return (a.name.length % 2) - (b.name.length % 2); // dummy logic
      return 0;
    });

  return (
    <div className={`min-h-screen p-6 transition-all duration-300 ${themeClasses}`}>
      <MainHome>
        <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
          <p className="text-lg font-semibold w-full sm:w-auto">
            <span className="text-gray-400">Home / </span>Tags
          </p>

          <div className="flex items-center gap-2 flex-wrap">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className={`px-2 py-1 rounded text-sm ${isDark ? "bg-gray-700 text-white" : "bg-white text-gray-800 border border-gray-300"}`}
            >
              <option value="Popular">Popular</option>
              <option value="Alphabetical">Alphabetical</option>
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
          {filteredTags.length > 0 ? (
            filteredTags.map((tag, index) => (
              <div key={index} className={`border p-4 rounded-md ${cardTheme}`}>
                <div className="flex items-center gap-2 text-lg font-semibold mb-4">
                  <FaTag />
                  <span>{tag.name}</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <FaUsers className="mr-2" />
                  {tag.followers} Followers
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400 col-span-full">No tags found.</p>
          )}
        </div>
      </MainHome>
    </div>
  );
};

export default Tags;
