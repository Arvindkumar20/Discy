import React, {  useState } from "react";
import MainHome from "./MainHome";
import { useTheme } from "../../context/ThemeContext";

const faqData = [
  {
    question: "What topics can I ask about here?",
    answer:
      "You can ask about programming, software development, tools, algorithms, and practical coding questions.",
  },
  {
    question: "What types of questions should I avoid asking?",
    answer:
      "Avoid asking opinion-based, off-topic, or vague questions that are hard to answer objectively.",
  },
  {
    question: "What does it mean if a question is",
    answer:
      "It usually means it has been closed, marked as unclear, too broad, or off-topic.",
  },
  {
    question: "How to create a Minimal, Complete, and Verifiable example",
    answer:
      "Include only the relevant code that can reproduce the issue and remove unrelated parts.",
  },
  {
    question:
      "What if I disagree with the closure of a question? How to reopen it?",
    answer:
      "You can edit the question to address the issues and then request it to be reopened through review.",
  },
  {
    question:
      "Why do I see a message that my question does not meet standards?",
    answer:
      "It likely means your question lacks clarity, detail, or doesn't follow community guidelines.",
  },
  {
    question: "Why are some questions marked as duplicate?",
    answer:
      "Duplicates are questions that already have an answer elsewhere on the platform.",
  },
  {
    question: "Why are questions no longer being accepted from my account?",
    answer:
      "This can happen if many of your questions have been poorly received. Try improving quality.",
  },
  {
    question:
      "Why is the system asking me to wait a day before asking another?",
    answer:
      "Rate limits are in place to encourage quality over quantity when asking questions.",
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { theme, toggleTheme } = useTheme();

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <MainHome>
      <div
        className={`min-h-screen px-4 py-6 transition-colors duration-300 ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        

        {/* Breadcrumb */}
        <div
          className={`text-sm mb-4 ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          <span className="font-medium">🏠 Home</span> /{" "}
          <span className="font-semibold">FAQs</span>
        </div>

        {/* Header */}
        <div
          className={`p-6 rounded-xl shadow-md ${
            theme === "dark" ? "bg-gray-800" : "bg-gray-100"
          }`}
        >
          <h1 className="text-lg font-semibold mb-2">📘 FAQs</h1>
          <p
            className={`text-sm ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Find out everything you need to get started by taking the tour. If
            you still have questions, check the pinned articles. Need help?
            Contact us at
            <a
              href="mailto:email@domain.com"
              className="text-blue-400 hover:underline ml-1"
            >
              email@domain.com
            </a>
            .
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-6 space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`rounded-md overflow-hidden ${
                theme === "dark" ? "bg-gray-800" : "bg-gray-100"
              }`}
            >
              <button
                onClick={() => toggleDropdown(index)}
                className={`w-full text-left px-4 py-3 font-medium flex justify-between items-center transition hover:bg-opacity-60 ${
                  theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"
                }`}
              >
                {faq.question}
                <span
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {openIndex === index ? "▲" : "▼"}
                </span>
              </button>
              {openIndex === index && (
                <div
                  className={`px-4 pb-4 text-sm ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </MainHome>
  );
};

export default FAQPage;
