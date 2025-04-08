import React from "react";
import { useTheme } from "../context/ThemeContext"; // Adjust path based on your structure

const blogPosts = [
  {
    id: 1,
    date: "April 5, 2025",
    title:
      "Highlighting what’s important about questions & Answers on Discy Community",
    subtitle: "Advanced Features",
    content:
      "We want to make it easier to learn more about a question and highlight key facts about it — such as how popular the question is, how many people are interested in it, and who the audience is. To accomplish...",
    image: "/images/post1.jpg", // Make sure you replace with actual image path
  },
  {
    id: 2,
    date: "April 6, 2025",
    title: "Organizational and company accounts on Discy Engine the next step",
    subtitle: "Advanced Features",
    content:
      "We want to make it easier to learn more about a question and highlight key facts about it — such as how popular the question is, how many people are interested in it, and who the audience is. To accomplish...",
    image: "/images/post2.jpg",
  },
  {
    id: 3,
    date: "April 8, 2025",
    title:
      "Defining quality on Discy Engine – what a helpful answer looks like?",
    subtitle: "Advanced Features",
    content:
      "We want to make it easier to learn more about a question and highlight key facts about it — such as how popular the question is, how many people are interested in it, and who the audience is. To accomplish...",
    image: "/images/post3.jpg",
  },
];

const Blog = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      } min-h-screen py-10 px-4 md:px-20`}
    >
      <div className="space-y-12 max-w-5xl mx-auto">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className={
              theme == "light"
                ? "border border-gray-300  p-6 rounded-lg shadow-md bg-white"
                : "border border-gray-900  p-6 rounded-lg shadow-md bg-gray-800 "
            }
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {post.date}
            </p>
            <h2 className="text-xl font-semibold mt-2">{post.title}</h2>
            <p className="text-blue-500 text-sm mt-1">{post.subtitle}</p>
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto mt-4 rounded-md"
            />
            <p className="mt-4 text-sm">{post.content}</p>
            <div className="mt-4 flex items-center justify-between text-sm text-blue-600 dark:text-blue-400">
              <button className="hover:underline">Read More</button>
              <button className="hover:underline">📤 Share This Article</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
