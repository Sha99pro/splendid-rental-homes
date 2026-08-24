import { Link } from "react-router-dom"

export default function TourConfirmation(){
    return(
        <main>
                    <h1>Tour scheduled!</h1>
                    <p> Your tour request has been submitted successfully.</p>
                    <p>The landord will get back to you to confirm the tour.</p>
                    <p>Thank you for choosing Splendid Rental Homes. We hope you enjoy your tour and find a place you'll be happy to call home!</p>

                    <Link to="/properties">Brose more properties</Link>
        </main>
    )

}