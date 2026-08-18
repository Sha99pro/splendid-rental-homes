import { Link } from "react-router-dom"


export default function Navbar() {
    return (

        <nav className="navbar">
            <div className="brand">
                <img
                    className="brand-logo"
                    src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
                    alt="Home Logo" />

                <div className="brand-text">
                    <span>Splendid Rental Homes</span>
                    <small>Find a place to call Home</small>
                </div>
            </div>

            <div className="nav-links">
                <Link to="/" >Home</Link>
                <Link to="/properties"> Properties</Link>
                <div className="login-dropdown">
                    <button className="login-button">
                        Login
                    </button>
                    <div className="login-menu">
                        <Link to="landlord-login">Loandlord Login</Link>
                        <Link to="tenant-login">Tenant Login</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}