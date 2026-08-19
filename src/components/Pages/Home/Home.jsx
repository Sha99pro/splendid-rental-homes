import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const slides= [
    {
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1600&q=80"
    },
    {
        image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600&q=80"
    },
    {
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=80"
    },
    {
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80"
    }
]

export default function Home(){
    const[currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() =>{
            setCurrentSlide((currentSlide)=>{
                return (currentSlide + 1) % slides.length;
            });
        }, 1500);

        return() =>{
            clearInterval(timer);
        };

    }, []);

    return(
        <div>
            <section
                className ="hero"
                style={{backgroundImage: `url(${slides[currentSlide].image})`
                }}
            >
                <div className= "dots">
                    {slides.map((side, index) => (
                        <span key={index}
                        className={
                            currentSlide=== index? "active-dot": ""
                        }></span>
                    ))}
                </div>
            </section>

            <section className="search-section">
                    <h2>Find your Perfect Rental Home </h2>
                    <div className= "search-box">
                        <input type= "text" placeholder="Search location"/>

                        <select>
                            <option>Property Type</option>
                            <option>Single Family Home</option>
                            <option>Townhome</option>
                            <option>Condo</option>
                            <option>Apartment</option>
                        </select>

                        <select>
                            <option>Bedrooms</option>
                            <option>2 Bedrooms</option>
                            <option>3 Bedrooms</option>
                            <option>4 Bedrooms</option>
                        </select>

                        <select>
                            <option>Bathrooms</option>
                            <option>1 Bathrooms</option>
                            <option>1.5 Bathrooms</option>
                            <option>2 Bathrooms</option>
                            <option>2.5 Bathrooms</option>
                            <option>3 Bathrooms</option>
                        </select>

                        <button>Search</button>
                    </div>
            </section>

            <section classname="features">
                <h2>Why choose Spendid Rental Homes</h2>
                <div classname="feature-grid">
                    <div className="feature-card">
                        <h3>Comfortable Homes</h3>
                        <p>Simple homes designed for comfortable family living</p>
                    </div>
                    <div className="feature-card">
                        <h3>Great Locations</h3>
                        <p>Find homes in peaceful Missouri communities</p>
                    </div>
                    <div>
                        <h3>Easy Renting</h3>
                        <p>View properties and apply online easily</p>
                    </div>
                </div>
            </section>
            <section classname = "cta">
                <h2>Ready to Find your New Home?</h2>
                <p> Explore available rental properties today</p>

                <Link to="/properties">
                    <button> View Homes</button>
                </Link>
            </section>


        </div>
    )

    }


