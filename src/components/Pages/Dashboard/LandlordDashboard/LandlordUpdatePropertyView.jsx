import {properties} from "../../Properties/Properties"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function LandlordUpdatePropertyView(){
    const{id} = useParams();
    

  
    const property = properties.find((property) => property.id === Number(id));

    if(!property){
        return (
            <main>
                <h2>The property you searching is not found.</h2>
                <Link to="/properties">Back to properties</Link>
            </main>
        )
    }

  
    return(
        <main className="property-details-page">

            {/*Back button*/}
           <Link to="/properties" className="back-button">Back to properties</Link> 

           {/*Property.title*/}  
           <div className="details-header">
                <h1>{property.title}</h1>
                <p className="details-address"> {property.address}</p>
           </div>

             {/*Main Image*/}
           <div className="main-property-image">
                <img 
                src={property.images[0]}
                alt={property.title}
                />
           </div>




            <section className="property-information">
                <strong><h1>{property.title}</h1></strong> 
                    <p>{property.type}</p>
                    <p>{property.address}</p>
                    <strong><p>${property.rent}/month</p></strong>

                    <div className="property-info">
                        <strong>{property.bedrooms} Bedrooms</strong>  |
                        <strong>{property.bathrooms} bathrooms</strong>  |
                        <strong>{property.sqft} sqft</strong>
                    </div>
            </section>

            <section className= "property-description">
                <h2>About this property</h2>
                <p>{property.description}</p>
            </section>

            <section className="property-amenities">
                <h2>Amenities</h2>
                <ul>
                    {property.amenities.map((amenity, index) => (
                        <li key={index}> {amenity} </li>
                    ))}
                </ul>
            </section>


            {/*Property-gallery*/}
            <section>
                <h2>Property Pictures</h2>
                <div className="gallery-grid">
                    {property.images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`${property.title} ${index + 1}`}
                        />
                    ))}
                </div>
            </section>

             {/* Contact Landlord*/}
            <section className="landlord-contact">
                <h2> Contact landlord</h2>
                <p>{property.landlord}</p>
                <p>{property.email}</p>
                <p>{property.phone}</p>
            </section>

           {/* Rental info*/}
            <p>Security Deposit: {property.deposit}</p>
            <p>Application Fee: {property.applicationFee}</p>
            <p>Lease term: {property.leaseTerm}</p>   

            <Link to="/properties">Back to Properties</Link>   
        </main>
    )
}