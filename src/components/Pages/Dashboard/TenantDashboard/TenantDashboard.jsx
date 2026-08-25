import { Link } from "react-router-dom"

export default function TenantDashboard(){
    return(
        <div className="tenant-dashboard">
            <div className="dashboard-header">
                <div>
                    <h1>Tenant Dashboard</h1>
                    <p>Welcome back!</p>
                </div>
            </div>

            <div className="summary-cards">
                <div className="summary-card">
                    <h3>Approved</h3>
                    <p>1</p>
                </div>

                <div className="summary-card">
                    <h3>Pending</h3>
                    <p>2</p>
                </div>

                <div className="summary-card">
                    <h3>Applications</h3>
                    <p>3</p>
                </div>
            </div>
            
            <section className="dashboard-section">
                <h2>My Applications</h2>

                <table className="applications-table">
                    <thead>
                        <tr>
                            <th>PROPERTY</th>
                            <th>APPLIED ON</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Cozy Townhome</td>
                            <td>Aug 11, 2026</td>
                            <td>
                                <span className="pending-badge">Pending</span>
                            </td>
                        </tr>

                        <tr>
                            <td>Single Family Home</td>
                            <td>Aug 11, 2026</td>
                            <td>
                                <span className="approved-badge">Approved</span>
                            </td>
                        </tr>

                        <tr>
                            <td>Condo</td>
                            <td>Aug 16, 2026</td>
                            <td>
                                <span className="pending-badge">Pending</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <Link to="/properties">Browse Properties</Link>
            </section>

            

            <section className="help-section">
                <h2>Need help with a property?</h2>
                <Link to="/contact">
                    <button> Contact Landlord</button>
                </Link>
            </section>
        </div>
    )
}