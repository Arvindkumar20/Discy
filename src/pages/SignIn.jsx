import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SignInModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    captcha: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Sign In Submitted:", formData);

    // Reset and redirect
    setFormData({
      email: "",
      password: "",
      captcha: false,
    });

    setModalOpen(false);
    navigate("/dashboard"); // Or wherever you want after login
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    navigate(-1); // Go back
  };

  useEffect(() => {
    if (location.pathname === "/sign-in") {
      setModalOpen(true);
    }
  }, [location.pathname]);

  return (
    <>
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg w-full max-w-4xl flex relative">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-3 text-3xl text-white z-10"
            >
              &times;
            </button>

            {/* Left Panel */}
            <div className="w-1/2 bg-blue-900 text-white p-10 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">Welcome Back</h2>
              <p>
                Sign in to access your account, post questions, and interact
                with the community.
              </p>
              <button
                onClick={() => navigate("/sign-up")}
                className="mt-10 bg-gray-800 text-white py-2 px-4 rounded font-semibold"
              >
                Don't Have An Account? Sign Up
              </button>
            </div>

            {/* Form Section */}
            <div className="w-1/2 p-10 bg-gray-900">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block mb-1">E-Mail *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
                  />
                </div>

                <div>
                  <label className="block mb-1">Password *</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
                  />
                </div>

                <div className="bg-white rounded p-2 flex items-center justify-between">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="captcha"
                      checked={formData.captcha}
                      onChange={handleChange}
                      required
                    />
                    <span className="text-black">I'm not a robot</span>
                  </label>
                  <img
                    src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                    alt="recaptcha"
                    className="h-6"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold"
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignInModal;
