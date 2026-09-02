import { Link } from "react-router-dom";
import "./TenantDashboard.css";

export default function TenantDashboard() {
  return (
    <div className="tenant-dashboard">
      <div className="dashboard-header">
        <div>
          <h1>Tenant Dashboard</h1>
          <p>Welcome back!</p>
        </div>
      </div>
       {/* applications status details*/}
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
         {/*application details table*/}
        <table className="tenant-dashboard-table">
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
        {/*contact landlord */}
        <Link to="/contact">
          <button> Contact Landlord</button>
        </Link>
      </section>
    </div>
  );
}
