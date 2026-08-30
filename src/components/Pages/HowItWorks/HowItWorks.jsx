import { Link } from "react-router-dom";
import "./HowItWorks.css"

export default function HowItWorks() {
  return (
    <main className="how-it-works">
      <h1>How Splendid Rental Homes Works</h1>
      <p>
        Finding and securing your ideal rental home in Missouri should be
        effortless. We’ve streamlined the entire process from your first click
        to move-in day.
      </p>
      <h2>1. Discover & Schedule</h2>
      <p>
        Browse Curated Listings: Explore available single-family homes and
        apartments with clear pricing, photos, and amenity breakdowns.
      </p>
      <p>
        Select Your Tour Format: Choose between an in-person walkthrough with a
        team member or a guided virtual video tour.
      </p>
      <p>
        Pick a Time Slot: Choose a convenient date and lock in an open time
        slot—from 9:00 AM to 5:30 PM—in just a few clicks.
      </p>
      <h2>2. Apply Completely Online</h2>
      <p>
        Fill Out One Form: Complete your Missouri rental application online,
        including property details, personal history, roommates, and emergency
        contacts.
      </p>
      <p>
        Upload Verification: Easily upload your state ID, recent pay stubs, or
        employment offer letters directly to your file.
      </p>
      <p>
        Transparent Review: Submit your application and background check consent
        in seconds. Your application status will update to Pending on your
        tenant dashboard as our team reviews it.
      </p>
      <h3>3. Sign & Move In</h3>
      <p>
        Fast Approval: Get notified as soon as your background, income, and
        landlord references are verified.
      </p>
      <p>
        Digital Lease Signing: Review your lease agreement online, sign
        digitally, and submit your security deposit safely.
      </p>
      <p>
        Welcome Home: Receive key collection instructions, submit proof of
        renter's insurance, and unlock your new Splendid home!
      </p>
      <span>Have Questions Before Applying?</span>
      <p>Our team is here to help you every step of the way.</p>
      <Link to="properties">Browse Properties</Link>{" "}
      <Link to="/properties">Schedule a Tour</Link>{" "}
      <Link to="/contact">Contact Support</Link>
    </main>
  );
}
