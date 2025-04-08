import React, { useContext } from "react";
import { FaEye, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { BsTriangleFill } from "react-icons/bs";
import { TbTriangleFilled } from "react-icons/tb";

import { useTheme } from "../../context/ThemeContext"; // Assuming you have a separate ThemeContext
import MainHome from "./MainHome";

const QuestionCard = () => {
  const { theme } = useTheme();

  return (
    <MainHome>
      <div
        className={`p-4 w-full mx-auto shadow-lg rounded-lg  ${
          theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
        }`}
      >
        <section className="flex">
          <div className="flex flex-col items-center justify-center gap-2   p-5">
            <button className="flex items-center gap-1 text-gray-500 hover:text-blue-500">
              <TbTriangleFilled />
            </button>
            <div className="text-xl font-bold"> 1k</div>
            <button className="flex items-center gap-1 text-gray-500 hover:text-red-500">
              <TbTriangleFilled className="rotate-180" />
            </button>
          </div>

          <div>
            <div className="flex justify-start gap-3 items-start mb-4 -left-5">
              <div className="flex items-start">
                <img
                  src="https://img.city-cost.com/fit-in/800x800/ada5486c0ec0c6e3e50feec2f9edcd24.jpg"
                  alt="Profile"
                  className="w-12 h-12 rounded-full mr-2"
                />

                <h2 className="text-sm font-bold">Martin Hope</h2>
                <span className="text-xs text-yellow-500 bg-yellow-100 px-2 py-1 rounded-md">
                  Enlightened
                </span>
              </div>
              <span className="text-xs text-gray-500">April 19, 2023</span>
              <span className="text-xs text-gray-500">April 19, 2023</span>
            </div>
            <h1 className="text-lg font-semibold mb-2">
              Is this statement, “I see him last night” can be understood as “I
              saw him last night”?
            </h1>
            <p className="text-sm mb-4">
              In my local language (Bahasa Indonesia), there are no verb-2 or
              past tense forms as a time tracker. So, I often forget to use the
              past form of verbs when speaking English.
            </p>
            <div className="flex gap-2 mb-4">
              <span className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded">
                english
              </span>
              <span className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded">
                language
              </span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-gray-500">
                  <FaEye /> 34k Views
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Answer
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainHome>
  );
};

export default QuestionCard;
