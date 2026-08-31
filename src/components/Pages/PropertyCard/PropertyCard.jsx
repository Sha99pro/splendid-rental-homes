import { Link } from "react-router-dom";
import"./PropertyCard.css"

export default function PropertyCard({ property }) {
  return (
    <div className="property-card">
      <img
        className="property-image"
        src={property.images?.[0]}
        alt={property.title}
      />
      <div>
        <h2>{property.title}</h2>
        <p>{property.city}</p>
        <p>{property.address}</p>
        <p>{property.bedrooms} bedrooms</p>
        <p>{property.bathrooms} bathrooms</p>
        <p>Rent: ${property.rent}/mo</p>

        <Link to={`/properties/${property.id}`} className="view-details">
          View Details
        </Link>
      </div>
    </div>
  );
}
