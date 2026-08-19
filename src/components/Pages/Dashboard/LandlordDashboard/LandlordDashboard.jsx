import { Link } from "react-router-dom"

export default function LandlordDashboard(){
    return(
        <div className="landlordDashboard">
            <div className="dashboard-header">
                <div>
                    <h1>Welcome back, Landlord!</h1>
                    <p>Manage your rental properties and applications here.</p>
                </div>

                <Link to="/add-property" className="add-property-button">+Add Property</Link>

            </div>
            <div className="summary-cards">
                <div className="summary-card">
                    <h3>Total Porperties</h3>
                    <p>15</p>
                </div>

                <div>
                    <h3> Available Rentals</h3>
                    <p>3</p>
                </div>

                <div>
                    <h3>Applications</h3>
                    <p>6</p>
                </div>
            </div>

            <section>
                <h2>Recent Applications</h2>
                
            <div>
               <table>
                    <thead>
                        <tr>
                            <th>Applicant</th>
                            <th>Property</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>David</td>
                            <td>115 Cobble Rd O'Fallon, MO 63366</td>
                            <td>Aug 11 2026</td>
                            <td>
                                <span className="pending-badge">Pending</span>
                            </td>
                        </tr>

                        <tr>
                            <td>Vijay</td>
                            <td>124 Intrepid Ave Wentzville, MO 65536</td>
                            <td>Aug 13 2026</td>
                            <td>
                                <span className="approved-badge">Approved</span>
                            </td>
                        </tr>

                        <tr>
                            <td>Sharukh</td>
                            <td>100 Dry Brook Rd Wentzville, MO 63356</td>
                            <td>Aug 14 2026</td>
                            <td>
                                <span className="pending-badge">Pending</span>
                            </td>
                        </tr>

                        <tr>
                            <td>Michael</td>
                            <td>204 N Main St Ofallon, MO 63366</td>
                            <td>Aug 10 2026</td>
                            <td>
                                <span className="reject-badge">Rejected</span>
                            </td>
                        </tr>

                        <tr>
                            <td>Emily</td>
                            <td>100 Grenache Blanc Blvd Saint Peters, MO 63105</td>
                            <td>Aug 12 2026</td>
                            <td>
                                <span className="approved-badge">Approved</span>
                            </td>
                        </tr>

                        <tr>
                                <td>Patrick</td>
                                <td>4000 Brady Way Lake Saint Louis, MO 63367</td>
                                <td>Aug 9 2026</td>
                                <td>
                                    <span className="approved-badge">Approved</span>
                                </td>
                        </tr>
                    </tbody>
               </table>

               <div>
                <h3>Your Properties</h3>
                <p> View and manage your rental properties.</p>
                <Link to= "/properties" className="view-all"> View Properties </Link>
              </div>
            </div>
            </section>
        </div>
    )
}