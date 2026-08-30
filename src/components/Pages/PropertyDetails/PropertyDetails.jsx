import { properties } from "../Properties/Properties";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./PropertyDetails.css";

export default function PropertyDetails() {
  const { id } = useParams();

  const property = properties.find((property) => property.id === Number(id));

  if (!property) {
    return (
      <main>
        <h2>The property you searching is not found.</h2>
        <Link to="/properties">Back to properties</Link>
      </main>
    );
  }

  return (
    <main className="property-details-page">
      {/*Main Image*/}
      <div className="main-property-image">
        <img src={property.images[0]} alt={property.title} />
      </div>

      <section className="property-information">
        <strong>
          <h1>{property.title}</h1>
        </strong>
        <p>
          <strong>{property.type}</strong>
        </p>
        <p>{property.address}</p>
        <p>{property.rent}</p>
        {property.bedrooms} Bedrooms |{property.bathrooms} bathrooms |
        {property.sqft} sqft
      </section>

      <div>
        <h2>About this property</h2>
        <p>{property.description}</p>
      </div>

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

      <section>
        <Link className="apply-now" to="/application-form">
          APPLY NOW
        </Link>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link className="schedule-tour" to={`/schedule-tour/${property.id}`}>
          SCHEDULE A TOUR
        </Link>
      </section>

      {/* Contact Landlord*/}
      <section className="landlord-contact">
        <h2> Contact landlord</h2>
        <p>
          <strong>Name: </strong>
          {property.landlord}
        </p>
        <p>
          <strong>Email: </strong>
          {property.email}
        </p>
        <p>
          <strong>Ph# </strong>
          {property.phone}
        </p>
      </section>

      {/* Rental info*/}
      <p>
        <strong>Security Deposit:</strong> ${property.deposit}
      </p>
      <p>
        <strong>Application Fee:</strong> ${property.applicationFee}
      </p>
      <p>
        <strong>Lease term: </strong>
        {property.leaseTerm}
      </p>

      <Link className="back-to-properties" to="/properties">
        Back to Properties
      </Link>
    </main>
  );
}
