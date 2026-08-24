import { useState } from "react"
import { Link } from "react-router-dom"
 
export const properties=[
        {
            id:1,
            title: "Cozy Townhome",
            city: "O'Fallon, MO",
            address:"115 Cobble Rd O'Fallon, MO 63366",
            rent:1850,
            type:"Single Family Home",
            bedrooms:3,
            bathrooms:2,
            sqft: 1450,
            images: ["/images/house1/1.jpg",
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
            ],
            description:"Cozy 3-bedroom single-family home in O'Fallon with comfortable living space, a basement, and a convenient suburban location.",
            amenities: ["3 Bedrooms", 
                "2 Bathrooms", 
                "Basement", 
                "Garage", 
                "Central Air", 
                "Laundry"
            ],
            landlord: "James David",
            email: "Jammy768@splendid.com",
            phone: "504-673-8976",
            deposit: 1800,
            applicationFee: 45,
            leaseTerm: "12 months"
        },
        {
            id:2,
            title: "Family Home",
            city: "Wentzville, MO",
            address:"124 Intrepid Ave Wentzville, MO 65536",
            rent:1600,
            type:"Townhome",
            bedrooms: 3,
            bathrooms: 3,
            sqft: 1900,
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
            ],
            description:"Spacious 3-bedroom Wentzville home with 2.5 bathrooms, 2,100 sqft of living space, a garage, basement, and central air.",
            amenities:["Central Air", 
                "Central Heating", 
                "Garage", 
                "Basement", 
                "Garbage Disposal", 
                "Pet-Friendly"  
            ],
            landlord: "Ritesh",
            email: "ritesh124@splendid.com",
            phone: "314-555-2145",
            deposit: 1900,
            applicationFee: 45,
            leaseTerm: "12 months"
        },

           {
            id:3,
            title: "Family Home",
            city: "Ofallon, MO",
            address:"159 Joseph St Ofallon, MO 63366",
            rent:2000,
            type:"Single Family Home",
            bedrooms: 4,
            bathrooms: 3,
            sqft: 1950,
            images: [
                "/images/house3/1.jpg",
                "/images/house3/2.jpg",
                "/images/house3/3.jpg",
                "/images/house3/4.jpg",
                "/images/house3/5.jpg",
                "/images/house3/6.jpg",
                "/images/house3/7.jpg" 
            ],
            description:"Comfortable family home in O'Fallon with convenient access to local shopping, restaurants, schools, and everyday services.",
            amenities:["Central Air", 
                "Central Heating", 
                "2-car Garage", 
                "Laundry", 
                "Dishwasher", 
                "Patio"
            ],
            landlord: "Madonna",
            email: "maddy123@splendid.com",
            phone: "573-555-3281",
            deposit: 1700,
            applicationFee: 45,
            leaseTerm: "12 months"
        },
           {
            id:4,
            title: "Family Home",
            city: "Wentzville, MO",
            address:"100 Dry Brook Rd Wentzville, MO 63356",
            rent:1750,
            type:"Single Family Home",
            bedrooms: 4,
            bathrooms: 3,
            sqft: 2000,
            images: [
                "/images/house4/1.jpg",
                "/images/house4/2.jpg",
                "/images/house4/3.jpg",
                "/images/house4/4.jpg",
                "/images/house4/5.jpg",
                "/images/house4/6.jpg",
                "/images/house4/7.jpg"
            ],
            description:"Comfortable single family home offering multiple floor plans with convenient access to shopping, dining, and major roads.",
            amenities:["In-Unit Washer & Dryer", 
                "Private Patio", 
                "Basement", 
                "Off-Street Parking", 
                "Dishwasher", 
                "Garbage Disposal"
            ],
            landlord: "Meghana",
            email: "maggie@splendid.com",
            phone: "636-555-4172",
            deposit: 2000,
            applicationFee: 50,
            leaseTerm: "12 months"
        },
           {
            id:5,
            title: "Family Home",
            city: "Wentzville, MO",
            address:"1 Prairie Point Dr Wentzville, MO 63367",
            rent:1900,
            type:"Single Family Home",
            bedrooms: 3,
            bathrooms: 3,
            sqft: 2050,
            images: [
                "/images/house5/1.jpg",
                "/images/house5/2.jpg",
                "/images/house5/3.jpg",
                "/images/house5/4.jpg",
                "/images/house5/5.jpg",
                "/images/house5/6.jpg",
                "/images/house5/7.jpg",
                "/images/house5/8.jpg",
                "/images/house5/9.jpg"
            ],
            description:"Spacious single home offering multiple floor plans with convenient amenities and easy access to shopping and major highways.",
            amenities:["In-Unit Washer & Dryer", 
                "Fitness Center", 
                "Swimming Pool", 
                "Clubhouse", 
                "Pet-Friendly", 
                "Patio/Balcony"
            ],
            landlord: "Sanvika Josh",
            email: "san88@splendid.com",
            phone: "314-555-5628",
            deposit: 1850,
            applicationFee: 45,
            leaseTerm: "12 months"
        },
           {
            id:6,
            title: "Family Home",
            city: "Ofallon, MO",
            address:"204 N Main St Ofallon, MO 63366",
            rent:1950,
            type:"Single Family Home",
            bedrooms: 3,
            bathrooms: 3,
            sqft: 2100,
            images: [
                "/images/house6/1.jpg",
                "/images/house6/2.jpg",
                "/images/house6/3.jpg",
                "/images/house6/4.jpg",
                "/images/house6/5.jpg",
                "/images/house6/6.jpg",
                "/images/house6/7.jpg",
                "/images/house6/8.jpg"
            ],
            description:"Charming single family home in O'Fallon with comfortable 3-bedroom and 3 bathroom homes and a convenient Main Street location.",
            amenities:["Parking", 
                "Air Conditioning", 
                "Kitchen Appliances",
                 "Laundry", 
                 "Community Spaces", 
                 "Pet-Friendly"     
            ],
            landlord: "Jessica Davis",
            email: "jessica@splendid.com",
            phone: "573-555-6384",
            deposit: 1750,
            applicationFee: 40,
            leaseTerm: "12 months",
        },
           {
            id:7,
            title: "Family Home",
            city: " Saint Peters, MO",
            address:"100 Grenache Blanc Blvd Saint Peters, MO 63105",
            rent:2000,
            type:"Single Family Home",
            bedrooms: 3,
            bathrooms: 3,
            sqft: 1870,
            images: [
                "/images/house7/1.jpg",
                "/images/house7/2.jpg",
                "/images/house7/3.jpg",
                "/images/house7/4.jpg",
                "/images/house7/5.jpg",
                "/images/house7/6.jpg",
                "/images/house7/7.jpg",
                "/images/house7/8.jpg"
            ],
            description:"Comfortable apartment community offering multiple floor plans with convenient access to shopping, dining, and major roads.",
            amenities:["Swimming Pool", 
                "Fitness Center", 
                "Clubhouse", 
                "In-Unit Laundry", 
                "Pet-Friendly", 
                "Parking"
            ],
            landlord: "Robert Anderson",
            email: "robert@splendid.com",
            phone: "636-555-7419",
            deposit: 2100,
            applicationFee: 50,
            leaseTerm: "12 months",
        },
           {
            id:8,
            title: "Family Home",
            city: "Lake Saint Louis, MO",
            address:"4000 Brady Way Lake Saint Louis, MO 63367",
            rent:1750,
            type:"Apartment",
            bedrooms: 3,
            bathrooms: 2,
            sqft: 1910,
            images: [
                "/images/house8/1.jpg",
                "/images/house8/2.jpg",
                "/images/house8/3.jpg",
                "/images/house8/4.jpg",
                "/images/house8/5.jpg",
                "/images/house8/6.jpg",
                "/images/house8/7.jpg"
            ],
            description:"Modern Lake Saint Louis apartment community offering comfortable floor plans, in-unit laundry, and convenient access to shopping and I-64.",
            amenities:["In-Unit Washer & Dryer", 
                "Fitness Center", 
                "Swimming Pool", 
                "Clubhouse", 
                "Pet-Friendly", 
                "Patio/Balcony"
            ],
            landlord: "Amyrah",
            email: "amyrah@splendid.com",
            phone: "314-555-8256",
            deposit: 1600,
            applicationFee: 45,
            leaseTerm: "12 months",
        },
           {
            id:9,
            title: "Family Home",
            city: " Wentzville, MO",
            address:"124 Granite Way  Wentzville, MO 63367",
            rent:2100,
            type:"Single Family Home",
            bedrooms: 3,
            bathrooms: 3,
            sqft: 1700,
            images: [
                "/images/house9/1.jpg",
                "/images/house9/2.jpg",
                "/images/house9/3.jpg",
                "/images/house9/4.jpg",
                "/images/house9/5.jpg",
                "/images/house9/6.jpg",
                "/images/house9/7.jpg",
                "/images/house9/8.jpg",
                "/images/house9/9.jpg",
                "/images/house9/10.jpg"
            ],
            description:"Comfortable Wentzville home with spacious bedrooms and a convenient location close to local shopping, dining, and major roads.",
            amenities:["Central Air", 
                "Central Heating", 
                "Garage", 
                "Laundry", 
                "Dishwasher", 
                "Patio"
            ],
            landlord: "Chaitanya",
            email: "chaitanya@splendid.com",
            phone: "573-555-9362",
            deposit: 1950,
            applicationFee: 45,
            leaseTerm: "12 months",
        },
           {
            id:10,
            title: "Family Home",
            city: "Wentzville, MO",
            address:"2680 Droste Rd Wentzville, MO 63367",
            rent:2000,
            type:"Townhome",
            bedrooms: 4,
            bathrooms: 3,
            sqft: 1650,
            images: [
                "/images/house10/1.jpg",
                "/images/house10/2.jpg",
                "/images/house10/3.jpg",
                "/images/house10/4.jpg",
                "/images/house10/5.jpg",
                "/images/house10/6.jpg",
                "/images/house10/7.jpg"
            ],
            description:"Modern 2-bedroom townhome with updated flooring, practical living space, private patio, and convenient off-street parking.",
            amenities:["In-Unit Washer & Dryer", 
                "Private Patio", 
                "Basement", 
                "Off-Street Parking", 
                "Dishwasher", 
                "Garbage Disposal"
            ],
            landlord: "Jennifer Moore",
            email: "jennifer@splendid.com",
            phone: "636-555-1473",
            deposit: 1800,
            applicationFee: 45,
            leaseTerm: "12 months"
        },
           {
            id:11,
            title: "Family Home",
            city: " Lake saint louis, MO",
            address:"3237-3 Rue Royale St Lake saint louis, MO 63367",
            rent:1350,
            type:"Apartment",
            bedrooms: 2,
            bathrooms: 2,
            sqft: 2100,
            images: [
                "/images/house11/1.jpg",
                "/images/house11/2.jpg",
                "/images/house11/3.jpg",
                "/images/house11/4.jpg",
                "/images/house11/5.jpg",
                "/images/house11/6.jpg",
                "/images/house11/7.jpg"
            ],
            description:"Affordable and comfortable home in the Lake Saint Louis area with convenient access to local shopping, dining, and everyday amenities.",
            amenities:["Air Conditioning", 
                "Laundry", "Parking", 
                "Dishwasher", 
                "Kitchen Appliances", 
                "Patio"
            ],
            landlord: "Daniel Joseph",
            email: "daniel@splendid.com",
            phone: "314-555-2584",
            deposit: 2000,
            applicationFee: 50,
            leaseTerm: "12 months",
        },
           {
            id:12,
            title: "Family Home",
            city:"Lake saint louis, MO",
            address:"119 Carlton Point Dr Lake saint louis, MO 63367",
            rent:1750,
            type:"Condo",
            bedrooms: 3,
            bathrooms: 3,
            sqft: 1900,
            images: [
                "/images/house12/1.jpg",
                "/images/house12/2.jpg",
                "/images/house12/3.jpg",
                "/images/house12/4.jpg",
                "/images/house12/5.jpg",
                "/images/house12/6.jpg"
            ],
            description:"Comfortable family home in Lake Saint Louis with spacious bedrooms, multiple bathrooms, and plenty of living space in a peaceful neighborhood.",
            amenities:["Central Air", 
                "Central Heating", 
                "Garage", "Basement", 
                "Laundry Hookups", 
                "Patio"
            ],
            landlord: "Ashley Rithvik",
            email: "ashley@splendid.com",
            phone: "573-555-3695",
            deposit: 1750,
            applicationFee: 45,
            leaseTerm: "12 months"  
        },
           {
            id:13,
            title: "Family Home",
            city:" Lake Saint Louis, MO",
            address:"101 Lemon Dr Lake Saint Louis, MO 63367",
            rent:1800,
            type:"Single Family Home",
            bedrooms: 3,
            bathrooms: 3,
            sqft: 2000,
            images: [
                "/images/house13/1.jpg",
                "/images/house13/2.jpg",
                "/images/house13/3.jpg",
                "/images/house13/4.jpg",
                "/images/house13/5.jpg",
                "/images/house13/6.jpg",
                "/images/house13/7.jpg"
            ],
            description:"Modern home in Lake St. Louis with quality finishes, granite countertops, stainless-steel appliances, and a full-size washer and dryer. Enjoy community amenities including a resort-style pool, fitness center, clubhouse, pickleball court, and outdoor courtyard with firepit and grills.",
            amenities: ["In-Unit Washer & Dryer",
                        "Dishwasher",
                        "Air Conditioning",
                        "Patio/Balcony",
                        "Fitness Center",
                        "Swimming Pool"
            ],
            landlord: "Matthew Sen",
            email: "matthew@splendid.com",
            phone: "636-555-4728",
            deposit: 1900,
            applicationFee: 45,
            leaseTerm: "12 months"
        },
           {
            id:14,
            title: "Family Home",
            city:" Lake Saint Louis, MO 63367",
            address:"1000 Centennial Club Dr Lake Saint Louis, MO 63367",
            rent:1350,
            type:"Townhome",
            bedrooms: 2,
            bathrooms: 2,
            sqft: 1750,
            images: [
                "/images/house14/1.jpg",
                "/images/house14/2.jpg",
                "/images/house14/3.jpg",
                "/images/house14/4.jpg",
                "/images/house14/5.jpg"
            ],
            description: "Brand-new 2-bedroom townhome in Lake Saint Louis with beautiful interior finishes, 2 bathrooms, and 1,750 sq ft of living space. Enjoy a pet-friendly community with a clubhouse, 24-hour fitness center, pool, and easy access to Hwy N and I-64.",
            amenities:[
                "In-Unit Washer & Dryer",
                "Attached Garage",
                "Clubhouse",
                "Fitness Center",
                "Resort-Style Pool",
                "Pet-Friendly"
            ],
            landlord: "Lucky Jade",
            email: "lauren@splendid.com",
            phone: "314-555-5831",
            deposit: 1850,
            applicationFee: 45,
            leaseTerm: "12 months",
        },

           {
            id:15,
            title: "Family Home",
            city:"Ofallon, MO",
            address:"700 Fernwood Ter Ofallon, MO 63366",
            rent:1750,
            type:"Single Family Home",
            bedrooms: 3,
            bathrooms: 3,
            sqft: 2128,
            images: [
                "/images/house15/1.jpg",
                "/images/house15/2.jpg",
                "/images/house15/3.jpg",
                "/images/house15/4.jpg",
                "/images/house15/5.jpg",
                "/images/house15/6.jpg"
            ],
            description:"This 3-bedroom, 3-bathroom rental home in O'fallon, MO, could be just what you're looking for. Enjoy outdoor living on the private patio/balcony. W/D hookups are a convenient addition. See the pictures to learn more.",

            amenities:[
                "Central Air Conditioning",
                "2-car Garage",
                "Laundry Hookups",
                "Wood Fireplace",
                "Private Backyard",
                "Basement",
                "Garbage Disposal",   
            ],
            landlord: "Karthik",
            email: "karthik@splendid.com",
            phone: "573-555-6942",
            deposit: 2100,
            applicationFee: 50,
            leaseTerm: "12 months",
        }
        
    ];
