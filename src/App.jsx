import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";
import ToggleThemeButton from "./components/ToggleThemeButton";
import { FaEdit, FaPen } from "react-icons/fa";
import { FaUpDown, FaUpLong } from "react-icons/fa6";
import ActionIcons from "./components/ActionIcons";
import Communities from "./pages/home/Communities";
import FAQPage from "./pages/home/FAQPage";
import UserListPage from "./pages/home/UserListPage";
import Tags from "./pages/home/Tags";
import Groups from "./pages/home/Groups";
import Login from "./pages/home/Login";
import Badges from "./pages/home/Badges";
import QuestionsFeed from "./pages/home/QuestionsFeed";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<QuestionsFeed />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        
        <Route path="/communities" element={<Communities />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/help" element={<FAQPage />} />
        <Route path="/user-list" element={<UserListPage />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/login" element={<Login />} />
        <Route path="/badges" element={<Badges />} />
      </Routes>

      {/* Theme Toggle Button fixed to bottom-right */}

      <ActionIcons />

      <Footer />
    </Router>
  );
};

export default App;
