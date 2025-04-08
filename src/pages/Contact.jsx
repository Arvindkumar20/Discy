import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
// import { useTheme } from "next-themes"; // or your preferred useTheme hook

const Contact = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add backend API submission logic here
    alert("Message submitted!");
  };

  return (
    <div
      className={
        theme == "light"
          ? "min-h-screen px-4 py-10 md:px-20 bg-gray-100  text-gray-950 "
          : "min-h-screen px-4 py-10 md:px-20 bg-gray-950  text-gray-500 "
      }
    >
      <div
        className={
          theme == "light"
            ? "max-w-5xl mx-auto bg-white text-black  p-6 md:p-10 rounded-lg shadow-lg"
            : "max-w-5xl mx-auto bg-gray-700 text-white  p-6 md:p-10 rounded-lg shadow-lg"
        }
      >
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
            <span>📨</span> Contact Us
          </h2>
          <p className="mt-2 text-sm">
            We understand the importance of approaching each work integrally and
            believe in the power of simple and easy communication. Feel free to
            contact us for any questions or if you need any help or services!
            Please provide a detailed explanation of your problem.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="p-2 rounded bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-black dark:text-white"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="p-2 rounded bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-black dark:text-white"
              required
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-1 font-medium">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone"
              className="p-2 rounded bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-black dark:text-white"
              required
            />
          </div>

          {/* Subject */}
          <div className="flex flex-col">
            <label htmlFor="subject" className="mb-1 font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter subject"
              className="p-2 rounded bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-black dark:text-white"
              required
            />
          </div>

          {/* Message - full width */}
          <div className="col-span-1 md:col-span-2 flex flex-col">
            <label htmlFor="message" className="mb-1 font-medium">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className="p-2 rounded bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-black dark:text-white"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition-all text-white font-semibold py-2 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
