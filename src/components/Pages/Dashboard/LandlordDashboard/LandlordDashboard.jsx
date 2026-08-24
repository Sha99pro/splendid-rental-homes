import { Link } from "react-router-dom"
import { applications } from "../../../Data/Applications"

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
                            <th>Date</th>
                            <th>Status</th>
                            <th>Property</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {applications.map((application) =>(
                            <tr key={application.id}>
                                <td>{application.firstName} {application.lastName}</td>
                                <td>{application.startDate}</td>
                                <td>{application.status}</td>
                                <td>{application.property}</td>
                                <td>
                                    <Link to={`/application-details/${application.id}`}>View Application</Link>
                                </td>
                            </tr>
                        ))}
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