export default function Properties(){

    const[rent, setRent] = useState("All");
    const[homeType, setHomeType] = useState("All");
    const[bedrooms, setBedrooms] = useState("All");
    const[bathrooms, setBathrooms] = useState("All");

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
        <main className= "propeties-page">

            <section className="properties-header">
            <h1>Find your Perfect Rental Home</h1>

            <p> Find comfortable homes in peaceful Missouri neighborhoods. </p>
            </section>

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
                <option value="Single Family Home">Single Family Home</option>
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

            
            <select
                value={bathrooms}
                onChange={(event)=>setBathrooms(event.target.value)}
            >
                <option value="All">Filter by bath</option>
                <option value="1.5">1.5 bath</option>
                <option value="2"> 2 bath</option>
                <option value="2.5">2.5 bath</option>
                <option value="3">3 bath</option>
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
                        <div className="property-card" key={property.id}>
                            <img className ="property-image"
                                src={property.images?.[0]}
                                alt={property.title}
                                
                            />

                            <div>
                                <h2> {property.title}</h2>
                                <p>{property.city}, Missouri</p>
                                <p> {property.address}</p>
                                <p>{property.bedrooms} bedrooms</p>
                                <p>{property.bathrooms} bathrooms</p>
                                <h2> {property.rent}</h2>
                                <Link 
                                to={`/properties/${property.id}`}
                                className="view-details"
                                > View Details</Link>
                            </div>
                        </div>
                        
                    ))}

            </div>

            {/* No results */}

            {filteredProperties.length === 0 && (
                <div className="no-results">
                    <h2> No results found</h2>
                    <p> Change searching. </p>
                </div>
            )}
            
        </main>
    )
    
}

