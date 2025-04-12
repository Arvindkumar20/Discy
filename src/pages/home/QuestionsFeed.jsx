import React, { useState } from "react";
import MainHome from "./MainHome";
import { useTheme } from "../../context/ThemeContext";

const mockQuestions = [
  {
    id: 1,
    title: "Is this statement, 'I see him last night' correct?",
    author: "Martin Hope",
    date: "April 12, 2025",
    category: "Grammar",
    views: 11000,
    answers: 4,
    votes: 42,
    tags: ["grammar", "english", "past tense"],
    highlight: "top-voted",
  },
  {
    id: 2,
    title: "How do native speakers tell I'm foreign based on my English alone?",
    author: "Ahmed Hassan",
    date: "April 11, 2025",
    category: "Fluency",
    views: 639,
    answers: 6,
    votes: 7,
    tags: ["fluency", "language", "accent"],
  },
  {
    id: 3,
    title:
      'Why are the British confused about calling bread rolls "biscuits"?',
    author: "Aaron Acker",
    date: "March 21, 2025",
    category: "Culture",
    views: 357,
    answers: 2,
    votes: -4,
    tags: ["british", "culture", "biscuits"],
  },
  {
    id: 4,
    title: "Google Analytics reads like a seismic chart lately",
    author: "Martin Smith",
    date: "March 16, 2025",
    category: "Analytics",
    views: 152,
    answers: 3,
    votes: 22,
    tags: ["analytics", "google", "stats"],
  },
  {
    id: 5,
    title: "What are your thoughts on Google Analytics vs other analytics platforms?",
    author: "James Wild",
    date: "March 09, 2025",
    category: "Analytics",
    views: 166,
    answers: 3,
    votes: 16,
    tags: ["google analytics", "tools", "comparison"],
  },
];

const QuestionsFeed = () => {
  const { theme } = useTheme();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredQuestions = mockQuestions.filter((q) => {
    const matchesSearch =
      q.title.toLowerCase().includes(search.toLowerCase()) ||
      q.tags.some((tag) =>
        tag.toLowerCase().includes(search.toLowerCase())
      );
    const matchesFilter = filter === "all" || q.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <MainHome>
      <div
        className={`min-h-screen px-4 py-6 transition-all duration-300 ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h1 className="text-2xl font-bold mb-4 sm:mb-0">Recent Questions</h1>
          <div className="flex gap-2 w-full sm:w-auto">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border rounded px-3 py-1 bg-inherit border-gray-600"
            >
              <option value="all">All Categories</option>
              <option value="Grammar">Grammar</option>
              <option value="Fluency">Fluency</option>
              <option value="Culture">Culture</option>
              <option value="Analytics">Analytics</option>
            </select>
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border rounded px-3 py-1 bg-inherit border-gray-600"
            />
          </div>
        </div>

        {filteredQuestions.map((q) => (
          <div
            key={q.id}
            className={`border rounded-lg p-5 mb-5 shadow-md transition-transform duration-200 hover:scale-[1.01] ${
              theme === "dark"
                ? "bg-gray-800 border-gray-700"
                : "bg-gray-100 border-gray-300"
            }`}
          >
            <div className="flex justify-between items-center mb-2">
              <div className="text-sm font-semibold text-blue-500">
                {q.author} • {q.date} • {q.category}
              </div>
              {q.highlight === "top-voted" && (
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full shadow">
                  🔥 Top Voted
                </span>
              )}
            </div>

            <h2 className="text-lg font-semibold mb-2">{q.title}</h2>

            <div className="flex flex-wrap gap-2 mb-3">
              {q.tags.map((tag, i) => (
                <span
                  key={i}
                  className={`text-xs px-2 py-1 rounded bg-blue-100 text-blue-600 ${
                    theme === "dark" && "bg-blue-800 text-blue-200"
                  }`}
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="flex justify-between text-sm mt-2">
              <div className="flex gap-4">
                <span className="text-green-400">👍 {q.votes}</span>
                <span className="text-gray-400">💬 {q.answers} Answers</span>
                <span className="text-gray-400">👁 {q.views.toLocaleString()} Views</span>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 rounded shadow">
                Answer
              </button>
            </div>
          </div>
        ))}
      </div>
    </MainHome>
  );
};

export default QuestionsFeed;
