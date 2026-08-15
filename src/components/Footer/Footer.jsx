import { Link } from "react-router-dom"

export default function Footer(){
    return(
        <footer>
            <div>
                <div>
                    <h2>SPLENDID RENTAL HOMES</h2>
                    <p>
                        Connecting tenants with comfortable homes and helping landlords find qualifies renters.
                    </p>
                </div>

                <div>
                    <h3>FOR TENANTS</h3>
                    <Link to="/properties">Browse Listings</Link>
                    <Link to="/how-it-works">How It Works</Link>
                    <Link to="Apply">Apply Now</Link>
                </div>

                <div>
                    <h3>FOR LANDLORDS</h3>
                    <Link to="/list-property">List a Property</Link>
                    <Link to="/landlord-login">Landlord Login</Link>
                </div>

                <div>
                    <p> &copy 2026 Splendid Rental Homes. All rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}