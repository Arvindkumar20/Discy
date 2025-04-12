import React, { useState, useContext } from "react";
import MainHome from "./MainHome";
import { useTheme } from "../../context/ThemeContext";

const usersData = [
  { name: "Anna leo", role: "Beginner", avatar: "https://randomuser.me/api/portraits/women/1.jpg", date: "2024-06-01" },
  { name: "richardmyhill", role: "Beginner", avatar: "/logo.png", date: "2024-05-01" },
  { name: "WaldoWhite", role: "Intermediate", date: "2024-03-10" },
  { name: "Alex", role: "Beginner", date: "2024-06-10" },
  { name: "cidey80049", role: "Expert", date: "2024-01-05" },
  { name: "Da649", role: "Beginner", date: "2024-02-15" },
  { name: "Charlie", role: "Intermediate", date: "2024-02-20" },
  { name: "Nova", role: "Expert", date: "2024-02-25" },
  { name: "Luna", role: "Beginner", date: "2024-02-01" },
  { name: "Ethan", role: "Intermediate", date: "2024-01-15" },
  { name: "Zara", role: "Beginner", date: "2024-03-22" },
  { name: "Mason", role: "Expert", date: "2024-04-10" },
];

const USERS_PER_PAGE = 6;

const UserListPage = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Date");
  const [currentPage, setCurrentPage] = useState(1);
  const { theme } = useTheme();

  const isDark = theme === "dark";

  const processedUsers = usersData
    .filter(
      (user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) &&
        (filter === "All" || user.role === filter)
    )
    .sort((a, b) =>
      sort === "Name"
        ? a.name.localeCompare(b.name)
        : new Date(b.date) - new Date(a.date)
    );

  const totalPages = Math.ceil(processedUsers.length / USERS_PER_PAGE);
  const currentUsers = processedUsers.slice(
    (currentPage - 1) * USERS_PER_PAGE,
    currentPage * USERS_PER_PAGE
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <MainHome>
      <div className={`min-h-screen px-6 py-6 transition-all duration-300 ${isDark ? "bg-[#1f2937] text-white" : "bg-white text-gray-900"}`}>
        {/* Controls */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="text-sm text-gray-400">
            <span className={isDark ? "text-white" : "text-gray-800"}>🏠 Home</span> / <span className="font-semibold">Users</span>
          </div>
          <div className="flex gap-2 flex-wrap">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className={`border px-3 py-1 rounded text-sm ${isDark ? "bg-gray-800 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-800"}`}
            >
              <option value="Date">Date Registered</option>
              <option value="Name">Name (A-Z)</option>
            </select>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className={`border px-3 py-1 rounded text-sm ${isDark ? "bg-gray-800 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-800"}`}
            >
              <option value="All">All Roles</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Expert">Expert</option>
            </select>
            <div className="relative">
              <input
                type="text"
                placeholder="Type to find..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1);
                }}
                className={`border rounded px-3 py-1 pr-8 text-sm placeholder-gray-400 ${isDark ? "bg-gray-800 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-800"}`}
              />
              <span className="absolute right-2 top-1.5 text-gray-400 pointer-events-none">🔍</span>
            </div>
          </div>
        </div>

        {/* Users Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {currentUsers.length ? (
            currentUsers.map((user, idx) => (
              <div
                key={idx}
                className={`rounded-md p-6 flex flex-col items-center transition-colors duration-300 ${
                  isDark ? "bg-gray-900 border border-gray-700" : "bg-gray-100 border border-gray-300"
                }`}
              >
                <div className="w-24 h-24 rounded-full border-4 border-blue-600 overflow-hidden mb-4">
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <img
                      src="https://www.svgrepo.com/show/382106/user-circle.svg"
                      alt="default"
                      className="object-contain w-full h-full opacity-70"
                    />
                  )}
                </div>
                <h3 className="text-lg font-semibold text-blue-500">{user.name}</h3>
                <span className="mt-2 text-xs bg-black text-white px-2 py-0.5 rounded">{user.role}</span>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-400">No users found.</p>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 gap-2 text-sm">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className={`px-3 py-1 rounded border ${isDark ? "bg-gray-800 border-gray-700 hover:bg-gray-700" : "bg-white border-gray-300 hover:bg-gray-200"}`}
              disabled={currentPage === 1}
            >
              ◀
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`px-3 py-1 rounded border ${
                  currentPage === i + 1
                    ? "bg-blue-500 text-white"
                    : isDark
                    ? "bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700"
                    : "bg-white text-gray-800 border-gray-300 hover:bg-gray-200"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className={`px-3 py-1 rounded border ${isDark ? "bg-gray-800 border-gray-700 hover:bg-gray-700" : "bg-white border-gray-300 hover:bg-gray-200"}`}
              disabled={currentPage === totalPages}
            >
              ▶
            </button>
          </div>
        )}
      </div>
    </MainHome>
  );
};

export default UserListPage;
