import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [sidebarToggle, setSidebarToggle] = useState<boolean>(false);

  const activateSidebar: string = sidebarToggle ? "active" : "";

  return (
    <header className="Header">
      <Link className="link" to="/">
        <h1>Type-a-Script</h1>
      </Link>

      <nav>
        <ul className={`nav-links ${activateSidebar}`}>
          <li>
            <Link to="/">Blogs</Link>
          </li>
          <li>
            <Link to="/about-page">About</Link>
          </li>
          <li>
            <Link to="/contact-page">Contact</Link>
          </li>
          <li>
            <button
              className="close-btn"
              onClick={() => setSidebarToggle(false)}
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </li>
        </ul>
        <button onClick={() => setSidebarToggle(true)}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;
