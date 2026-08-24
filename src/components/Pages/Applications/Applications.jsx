import { Link } from "react-router-dom"
import { applications } from "../../Data/Applications"

export default function Application(){
    return (
        <main>
            <Link to="/landlord-dashboard">Back to Dashboard</Link>

            <h1>Rental application</h1>
            {applications.map((application) => (
                <div key={application.id}>

                    <h2>{application.firstName} {application.lastName}</h2>

                    <p>{application.property}</p>
                    <p>{application.status}</p>

                    <Link to={`/application-details/${application.id}`}>View Application</Link>

                </div>
            ))}

        </main>

        
    )

}