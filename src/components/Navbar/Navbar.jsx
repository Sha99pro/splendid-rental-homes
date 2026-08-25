import { useState } from "react";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import "./Navbar.css"

export default function Navbar() {

    const[showLogin, setShowLogin] = useState(false);
    const navigate= useNavigate();
    
    return (

        <nav className="navbar">
            <div className="brand">
                <img
                    className="brand-logo"
                    src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
                    alt="Home Logo" />

                <div className="brand-text">
                    <span><strong>Splendid Rental Homes</strong></span>
                    <small>Find a place to call Home</small>
                </div>
            </div>

            <div className="nav-links">
                <Link to="/" >Home</Link>
                <Link to="/properties"> Properties</Link>
                <Link to="/contact">Contact</Link>
                <div className="login-dropdown">
                    <button onClick={() =>setShowLogin(!showLogin)}>
                        Login ⏷
                    </button>
                    {showLogin &&(
                        <div className="login-menu">
                            <Link to="/landlord-login">Landlord Login</Link>
                            
                            <Link to="/tenant-login">Tenant Login</Link>
                      </div>
                    )}
                </div>
                
                <button onClick={() =>navigate("/login")}>Logout ⏻</button>
            </div>
        </nav>
    )
}