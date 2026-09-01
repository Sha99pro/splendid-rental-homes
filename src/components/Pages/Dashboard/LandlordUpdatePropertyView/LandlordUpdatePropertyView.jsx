import { properties } from "../../Properties/Properties";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./LandlordUpdatePropertyView.css";

export default function LandlordUpdatePropertyView() {
  const { id } = useParams();

  //Finding the property first
  const property = properties.find((property) => property.id === Number(id));

  //creating the states
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(property?.title || "");
  const [rent, setRent] = useState(property?.rent || "");
  const [address, setAddress] = useState(property?.address || "");
  const [bedrooms, setBedrooms] = useState(property?.bedrooms || "");
  const [bathrooms, setBathrooms] = useState(property?.bathrooms || "");
  const [description, setDescription] = useState(property?.description || "");
  const [sqft, setSqft] = useState(property?.sqft || "");

  if (!property) {
    return (
      <main>
        <h2>Property not found.</h2>
        <Link to="/properties">Back to properties</Link>
      </main>
    );
  }

  function handleSave() {
    setIsEditing(false);
  }

  return (
    <main className="update-property">
      <Link to="/landlord-dashboard" className="back-button">
        Back to Dashboard
      </Link>

      {/* TITLE */}
      {isEditing ? (
        <input
          className="title-input"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      ) : (
        <h1>{title}</h1>
      )}

      {/*ADDRESS */}
      {isEditing ? (
        <input
          type="text"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
      ) : (
        <p className="address">{address}</p>
      )}

      {/* MAIN IMAGE */}
      <img
        className="property-image"
        src={property.images[0]}
        alt={property.title}
      />
      {/* PROPERTY INFORMATION */}
      <section className="property-information">
        <h2>Property Information</h2>
        <p>
          <strong>Type:</strong> {property.type}{" "}
        </p>

        {/* RENT */}
        <p>
          <strong>Rent:</strong>
          {isEditing ? (
            <input
              type="number"
              value={rent}
              onChange={(event) => setRent(event.target.value)}
            />
          ) : (
            rent
          )}
        </p>

        {/* BEDROOMS */}
        <p>
          <strong>Bedrooms:</strong>
          {isEditing ? (
            <input
              type="number"
              value={bedrooms}
              onChange={(event) => setBedrooms(event.target.value)}
            />
          ) : (
            bedrooms 
          )}
        </p>

        {/* BATHROOMS */}
        <p>
          <strong>Bathrooms:</strong>
          {isEditing ? (
            <input
              type="number"
              value={bathrooms}
              onChange={(event) => setBathrooms(event.target.value)}
            />
          ) : (
           bathrooms 
          )}
        </p>

        {/*SQUAREFOOT */}
        <p>
          <strong>Square Feet:</strong>
          {isEditing ? (
            <input
              type="number"
              value={sqft}
              onChange={(event) => setSqft(event.target.value)}
            />
          ) : (
             sqft 
          )}
        </p>
      </section>

      {/* DESCRIPTION */}
      <section className="property-description">
        <h2>About This Property</h2>
        {isEditing ? (
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        ) : (
          <p>{description}</p>
        )}
      </section>

      {/* AMENITIES */}
      <section className="property-amenities">
        <h2>Amenities</h2>
        <ul>
          {property.amenities.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
      </section>

      {/* PROPERTY PICTURES */}
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

      {/* LANDLORD INFORMATION */}{" "}
      <section className="landlord-contact">
        {" "}
        <h2>Contact Landlord</h2> <p>{property.landlord}</p>{" "}
        <p>{property.email}</p> <p>{property.phone}</p>{" "}
      </section>

      {/* RENTAL INFORMATION */}{" "}
      <section className="rental-info">
        <p>
          <strong>Security Deposit:</strong> {property.deposit}{" "}
        </p>
        <p>
          <strong>Application Fee:</strong> {property.applicationFee}{" "}
        </p>
        <p>
          <strong>Lease Term:</strong> {property.leaseTerm}{" "}
        </p>
      </section>

      {/* UPDATE / SAVE BUTTON */}{" "}
      <div className="update-buttons">
        {isEditing ? (
          <button onClick={handleSave}> Save Changes </button>
        ) : (
          <button onClick={() => setIsEditing(true)}> Update Property </button>
        )}{" "}
        <Link to="/landlord-dashboard"> Back to Dashboard </Link>{" "}
      </div>{" "}
    </main>
  );
}
