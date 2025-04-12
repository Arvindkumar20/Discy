import React from "react";
import { useTheme } from "../../context/ThemeContext";
import MainHome from "./MainHome";
import {
  FaLock,
  FaTrophy,
  FaUsers,
  FaEye,
} from "react-icons/fa";

const groupData = [
  {
    title: "MMOexp POE2 Latest Events Spark Community Excitement",
    image: "https://cdn.mmorpg.com/images/heroes/pathofexile.jpg", // Replace with real or local image path
  },
  {
    title: "MMOexp BnS NEO Enhanced PvP Systems Encourage Competitive Play",
    image: "https://cdn.mmorpg.com/images/heroes/bns.jpg",
  },
  {
    title: "MMOexp Diablo 4 Gold: Refining Builds for Maximum Effectiveness",
    image: "https://cdn.mmorpg.com/images/heroes/diablo4.jpg",
  },
  {
    title: "Secure Trading with RSGoldFast RuneScape Gold in Member Worlds",
    image: "https://cdn.mmorpg.com/images/heroes/runescape.jpg",
  },
];

const Groups = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const bgTheme = isDark ? "bg-gray-900 text-white" : "bg-white text-gray-800";
  const cardTheme = isDark
    ? "bg-gray-800 border-gray-700"
    : "bg-gray-100 border-gray-300";

  return (
    <div className={`min-h-screen p-6 ${bgTheme}`}>
      <MainHome>
        <div className="text-lg font-semibold mb-6">
          <span className="text-gray-400">Home / </span>Groups
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {groupData.map((group, index) => (
            <div
              key={index}
              className={`rounded-md overflow-hidden border ${cardTheme} shadow-md transition hover:shadow-xl`}
            >
              <div className="relative">
                <img
                  src={group.image}
                  alt="group cover"
                  className="h-40 w-full object-cover"
                />
                <img
                  src={group.image}
                  alt="group avatar"
                  className="absolute -bottom-5 left-4 w-12 h-12 rounded-full border-2 border-white object-cover"
                />
              </div>

              <div className="pt-7 px-4 pb-4">
                <h3 className="font-semibold text-sm sm:text-base mb-2">
                  {group.title}
                </h3>

                <div className="text-gray-400 text-sm flex items-center gap-2 mb-3">
                  <FaLock className="text-xs" /> Public group
                </div>

                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <FaTrophy className="hover:text-yellow-400 cursor-pointer" />
                  <FaUsers className="hover:text-blue-400 cursor-pointer" />
                  <FaEye className="hover:text-green-400 cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </MainHome>
    </div>
  );
};

export default Groups;
