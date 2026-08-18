import { useState } from "react"
import { Link } from "react-router-dom"
 

export default function Properties(){

    const properties=[
        {
            id:1,
            title: "cozy Townhome",
            city: "O'Fallon, MO",
            address:"115 Cobble Rd ",
            rent:1850,
            type:"Individual Home",
            bedrooms:3,
            bathrooms:2,
            image: ["/images/house1/1.jpg",
            "/images/house1/2.jpg",
            "/images/house1/3.jpg",
            "/images/house1/4.jpg",
            "/images/house1/5.jpg",
            "/images/house1/6.jpg",
            "/images/house1/7.jpg",
            "/images/house1/8.jpg",
            "/images/house1/9.jpg",
            "/images/house1/10.jpg",
            "/images/house1/11.jpg",
            "/images/house1/12.jpg",
            "/images/house1/13.jpg"
            ]
        },
        {
            id:2,
            title: "Family Home",
            city: "Wentzville, MO",
            address:"124 Intrepid Ave",
            rent:1600,
            type:"Townhome",
            bedrooms: 3,
            bathroooms: 3,
            images: [
                "/images/house2/1.jpg",
                "/images/house2/2.jpg",
                "/images/house2/3.jpg",
                "/images/house2/4.jpg",
                "/images/house2/5.jpg",
                "/images/house2/6.jpg",
                "/images/house2/7.jpg",
                "/images/house2/8.jpg",
                "/images/house2/9.jpg",
                "/images/house2/10.jpg"
            ]
        },
           {
            id:3,
            title: "Family Home",
            city: "Ofallon, MO",
            address:"159 Joseph St",
            rent:2000,
            type:"Individual Home",
            bedrooms: 4,
            bathroooms: 3,
            images: [
                "/images/house2/1.jpg",
                "/images/house2/2.jpg",
                "/images/house2/3.jpg",
                "/images/house2/4.jpg",
                "/images/house2/5.jpg",
                "/images/house2/6.jpg",
                "/images/house2/7.jpg" 
            ]
        },
           {
            id:4,
            title: "Family Home",
            city: "Wentzville, MO",
            address:"100 Dry Brook Rd",
            rent:1750,
            type:"Individual Home",
            bedrooms: 4,
            bathroooms: 3,
            images: [
                "/images/house2/1.jpg",
                "/images/house2/2.jpg",
                "/images/house2/3.jpg",
                "/images/house2/4.jpg",
                "/images/house2/5.jpg",
                "/images/house2/6.jpg",
                "/images/house2/7.jpg"
            ]
        },
           {
            id:5,
            title: "Family Home",
            city: "Wentzville, MO",
            address:"1 Prairie Point Dr",
            rent:1900,
            type:"Individual Home",
            bedrooms: 3,
            bathroooms: 3,
            images: [
                "/images/house2/1.jpg",
                "/images/house2/2.jpg",
                "/images/house2/3.jpg",
                "/images/house2/4.jpg",
                "/images/house2/5.jpg",
                "/images/house2/6.jpg",
                "/images/house2/7.jpg",
                "/images/house2/8.jpg",
                "/images/house2/9.jpg"
            ]
        },
           {
            id:6,
            title: "Family Home",
            city: "Ofallon, MO",
            address:"204 N Main St",
            rent:1950,
            type:"Individual Home",
            bedrooms: 3,
            bathroooms: 3,
            images: [
                "/images/house2/1.jpg",
                "/images/house2/2.jpg",
                "/images/house2/3.jpg",
                "/images/house2/4.jpg",
                "/images/house2/5.jpg",
                "/images/house2/6.jpg",
                "/images/house2/7.jpg",
                "/images/house2/8.jpg"
            ]
        },
           {
            id:7,
            title: "Family Home",
            city: " Saint Peters, MO",
            address:"100 Grenache Blanc Blvd",
            rent:2000,
            type:"Individual Home",
            bedrooms: 3,
            bathroooms: 3,
            images: [
                "/images/house2/1.jpg",
                "/images/house2/2.jpg",
                "/images/house2/3.jpg",
                "/images/house2/4.jpg",
                "/images/house2/5.jpg",
                "/images/house2/6.jpg",
                "/images/house2/7.jpg",
                "/images/house2/8.jpg"
            ]
        },
           {
            id:8,
            title: "Family Home",
            city: "Lake Saint Louis, MO",
            address:"4000 Brady Way",
            rent:1750,
            type:"Apartment",
            bedrooms: 3,
            bathroooms: 2,
            images: [
                "/images/house2/1.jpg",
                "/images/house2/2.jpg",
                "/images/house2/3.jpg",
                "/images/house2/4.jpg",
                "/images/house2/5.jpg",
                "/images/house2/6.jpg",
                "/images/house2/7.jpg"
            ]
        },
           {
            id:9,
            title: "Family Home",
            city: " Wentzville, MO",
            address:"124 Granite Way",
            rent:2100,
            type:"Individual Home",
            bedrooms: 3,
            bathroooms: 3,
            images: [
                "/images/house2/1.jpg",
                "/images/house2/2.jpg",
                "/images/house2/3.jpg",
                "/images/house2/4.jpg",
                "/images/house2/5.jpg",
                "/images/house2/6.jpg",
                "/images/house2/7.jpg",
                "/images/house2/8.jpg",
                "/images/house2/9.jpg",
                "/images/house2/10.jpg"
            ]
        },
           {
            id:10,
            title: "Family Home",
            city: "Wentzville, MO",
            address:"2680 Droste Rd",
            rent:2000,
            type:"Individual Home",
            bedrooms: 4,
            bathroooms: 3,
            images: [
                "/images/house2/1.jpg",
                "/images/house2/2.jpg",
                "/images/house2/3.jpg",
                "/images/house2/4.jpg",
                "/images/house2/5.jpg",
                "/images/house2/6.jpg",
                "/images/house2/7.jpg"
            ]
        },
           {
            id:11,
            title: "Family Home",
            city: " Wentzville, MO",
            address:"3237-3 Rue Royale St",
            rent:1350,
            type:"Apartment",
            bedrooms: 2,
            bathroooms: 2,
            images: [
                "/images/house2/1.jpg",
                "/images/house2/2.jpg",
                "/images/house2/3.jpg",
                "/images/house2/4.jpg",
                "/images/house2/5.jpg",
                "/images/house2/6.jpg",
                "/images/house2/7.jpg"
            ]
        },
           {
            id:12,
            title: "Family Home",
            city:"Lake saint louis, MO",
            address:"119 Carlton Point Dr",
            rent:1750,
            type:"Condo",
            bedrooms: 3,
            bathroooms: 3,
            images: [
                "/images/house2/1.jpg",
                "/images/house2/2.jpg",
                "/images/house2/3.jpg",
                "/images/house2/4.jpg",
                "/images/house2/5.jpg",
                "/images/house2/6.jpg"
            ]
        },
           {
            id:13,
            title: "Family Home",
            city:" Lake Saint Louis, MO",
            address:"101 Lemon Dr",
            rent:1800,
            type:"Individual Home",
            bedrooms: 3,
            bathroooms: 3,
            images: [
                "/images/house2/1.jpg",
                "/images/house2/2.jpg",
                "/images/house2/3.jpg",
                "/images/house2/4.jpg",
                "/images/house2/5.jpg",
                "/images/house2/6.jpg",
                "/images/house2/7.jpg"
            ]
        },
           {
            id:14,
            title: "Family Home",
            city:" Lake Saint Louis, MO 63367",
            address:"1000 Centennial Club Dr",
            rent:1350,
            type:"Apartment",
            bedrooms: 2,
            bathroooms: 2,
            images: [
                "/images/house2/1.jpg",
                "/images/house2/2.jpg",
                "/images/house2/3.jpg",
                "/images/house2/4.jpg",
                "/images/house2/5.jpg"
            ]
        },
           {
            id:15,
            title: "Family Home",
            city:"Ofallon, MO",
            address:"700 Fernwood Ter",
            rent:1750,
            type:"Individual Home",
            bedrooms: 3,
            bathroooms: 3,
            images: [
                "/images/house2/1.jpg",
                "/images/house2/2.jpg",
                "/images/house2/3.jpg",
                "/images/house2/4.jpg",
                "/images/house2/5.jpg",
                "/images/house2/6.jpg"
            ]
        }
        
    ];

   
    const[rent, setRent] = useState("All");
    const[homeType, setHomeType] = useState("All");
    const[bedrooms, setBedrooms] = useState("All");

    const filteredProperties = properties.filter((property) => {


        let matchesRent = true;
        if(rent === "Under $1700"){
            matchesRent = property.rent < 1700;
        }

        if(rent === "$1700 -$2000"){
            matchesRent = property.rent >= 1700 &&
                          property.rent <= 2000;
        }

        if(rent === "Over $2000"){
            matchesRent = property.rent >2000;
        }

        const matchesHomeType = homeType === "All" ||property.type === homeType;

        const matchesBedrooms = bedrooms === "All" ||property.bedrooms === Number(bedrooms);

        return( matchesRent && matchesHomeType && matchesBedrooms);
    });



    return(
        <div className= "propeties-page">
            <h1>Find your Perfect Rental Home</h1>

            <p> Find comfortable homes in peaceful Missouri neighborhoods. </p>

            {/* Search and filters */}
            <div className ="filters">
                
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
                onChange={(event)=>setHomeType(event.target.value)}
            >
                <option value="All">Home Type</option>
                <option value="Ranch Home">Ranch Home</option>
                <option value="Apartment">Apartment</option>
                <option value="Townhome">Townhome</option>
                <option value="Condo">Condo</option>
            </select>

            <select
                value={bedrooms}
                onChange={(event)=>setBedrooms(event.target.value)}
            >
                <option value="All">Filter by Bed</option>
                <option value="2">2 Bedrooms</option>
                <option value="3">3 Bedrooms</option>
                <option value="4"> 4 Bedrooms</option>
            </select>
                
            </div>



            {/* Number of listings */}
            <h2>
                {filteredProperties.length} out of {" "}
                {properties.length} listings
            </h2>

            {/* Property Cards */}
            <div className= "property-grid">
                    {filteredProperties.map((property)=> (
                        <div>
                            <img
                                src={property.image}
                                alt={property.title}
                            />

                            <div>
                                <h2> {property.title}</h2>
                                <p>{property.city}, Missouri</p>
                                <p> {property.address}</p>
                                <p>{property.bedrooms} bedrooms</p>
                                <p>{property.bathrooms} bathrooms</p>
                                <h2> {property.rent}</h2>
                                <Link to={`/properties/${property.id}`}> View Details</Link>
                            </div>

                        </div>
                        
                    ))}

            </div>

            {/* No results */}

            {filteredProperties.length === 0 && (
                <div className="no-results">
                    <h2> No results found</h2>
                    <p> Change search or filters. </p>
                </div>
            )}
        </div>
    )
}