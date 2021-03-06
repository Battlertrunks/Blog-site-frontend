import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import ContainerBlogsRoute from "./components/ContainerBlogsRoute";
// import background from "./img/background.svg";

import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Footer from "./components/Footer";
import BlogDetailsRoute from "./components/BlogComponents/BlogDetailsRoute";
import AboutRoute from "./components/AboutComponent/AboutRoute";
import ContactRoute from "./components/ContactComponent/ContactRoute";
import BlogFormRoute from "./components/BlogFormComponent/BlogFormRoute";
import UserPageRoute from "./components/UserPageComponent/UserPageRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="main-components">
          <Routes>
            <Route path="/" element={<ContainerBlogsRoute />} />
            <Route path="/article/:id" element={<BlogDetailsRoute />} />
            <Route path="/about-page" element={<AboutRoute />} />
            <Route path="/contact-page" element={<ContactRoute />} />
            <Route path="/create-blog" element={<BlogFormRoute />} />
            <Route path="/user/:uid" element={<UserPageRoute />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
