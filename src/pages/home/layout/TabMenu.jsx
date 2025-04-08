import React, { useState } from "react";
import { FaBars, FaEllipsisH } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const TabMenu = () => {
  const [activeTab, setActiveTab] = useState("Recent Questions");
  const [menuOpen, setMenuOpen] = useState(false);

  const tabs = [
    "Recent Questions",
    "Most Answered",
    "Bump Question",
    "Answers",
    "Most Visited",
  ];

  return (
    <div className="w-full border-b border-gray-500">
      {/* Desktop Tabs */}
      <div className="hidden lg:flex items-center space-x-4 sm:space-x-6 px-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(tab)}
            className={`relative text-sm sm:text-base font-medium ${
              activeTab === tab ? "text-white" : "text-gray-400 hover:text-white"
            } transition-all py-6`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white rounded"></span>
            )}
          </button>
        ))}
        <button className="text-gray-400 hover:text-white text-lg">
          <FaEllipsisH />
        </button>
      </div>

      {/* Mobile Top Bar */}
      <div className="lg:hidden flex justify-between items-center px-4 py-4">
        <h1 className="text-white text-base font-semibold">{activeTab}</h1>
        <button
          className="text-white text-xl"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#1a1a1a] z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-700">
          <h2 className="text-white text-lg font-semibold">Menu</h2>
          <button
            className="text-white text-2xl"
            onClick={() => setMenuOpen(false)}
          >
            <IoClose />
          </button>
        </div>
        <div className="flex flex-col px-4 py-4 space-y-3">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveTab(tab);
                setMenuOpen(false);
              }}
              className={`text-left text-sm font-medium ${
                activeTab === tab ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Overlay (click outside to close) */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Bottom Divider */}
      <div className="w-full border-b border-gray-600"></div>
    </div>
  );
};

export default TabMenu;
