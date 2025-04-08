import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SignupModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    captcha: false,
    agree: false,
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
    console.log("Form Submitted:", formData);

    // Optional: Add validation logic here if needed

    // Reset form and close modal
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      captcha: false,
      agree: false,
    });

    setModalOpen(false);
  };
  useEffect(() => {
    if (location.pathname == "/sign-up") {
      setModalOpen(true);
    }
  },[]);

  return (
    <div>
      {/* Trigger button */}
      {/* <button
        onClick={() => }
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
      >
        Open Sign Up Modal
      </button> */}

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg w-full max-w-4xl flex relative">
            {/* Close Button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-2 right-3 text-3xl text-white z-10"
            >
              &times;
            </button>

            {/* Left Side Content */}
            <div className="w-1/2 bg-blue-900 text-white p-10 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">Sign Up</h2>
              <p>
                Sign Up to our social questions and Answers Engine to ask
                questions, answer people's questions, and connect with others.
              </p>
              <button
                onClick={() => setModalOpen(false)}
                className="mt-10 bg-gray-800 text-white py-2 px-4 rounded font-semibold"
              >
                Have An Account? Sign In
              </button>
            </div>

            {/* Form Section */}
            <div className="w-1/2 p-10 bg-gray-900">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block mb-1">Username *</label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
                  />
                </div>

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

                <div>
                  <label className="block mb-1">Confirm Password *</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
                  />
                </div>

                {/* CAPTCHA */}
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

                {/* Terms Agreement */}
                <label className="flex items-center text-sm text-gray-400">
                  <input
                    type="checkbox"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                    className="mr-2"
                    required
                  />
                  By registering, you agree to the{" "}
                  <a href="#" className="text-blue-400 underline ml-1 mr-1">
                    Terms of Service
                  </a>
                  and{" "}
                  <a href="#" className="text-blue-400 underline ml-1">
                    Privacy Policy
                  </a>
                  .
                </label>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold"
                >
                  Signup
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignupModal;
