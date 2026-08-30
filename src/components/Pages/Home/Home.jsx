import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { properties } from "../Properties/Properties";

import "./Home.css";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1600&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [location, setLocation] = useState("");
  const [rent, setRent] = useState("");
  const [homeType, setHomeType] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");

   /*setting images effects with timer*/
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((currentSlide) => {
        return (currentSlide + 1) % slides.length;
      });
    }, 1500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  /*filtering properties based on rent,hometype,location,bedrooms,bathrooms*/
  const filteredProperties = properties.filter((property) => {
    let matchesRent = true;
    if (rent === "Under $1700") {
      matchesRent = property.rent < 1700;
    }

    if (rent === "$1700 -$2000") {
      matchesRent = property.rent >= 1700 && property.rent <= 2000;
    }

    if (rent === "Over $2000") {
      matchesRent = property.rent > 2000;
    }

    const matchesLocation = location === "All" || property.city === location;
    const matchesHomeType = homeType === "All" || property.type === homeType;
    const matchesBedrooms =
      bedrooms === "All" || property.bedrooms === Number(bedrooms);
    const matchesBathrooms =
      bathrooms === "All" || property.bathrooms === Number(bathrooms);

    return (
      matchesLocation &&
      matchesRent &&
      matchesHomeType &&
      matchesBedrooms &&
      matchesBathrooms
    );
  });

  return (
    <div className="home-page">
      <section
        className="hero"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
        }}
      >
        <div className="dots">
          {slides.map((side, index) => (
            <span
              key={index}
              className={currentSlide === index ? "active-dot" : ""}
            ></span>
          ))}
        </div>
      </section>

      <section className="search-section">
        <h2>Find your Perfect Rental Home </h2>
        {/* Search and filters */}
        <div className="filters">
          <select
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          >
            <option>All Locations</option>
            <option>Lake Saint Louis, MO</option>
            <option>Wentzville, MO</option>
            <option>O'fallon, MO</option>
            <option>Saint Peters, MO</option>
          </select>

          <select
            value={rent}
            onChange={(event) => setRent(event.target.value)}
          >
            <option value="All">Filter by Rent</option>
            <option value="Under $1700">Under $1700</option>
            <option value="$1700-$2000">$1700-$2000</option>
            <option value="Over $2000">Over $2000</option>
          </select>

          <select
            value={homeType}
            onChange={(event) => setHomeType(event.target.value)}
          >
            <option value="All">Home Type</option>
            <option value="Single Family Home">Single Family Home</option>
            <option value="Apartment">Apartment</option>
            <option value="Townhome">Townhome</option>
            <option value="Condo">Condo</option>
          </select>

          <select
            value={bedrooms}
            onChange={(event) => setBedrooms(event.target.value)}
          >
            <option value="All">Filter by Bed</option>
            <option value="2">2 Bedrooms</option>
            <option value="3">3 Bedrooms</option>
            <option value="4"> 4 Bedrooms</option>
          </select>

          <select
            value={bathrooms}
            onChange={(event) => setBathrooms(event.target.value)}
          >
            <option value="All">Filter by bath</option>
            <option value="1.5">1.5 bath</option>
            <option value="2"> 2 bath</option>
            <option value="2.5">2.5 bath</option>
            <option value="3">3 bath</option>
          </select>
        </div>

        {/* Number of listings */}
        <p>
          {filteredProperties.length} out of {properties.length} listings
        </p>

        {/* No results */}

        {filteredProperties.length === 0 && (
          <div className="no-results">
            <p> No results found. Change searching.</p>
          </div>
        )}

        {/* Property Cards */}
        <div className="property-grid">
          {filteredProperties.map((property) => (
            <div className="property-card" key={property.id}>
              <img
                className="property-image"
                src={property.images?.[0]}
                alt={property.title}
              />

              <div>
                <h2> {property.title}</h2>
                <p> {property.address}</p>
                <p>{property.bedrooms} bedrooms</p>
                <p>{property.bathrooms} bathrooms</p>
                <h2> {property.rent}</h2>
                <Link
                  to={`/properties/${property.id}`}
                  className="view-details"
                >
                  {" "}
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Home page Introduction */}
      <section className="features">
        <h2>Why choose Splendid Rental Homes</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <img src="/homeSectionImages/img1.jpeg" alt="Comfortable home" />
            <h3>Comfortable Homes</h3>
            <p>Simple homes designed for comfortable family living</p>
          </div>
          <div className="feature-card">
            <img src="/homeSectionImages/img2.jpeg" alt="Comfortable home" />
            <h3>Great Locations</h3>
            <p>Find homes in peaceful Missouri communities</p>
          </div>
          <div className="feature-card">
            <img src="/homeSectionImages/img3.jpeg" alt="Comfortable home" />
            <h3>Easy Renting</h3>
            <p>View properties and apply online easily</p>
          </div>
        </div>
      </section>
      <section className="view">
        <h2>Ready to Find your New Home?</h2>
        <p> Explore available rental properties today</p>

        <Link to="/properties">
          <button> View Homes</button>
        </Link>
      </section>
    </div>
  );
}
