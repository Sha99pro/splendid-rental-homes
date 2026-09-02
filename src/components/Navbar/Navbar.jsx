import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const brandLogo = `${import.meta.env.BASE_URL}homeSectionImages/brandLogo.jpg`;
export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="brand">
        {/*brand logo*/}
        <img className="brand-logo" src={brandLogo} alt="Home Logo" />
        {/*brand-name*/}
        <div className="brand-text">
          <span>
            <strong>Splendid Rental Homes</strong>
          </span>
          <small>Find a place to call Home</small>
        </div>
      </div>
      {/*Hamburger button*/}
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      {/*Navigation links*/}
      <div className={menuOpen ? "nav-ink show" : "nav-links"}>
        <Link to="/">Home</Link>
        <Link to="/properties">Properties</Link>
        <Link to="/contact">Contact</Link>
        <div className="login-dropdown">
          <button onClick={() => setShowLogin(!showLogin)}>Login ⏷</button>
          {showLogin && (
            <div className="dropdown-menu">
              <Link to="/landlord-login">Landlord Login</Link>

              <Link to="/tenant-login">Tenant Login</Link>
            </div>
          )}
        </div>
        <button className="logout-button" onClick={() => navigate("/")}>
          Logout ⏻
        </button>
      </div>
    </nav>
  );
}
