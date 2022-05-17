import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import "./Header.css";

const Header = () => {
  const [sidebarToggle, setSidebarToggle] = useState<boolean>(false);

  const { user } = useContext(AuthContext);

  const activateSidebar: string = sidebarToggle ? "active" : "";

  return (
    <header className="Header">
      <Link className="link" to="/">
        <h1>Type-a-Script</h1>
      </Link>
      {user ? (
        <div className="profile-header">
          <Link to={`/user/${user.uid}`}>
            <p>{user.displayName}</p>
          </Link>
          <img src={user.photoURL!} alt="Profile" />
        </div>
      ) : (
        <div>
          {!user && (
            <button className="signin-btn" onClick={signInWithGoogle}>
              Sign in
            </button>
          )}
        </div>
      )}
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
          {user && (
            <li>
              <Link to="/create-blog">Post</Link>
            </li>
          )}
          <li>
            <button
              className="close-btn"
              onClick={() => setSidebarToggle(false)}
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </li>
          {user && (
            <li>
              <button className="signout-btn" onClick={signOut}>
                Sign Out
              </button>
            </li>
          )}
        </ul>
        <button className="sidebar-btn" onClick={() => setSidebarToggle(true)}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;
