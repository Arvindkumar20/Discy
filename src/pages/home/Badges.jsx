import React, { useState } from "react";
import MainHome from "./MainHome";
import { useTheme } from "../../context/ThemeContext";

const badgesData = [
  { type: "points", title: "For signing up.", points: 10 },
  { type: "points", title: "For referring a new user.", points: 20 },
  { type: "points", title: "For making a new post.", points: 10 },
  { type: "points", title: "Your answer gets a vote.", points: 2 },
  { type: "points", title: "For asking an answer.", points: 2 },
  { type: "points", title: "For adding a poll.", points: 5 },
  { type: "points", title: "For linking social media.", points: 5 },
  {
    type: "badges",
    badge: "Beginner",
    points: 10,
    description: "Score of 10+ in at least 10 non-community wiki answers.",
    color: "bg-gray-300 text-black",
  },
  {
    type: "badges",
    badge: "Bronze",
    points: 50,
    description: "Score of 50+ in 50+ non-community wiki answers.",
    color: "bg-red-500 text-white",
  },
  {
    type: "badges",
    badge: "Gold",
    points: 100,
    description: "Score of 100+ in 100+ non-community wiki answers.",
    color: "bg-yellow-400 text-black",
  },
  {
    type: "badges",
    badge: "Green",
    points: 150,
    description: "Score of 150+ in 100+ non-community wiki answers.",
    color: "bg-green-500 text-white",
  },
  {
    type: "badges",
    badge: "Purple",
    points: 200,
    description: "Score of 200+ in 200+ non-community wiki answers.",
    color: "bg-purple-600 text-white",
  },
  {
    type: "badges",
    badge: "Platinum",
    points: 250,
    description: "Score of 250+ in 200+ non-community wiki answers.",
    color: "bg-orange-400 text-white",
  },
];

const Badges = () => {
  const { theme } = useTheme(); // ⬅️ get current theme
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");

  const isDark = theme === "dark";

  const filteredBadges = badgesData.filter((badge) => {
    const matchSearch =
      badge.title?.toLowerCase().includes(search.toLowerCase()) ||
      badge.badge?.toLowerCase().includes(search.toLowerCase()) ||
      badge.description?.toLowerCase().includes(search.toLowerCase());

    const matchType = filterType === "all" || badge.type === filterType;

    return matchSearch && matchType;
  });

  return (
    <MainHome>
      <div
        className={`min-h-screen px-4 sm:px-8 py-6 transition-colors duration-300 ${
          isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h1 className="text-2xl font-bold mb-4 sm:mb-0 drop-shadow">
            🏅 Badge System
          </h1>
          <div className="flex gap-2 w-full sm:w-auto">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className={`border text-sm px-3 py-1.5 rounded focus:ring focus:ring-blue-500 ${
                isDark
                  ? "bg-gray-800 border-gray-700 text-white"
                  : "bg-gray-100 border-gray-300 text-gray-800"
              }`}
            >
              <option value="all">All</option>
              <option value="points">Point System</option>
              <option value="badges">Badges</option>
            </select>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search badges..."
              className={`border px-3 py-1.5 text-sm rounded w-full sm:w-56 focus:ring focus:ring-blue-500 ${
                isDark
                  ? "bg-gray-800 border-gray-700 text-white"
                  : "bg-gray-100 border-gray-300 text-gray-800"
              }`}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBadges.map((badge, idx) =>
            badge.type === "points" ? (
              <div
                key={idx}
                className={`p-5 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                  isDark
                    ? "bg-gray-800 border border-gray-700 hover:border-blue-500"
                    : "bg-gray-100 border border-gray-300 hover:border-blue-400"
                }`}
              >
                <div
                  className={`text-2xl font-semibold ${
                    isDark ? "text-blue-400" : "text-blue-600"
                  }`}
                >
                  {badge.points} Points
                </div>
                <p
                  className={`mt-2 text-sm ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {badge.title}
                </p>
              </div>
            ) : (
              <div
                key={idx}
                className={`p-5 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                  isDark
                    ? "bg-gray-800 border border-gray-700 hover:border-yellow-400"
                    : "bg-gray-100 border border-gray-300 hover:border-yellow-500"
                }`}
              >
                <div
                  className={`text-sm font-semibold px-3 py-1 rounded-full inline-block mb-3 ${badge.color} shadow`}
                >
                  {badge.badge}
                </div>
                <div
                  className={`text-xl font-bold ${
                    isDark ? "text-yellow-300" : "text-yellow-600"
                  }`}
                >
                  {badge.points} Points
                </div>
                <p
                  className={`text-sm mt-2 ${
                    isDark ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  {badge.description}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </MainHome>
  );
};

export default Badges;
