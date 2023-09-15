import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
    <ul className="navbar-links">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/services">Services</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
    </ul>
    <div className="navbar-logo">
      <img src="./mainlogo.jpg" alt="logo" />
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

