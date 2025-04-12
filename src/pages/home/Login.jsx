import React, { useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import MainHome from "./MainHome";

const Login = () => {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState({});
  const [showErrorAlert, setShowErrorAlert] = useState(true);

  const validate = () => {
    const newErrors = {};
    if (!emailOrUsername.trim()) {
      newErrors.emailOrUsername = "Username or email is required.";
    }
    if (!password.trim()) {
      newErrors.password = "Password is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", {
        emailOrUsername,
        password,
        remember,
      });
      // Add your login logic here
    }
  };

  return (
    <MainHome>
      <div className="max-w-md mx-auto px-4 py-8 text-white">
        <div className="text-sm mb-4">
          <span className="text-gray-400">Home / </span>
          <span className="font-semibold">Add group</span>
        </div>

        {showErrorAlert && (
          <div className="bg-red-100 text-red-700 px-4 py-3 rounded mb-4 text-sm font-semibold">
            ❌ You must login to add group.
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-6 rounded shadow-lg space-y-5"
        >
          {/* Username or Email */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              Username or email <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center bg-gray-900 rounded px-3">
              <FaUser className="text-gray-400" />
              <input
                type="text"
                className="w-full bg-transparent px-2 py-2 text-white focus:outline-none"
                value={emailOrUsername}
                onChange={(e) => setEmailOrUsername(e.target.value)}
              />
            </div>
            {errors.emailOrUsername && (
              <p className="text-red-400 text-sm mt-1">{errors.emailOrUsername}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center bg-gray-900 rounded px-3">
              <FaLock className="text-gray-400" />
              <input
                type="password"
                className="w-full bg-transparent px-2 py-2 text-white focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {errors.password && (
              <p className="text-red-400 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Remember me and forgot password */}
          <div className="flex justify-between items-center text-sm">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox bg-gray-700 mr-2"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              Remember Me!
            </label>
            <a href="#" className="text-blue-400 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </MainHome>
  );
};

export default Login;
