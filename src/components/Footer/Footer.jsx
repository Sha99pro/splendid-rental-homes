import { Link } from "react-router-dom";
import "./Footer.css";
import Button from "../Pages/Button/Button";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
            {/*barnd name and what it does*/}
          <h2>SPLENDID RENTAL HOMES</h2>
          <p>
            Connecting tenants with comfortable homes and helping landlords find
            qualified renters.
          </p>
        </div>
         {/*links for tenants*/}
        <div className="footer-section">
          <h3>FOR TENANTS</h3>
          <Link to="/tenant-login">Tenant Login</Link>{" "}
          <Link to="/properties">Browse Listings</Link>{" "}
          <Link to="/how-it-works">How It Works</Link>
          <br></br>
          <Link to="/tenant-login">
            <Button>Apply Now</Button>
          </Link>
        </div>
         {/*links for landlords*/}
        <div className="footer-section">
          <h3>FOR LANDLORDS</h3>
          <Link to="/landlord-login">List a Property</Link>{" "}
          <Link to="/landlord-login">Landlord Login</Link>
        </div>
         {/*copyright of the brand*/}
        <div className="footer-underneath">
          <p> &copy 2026 Splendid Rental Homes. All rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
