import { applications } from "../../Data/Applications";
import { useState } from "react";
import { useParams} from "react-router-dom";
import { Link } from "react-router-dom";

export default function ApplicationDetails(){
    const{id} = useParams();

    const application = applications.find((application) => application.id === Number(id));
    const[status, setStatus] = useState(application? application.status:"Pending");

    if(!application){
        return(
            <main>
                <h1> Application Not found</h1>

                <Link to="/applications">Back to Applications</Link>
            </main>
        )
    }

    return(
        <main>

            <h1> Application Details</h1>

            {/* property & lease */}
            <section>
                <h2>Property & Lease</h2>
                <p> Property:{application.property}</p>
                <p>Rent:${application.rent}</p>
                <p>Lease Length:{application.leaseTerm}</p>
                <p>Start Date:{application.startDate}</p>
            </section>

            {/*Personal info */}
            <section>
                <h2>Applicant Information</h2>
                <p>First Name:{application.firstName}</p>
                <p>Last Name: {application.lastName}</p>
                <p>Date of Birth: {application.dateOfBirth}</p>
                <p>ID number: {application.idNumber}</p>
                <p>Phone:{application.phone}</p>
                <p>Email: {application.email}</p>
                <p>Employer: {application.employer}</p>
            </section>

            {/* Roommates/other Occupants */}
            <section>
                <h2> Roommates/other Occupants</h2>
                {application.occupants.map((person, index) =>{
                    <div key={index}>
                        <p>First Name: {person.firstName}</p>
                        <p>Middle Name: {person.middlename}</p>
                        <p>Last Name: {person.lastName}</p>
                        <p>Date of Birth: {person.dateOfBirth}</p>
                        <p>Relationship: {person.relationship}</p>
                    </div>
                })}
            </section>

            {/*Rental History */}
            <section>
                <h2>Rental History</h2>
                {application.rentalHistory.map((address, index) =>(
                    <div key={index}>
                        <h3>{address.type}</h3>
                        <p>Street:{address.street}</p>
                        <p>City:{address.city}</p>
                        <p>State:{address.state}</p>
                        <p>Zip:{address.zip}</p>
                        <p>How Long: {address.howLong}</p>
                        <p>Manger/Owner Name:{address.managerName}</p>
                        <p>Manager/Owner Phone:{address.managerPhone}</p>
                    </div>
                ))}
            </section>

            {/*Income/employment history*/}
            <section>
                    <h2>Employment History</h2>
                    {application.employment.map((job, index) =>{
                    <div key={index}>
                        <p>Employer:{job.employer}</p>
                        <p>Position:{job.position}</p>
                        <p>Dates;{job.dates}</p>
                        <p>Income:{job.income}</p>
                        <p>Supervisor:{job.supervisor}</p>
                        <p>Phone:{job.supervisor}</p>
                        <p>Address:{job.address}</p>
                        <p>State:{job.state}</p>
                        <p>City:{job.city}</p>
                        <p>Street:{job.street}</p>
                        <p>Zip:{job.zip}</p>
                    </div>
                })}
            </section>

            {/*Other Income*/}
            <section>
                <h2>Other Income sources</h2>
                {application.otherIncome.map((income, index) =>{
                    <div key={index}>
                        <p>Type:{income.type}</p>
                        <p>Monthly Income:{income.monthlyIncome}</p>
                        <p>Provider Name:{income.providerName}</p>
                        <p>Street:{income.street}</p>
                        <p>City:{income.city}</p>
                        <p>State:{income.city}</p>
                        <p>Zip:{income.zip}</p>
                        <p>Phone:{income.phone}</p>
                    </div>
                })}
            </section>

            {/*Emergency contact info */}
            <section>
                <h2>Emergency Contact Information</h2>
                <p>Name:{application.emergencyContact.Name}</p>
                <p>Phone:{application.emergencyContact.phone}</p>
                <p>Relationship:{application.emergencyContact.relationship}</p>
                <p>Street:{application.emergencyContact.street}</p>
                <p>City:{application.emergencyContact.city}</p>
                <p>State:{application.emergencyContact.state}</p>
                <p>Zip:{application.emergencyContact.zip}</p>
            </section>

            {/*Vehicles */}
            <section>
                <h2>Vehicles</h2>
                {application.vehicles.map((vehicle, index)=>{
                    <div key={index}>
                        <p>Make&ModeL:{vehicle.model}</p>
                        <p>Year:{vehicle.year}</p>
                        <p>Color:{vehicle.color}</p>
                        <p>Plate:{vehicle.plate}</p>
                        <p>State:{vehicle.state}</p>
                    </div>
                })}
            </section>

            {/*Other Info */}
            <section>
                <h2>Other Information</h2>
                <p>Ever been evicted:{application.otherInfo.evicted}</p>
                <p>Evicted when:{application.otherInfo.evictionWhen}</p>
                <p>Evicted why:{application.otherInfo.evictionWhy}</p>
                <p>Ever convicted for felony:{application.otherInfo.felony}</p>
                <p>Felony when:{application.otherInfo.felonyWhen}</p>
                <p>Felony why:{application.otherInfo.felonyWhy}</p>
                <p>Ever file bankruptcy:{application.otherInfo.bankruptcy}</p>
                <p>Bankruptcy When:{application.otherInfo.bankruptcyWhen}</p>
                <p>Bankruptcy why:{application.otherInfo.bankruptcyWhy}</p>
                <p>Currently Amoke:{application.otherInfo.smoke}</p>
                <p>Have Pets:{application.otherInfo.pets}</p>
                <p>Pet Type:{application.otherInfo.petType}</p>
                <p>Pet Breed:{application.otherInfo.petBreed}</p>
                <p>Pet weight:{application.otherInfo.petWeight}</p>
                <p>How did you learn about us:{application.otherInfo.referralSource}</p>
            </section>


            {/*Agreement & consent */}
            <section>
                <h2>Agreement & Consent</h2>
                <p>BackgroundCheck consent:{application.agreement.backgroundCheckConsent ? "Yes" : "No" }</p>
                <p> Signature:{application.agreement.signature}</p>
                <p>Date:{application.agreement.date}</p>
            </section>


            {/*Co-signer*/}
            <section>
            <h2>Co-Signer Information</h2>
            <p>Cosigning for:{application.coSigner.coSigningFor}</p>
            <p>Full Name:{application.coSigner.fullName}</p>
            <p>Unit Applied For:{application.coSigner.unitAppliedFor}</p>
            <p>Signature:{application.coSigner.signature}</p>
            <p>Date:{application.coSigner.date}</p>
            </section>

            {/*Message */}
            <section>
                <h2> Message from Applicant</h2>
                <p>{application.message}</p>
            </section>

            {/*Status*/}
            <section>
                <h2>Application Status</h2>
                <p>Status:<strong>{status}</strong></p>
                <select
                value={status}
                onChange={(event) => setStatus(event.target.value)}>
                    <option value="viewed">Viewed</option>
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                    <option value="Rejected">Rejected</option>
                </select>
            </section>

            <Link to="/landlord-dashboard">Back to dashboard</Link>
        </main>
    )
}