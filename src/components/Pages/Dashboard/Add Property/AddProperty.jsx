import { Link } from "react-router-dom"

export default function AddProperty(){
    return(
        <div>
            <h1>ADD PROPERTY</h1>

            <form>
                <label>Property Title</label>
                <input 
                    type="text"
                    placeholder="Enter the home title for ex:'cozy Townhome'"
                />

                <label>Property Type</label>
                <select>
                    <option value="">Select Property Type</option>
                    <option>Single Family Home</option>
                    <option>Apartment</option>
                    <option>Condo</option>
                    <option>Townhome</option>
                </select>

                <label>Bedrooms</label>
                <select>
                    <option value="">Select Bedrooms</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>

                <label>Bathrooms</label>
                <select>
                    <option value="">Select Bathrooms</option>
                    <option>1</option>
                    <option>1.5</option>
                    <option>2</option>
                    <option>2.5</option>
                    <option>3</option>
                </select>

                <label>Rent Amount</label>
                <input type="number" placeholder="$1,600"/>

                <label>Description</label>
                <textarea placeholder="Write the property description here..."></textarea>

                <label>Upload Images</label>
                <input type="file" multiple accept="image/*" />

                <div>
                    <button>SAVE PROPERTY</button>

                    <Link to="/landlord-dashboard">
                        <button type="button"> CANCEL</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}