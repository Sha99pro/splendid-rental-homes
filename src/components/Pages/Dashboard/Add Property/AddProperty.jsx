import { Link } from "react-router-dom";
import "./AddProperty.css";

export default function AddProperty() {
  return (
    <div className="add-property">
        {/*adding property details*/}
      <h1>ADD PROPERTY</h1>

      <form>
        <label>Property Title</label>
        <input
          type="text"
          placeholder="Enter the home title for ex:'cozy Townhome'"
          required
        />

        <label>Property Address</label>
        <input type="text" placeholder="Enter address" required />

        <label>Property Type</label>
        <select required>
          <option value="">Select Property Type</option>
          <option>Single Family Home</option>
          <option>Apartment</option>
          <option>Condo</option>
          <option>Townhome</option>
        </select>

        <label>Bedrooms</label>
        <select required>
          <option value="">Select Bedrooms</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>

        <label>Bathrooms</label>
        <select required>
          <option value="">Select Bathrooms</option>
          <option>1</option>
          <option>1.5</option>
          <option>2</option>
          <option>2.5</option>
          <option>3</option>
        </select>

        <label>Rent Amount</label>
        <input type="number" placeholder="$1,600" required />

        <label>Description</label>
        <textarea
          placeholder="Write the property description here..."
          required
        ></textarea>

        <label>Upload Images</label>
        <input type="file" multiple accept="image/*" required />

        <div>
          <Link to="/landlord-update-property-view/1">
            <button>SAVE PROPERTY</button>
          </Link>

          <Link to="/landlord-dashboard">
            <button type="button"> CANCEL</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
