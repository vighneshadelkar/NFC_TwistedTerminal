import "./Navbar.css"
import { NavLink } from "react-router-dom"
import logo from "./mainlogo.jpg"

export default function Navbar() {
  return (
    <nav className="navbar">
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

