import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "./logo2.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/dis">Remedies</NavLink>
        </li>
        {/* <li> */}
          {/* <NavLink to="https://globalchat3232.netlify.app/">Community</NavLink> */}
        {/* </li> */}
        <li>
          <NavLink to="/edu">History</NavLink>
        </li>
        <li>
          <NavLink to="/videos">Videos</NavLink>
        </li>
        <li>
          <NavLink to="/products">Chatbot</NavLink>
        </li>
        <li>
          <NavLink to="https://abhinavgajria.github.io/ayurvedicquiz/">
            Game
          </NavLink>
        </li>
      </ul>

      <ul className="remix">
        <li>
          <i className="ri-user-add-line"></i>
        </li>
        <li>
          <i className="ri-heart-pulse-line"></i>
        </li>
      </ul>
    </nav>
  );
}
