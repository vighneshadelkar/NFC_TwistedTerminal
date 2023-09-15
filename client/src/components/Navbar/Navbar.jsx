import "./Navbar.css"
import { NavLink } from "react-router-dom"
import logo from "./logo2.png"
import { Helmet } from "react-helmet"

export default function Navbar() {
  return (
    <nav className="navbar">
       <Helmet>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
        />
      </Helmet>
    <ul className="navbar-links">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/dis">About</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
    <div className="navbar-logo">
      <img src={logo} alt="logo" />
    </div>
    <ul className="remix">
      <li>
        <i className="ri-user-add-line"></i>
      </li>
      <li>
        <i className="ri-heart-pulse-line"></i>
      </li>
    </ul>
  </nav>
  )
}

