import React from "react";
import { useTheme } from "../../../context/ThemeContext";
import { Link } from "react-router-dom";

const RightSidebar = () => {
  const { theme } = useTheme();

  const sectionBg =
    theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900";
  const boxBg = theme === "dark" ? "bg-gray-700" : "bg-gray-100";

  return (
    <aside
      className={`w-full md:w-80 p-4 space-y-6 md:my-0 my-10 ${sectionBg}`}
    >
      {/* Ask Button */}
      <div className="flex items-center justify-center">
        <Link to={"/contact-us"}>
          <button className="md:w-full w-1/4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
            Ask A Question
          </button>
        </Link>
      </div>

      {/* Stats */}
      <div className={`p-4 rounded-lg ${boxBg}`}>
        <div className="grid grid-cols-3 gap-2 text-center">
          <div>
            <p className="text-xl font-bold text-green-500">21</p>
            <p className="text-xs">Questions</p>
          </div>
          <div>
            <p className="text-xl font-bold text-blue-500">71</p>
            <p className="text-xs">Answers</p>
          </div>
          <div>
            <p className="text-xl font-bold text-purple-500">162</p>
            <p className="text-xs">Users</p>
          </div>
        </div>
      </div>

      {/* Popular Questions */}
      <div className={`p-4 rounded-lg ${boxBg}`}>
        <h4 className="font-semibold mb-2">Popular</h4>
        <ul className="text-sm space-y-3">
          <li>👉 How to respond regarding job applications?</li>
          <li>
            👉 How to handle personal stress caused by unfulfilled
            accomplishments?
          </li>
          <li>👉 What is programmer’s life like?</li>
        </ul>
      </div>

      {/* Top Members */}
      <div className={`p-4 rounded-lg ${boxBg}`}>
        <h4 className="font-semibold mb-2">Top Members</h4>
        <ul className="space-y-3 text-sm">
          <li>
            👑 <strong>Martin Hope</strong>{" "}
            <span className="text-xs text-yellow-500">
              Guardian - 172 points
            </span>
          </li>
          <li>
            🛡️ <strong>Ahmed Hassan</strong>{" "}
            <span className="text-xs text-blue-400">Custodian - 91 points</span>
          </li>
          <li>
            🥇 <strong>Martin Smith</strong>{" "}
            <span className="text-xs text-green-400">
              Supporter - 68 points
            </span>
          </li>
        </ul>
      </div>

      {/* Trending Tags */}
      <div className={`p-4 rounded-lg ${boxBg}`}>
        <h4 className="font-semibold mb-2">Trending Tags</h4>
        <div className="flex flex-wrap gap-2 text-xs">
          {[
            "coding",
            "career",
            "learning",
            "self-help",
            "tips",
            "teamwork",
            "growth",
            "motivation",
            "productivity",
            "emotions",
            "logic",
            "debugging",
            "thinking",
            "life",
            "community",
            "creativity",
            "engineer",
            "journey",
          ].map((tag, i) => (
            <span
              key={i}
              className="bg-gray-600 text-white px-2 py-1 rounded dark:bg-gray-600"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
