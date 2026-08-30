import { properties } from "../Properties/Properties";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ScheduleATour.css";

export default function ScheduleATour() {
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const property = properties.find((property) => property.id === Number(id));
  const [selectedSlots, setSelectedSlots] = useState(0);
  const [scheduled, setScheduled] = useState(false);
  const navigate = useNavigate();

  if (!property) {
    return (
      <main>
        <h1> Property Not Found</h1>
        <Link to="/Properties">Back to Properties</Link>
      </main>
    );
  }

  function handleScheduled(event) {
    event.preventDefault();
    if (selectedSlots < 3) {
      setShowModal(true);
      return;
    }
    navigate("/tour-confirmation");
  }

  return (
    <main className="schedule-tour-page">
      <form onSubmit={handleScheduled}>
        <div>
          <h1 className="schedule-heading">SCHEDULE A TOUR</h1>
          <p>Selected Property: {property.address}</p>
        </div>
        <div>
          <h2>Your Information</h2>
          <label>First Name:</label>
          <input type="text" required />
          <label>Last Name:</label>
          <input type="text" required />
          <label>Email:</label>
          <input type="email" required />
          <label>Phone:</label>
          <input type="tel" required />
        </div>
        <div>
          <h2>Tour Details:</h2>
          <label>Preferred Date:</label>
          <input type="date" name="date" required />
          <h3>Available Time slots</h3>
          <div>
            <label className="time-slot-checkbox">
              <input
                type="checkbox"
                onChange={(event) => {
                  if (event.target.checked) {
                    setSelectedSlots(selectedSlots + 1);
                  } else {
                    setSelectedSlots(selectedSlots - 1);
                  }
                }}
              />{" "}
              10:00AM
            </label>
            <label>
              <input
                type="checkbox"
                onChange={(event) => {
                  if (event.target.checked) {
                    setSelectedSlots(selectedSlots + 1);
                  } else {
                    setSelectedSlots(selectedSlots - 1);
                  }
                }}
              />{" "}
              3:00PM
            </label>
            <label>
              <input
                type="checkbox"
                onChange={(event) => {
                  if (event.target.checked) {
                    setSelectedSlots(selectedSlots + 1);
                  } else {
                    setSelectedSlots(selectedSlots - 1);
                  }
                }}
              />{" "}
              4:00PM
            </label>
            <label>
              <input
                type="checkbox"
                onChange={(event) => {
                  if (event.target.checked) {
                    setSelectedSlots(selectedSlots + 1);
                  } else {
                    setSelectedSlots(selectedSlots - 1);
                  }
                }}
              />{" "}
              5:00PM
            </label>
          </div>
        </div>
        <br></br>

        <p>Selected slots: {selectedSlots}</p>

        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <h3 style={{color: "red"}}>Please select at least 3 time slots.</h3>
            </div>
          </div>
        )}

        <button>Schedule Tour</button>

        {scheduled && (
          <div>
            <h2>Tour scheduled!</h2>
            <p> Your tour reuest has beend submitted successfully.</p>
            <p>The landord will get back to you to confirm the tour.</p>
          </div>
        )}
      </form>
    </main>
  );
}
