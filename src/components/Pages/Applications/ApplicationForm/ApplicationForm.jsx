import { useState } from "react";
import { Link } from "react-router-dom";
import "./ApplicationForm.css";

export default function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }
   {/*conditional rendering: based on application submission status */}
  if (submitted) {
    return (
      <div className="application-submitted">
        <h1>Application Submitted</h1>
        <p>Your application has been submitted successfully. </p>
        <p>The landlord will review your application. </p>
        <p>You can view your application status from your dashboard.</p>
        <p className="application-status">
          Application status: <strong>Pending</strong>
        </p>

        <div className="application-buttons">
          <Link to="/tenant-dashboard">
            <button>View Application Status</button>
          </Link>
          <Link to="/properties">
            <button>Browse more homes</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="application-form">
      {!submitted && (
        <form onSubmit={handleSubmit}>
          <h1>Splendid Rental Homes</h1>
          <h2>Rental Application Form</h2>

          {/*Property & Lease*/}
          <section>
            <h2>1.Property &Lease:</h2>
            <label>Property</label>
            <input type="text" required />

            <label>Monthly Rent</label>
            <input type="text" required />

            <label>Lease length</label>
            <input type="text" required />

            <label>Start Date</label>
            <input type="date" required />
          </section>

          {/* Personal Details*/}
          <section>
            <h2>Personal Details</h2>

            <label>First Name</label>
            <input type="text" required />
            <label>Last Name</label>
            <input type="text" required />

            <label>Date of Birth</label>
            <input type="date" required />

            <label>SSN</label>
            <input
              type="text"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{4}"
              placeholder="123-45-6789"
              required
            />

            <label>Driver's License# / State ID</label>
            <input type="text" required />

            <label>Phone #</label>
            <input
              type="tel"
              pattern="[0-9]{10}"
              placeholder="1234567890"
              required
            />

            <label>Email</label>
            <input type="email" required />

            <label>Current Employer</label>
            <input type="text" required />

            <label>Employer Phone #</label>
            <input
              type="tel"
              pattern="[0-9]{10}"
              placeholder="1234567890"
              required
            />
          </section>

          {/*Roommates/other Occupants*/}

          <section>
            <h2>Roommates/ Other Occupants </h2>
            <table>
              <thead>
                <tr>
                  <th>Full Name- First, Middle, Last</th>
                  <th>Birth date(MM/DD/YYYY)</th>
                  <th>Relationship to you</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <input type="text" required />
                  </td>
                  <td>
                    <input type="date" required />
                  </td>
                  <td>
                    <input type="text" required />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" required />
                  </td>
                  <td>
                    <input type="date" required />
                  </td>
                  <td>
                    <input type="text" required />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="date" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="date" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          {/*Rental History */}
          <section>
            <h2>
              Rental History(Please list your most recent addresses or from past
              five years.)
            </h2>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Current Address</th>
                  <th>Previous Address</th>
                  <th>Previous address</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th>Street Address</th>
                  <td>
                    <input type="text" required />
                  </td>
                  <td>
                    <input type="text" required />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>

                <tr>
                  <th>City, State, Zip</th>
                  <td>
                    <input type="text" required />
                  </td>
                  <td>
                    <input type="text" required />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>

                <tr>
                  <th>How long at this address</th>
                  <td>
                    <input type="text" required />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>

                <tr>
                  <th>Manager/Owner Name</th>
                  <td>
                    <input type="text" required />
                  </td>
                  <td>
                    <input type="text" required />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>

                <tr>
                  <th>Manager/Owner Phone</th>
                  <td>
                    <input
                      type="tel"
                      pattern="[0-9]{10}"
                      placeholder="1234567890"
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="tel"
                      pattern="[0-9]{10}"
                      placeholder="1234567890"
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="tel"
                      pattern="[0-9]{10}"
                      placeholder="1234567890"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Employment History*/}
          <section>
            <h2>
              {" "}
              Income-Employment History(Please list employment from past five
              years & other sources of income.)
            </h2>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Current Employer</th>
                  <th>Previous Employer</th>
                  <th> Previous Employer</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th>Employed by</th>
                  <td>
                    <input type="text" required />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <th>Position</th>
                  <td>
                    <input type="text" required />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <th>Dates of Employment(From...To)</th>
                  <td>
                    <input type="date" required />
                  </td>
                  <td>
                    <input type="date" />
                  </td>
                  <td>
                    <input type="date" />
                  </td>
                </tr>

                <tr>
                  <th>Monthly Income</th>
                  <td>
                    <input type="text" required />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>

                <tr>
                  <th>Name of Supervisor</th>
                  <td>
                    <input type="text" required />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>

                <tr>
                  <th>Supervisor's Phone#</th>
                  <td>
                    <input
                      type="tel"
                      pattern="[0-9]{10}"
                      placeholder="1234567890"
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="tel"
                      pattern="[0-9]{10}"
                      placeholder="1234567890"
                    />
                  </td>
                  <td>
                    <input
                      type="tel"
                      pattern="[0-9]{10}"
                      placeholder="1234567890"
                    />
                  </td>
                </tr>

                <tr>
                  <th>Address-Street, City, State, Zip</th>
                  <td>
                    <input type="text" required />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          {/*Other Income sources*/}
          <section>
            <h2>Other income Sources</h2>
            <table>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Monthly Income</th>
                  <th>Name of Provider</th>
                  <th>Address-Street, City, State, Zip</th>
                  <th>Phone #</th>
                </tr>

                <tr>
                  <td>
                    <input type="text" required />
                  </td>
                  <td>
                    <input type="text" required />
                  </td>
                  <td>
                    <input type="text" required />
                  </td>
                  <td>
                    <input type="text" required />
                  </td>
                  <td>
                    <input
                      type="tel"
                      pattern="[0-9]{10}"
                      placeholder="1234567890"
                      required
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input
                      type="tel"
                      pattern="[0-9]{10}"
                      placeholder="1234567890"
                    />
                  </td>
                </tr>
              </thead>
            </table>
          </section>

          {/*Emergency Contact Info */}
          <section>
            <h2>Emergency Contact Information</h2>
            <label>Name</label>
            <input type="text" required />

            <label>Phone # </label>
            <input
              type="tel"
              pattern="[0-9]{10}"
              placeholder="1234567890"
              required
            />

            <label>Relationship</label>
            <input type="text" required />

            <label>Address-Street, City, State, Zip</label>
            <input type="text" required />
          </section>

          {/*Vehicles*/}
          <section>
            <h2>Vehicles</h2>
            <table>
              <thead>
                <tr>
                  <th>Make &Model</th>
                  <th>Year</th>
                  <th>Color</th>
                  <th>Plate #</th>
                  <th>State</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="text" required />
                  </td>
                  <td>
                    <input type="text" required />
                  </td>
                  <td>
                    <input type="text" required />
                  </td>
                  <td>
                    <input type="text" required />
                  </td>
                  <td>
                    <input type="text" required />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Other Info */}
          <section>
            <h2>Other Information</h2>

            <p>Have you ever been evicted?</p>
            <label>
              <input type="radio" name="evicted" required />
              Yes
            </label>
            <label>
              <input type="radio" name="evicted" required />
              No
            </label>

            <p>If Yes, When & Why</p>
            <textarea maxLength="250" Placeholder="Enter here"></textarea>

            <p>Have you ever been convicted of a felony?</p>
            <label>
              <input type="radio" name="convicted" required />
              Yes
            </label>
            <label>
              <input type="radio" name="convicted" required />
              No
            </label>

            <p>If Yes, When & Why</p>
            <textarea maxLength="250" Placeholder="Enter here"></textarea>

            <p> Have you ever filed for bankruptcy</p>
            <label>
              <input type="radio" name="bankruptcy" required />
              Yes
            </label>
            <label>
              <input type="radio" name="bankruptcy" required />
              No
            </label>

            <p>If Yes, When & Why</p>
            <textarea maxLength="250" Placeholder="Enter here"></textarea>

            <p> Do you currently smoke?</p>
            <label>
              <input type="radio" name="smoke" required />
              Yes
            </label>
            <label>
              <input type="radio" name="smoke" required />
              No
            </label>

            <p> Do you have any pets?</p>
            <label>
              <input type="radio" name="pets" required />
              Yes
            </label>
            <label>
              <input type="radio" name="pets" required />
              No
            </label>

            <p> If yes, please list each Type, Breed & Approx.Weight</p>
            <textarea
              maxlength="200"
              Placeholder="Enter Type, Breed, Weight here"
              required
            ></textarea>

            <p>How did you learn about us?</p>
            <textarea maxlength="100"></textarea>
          </section>

          {/* Agreement & consent to background check */}
          <section>
            <h2>Agreement & Consent to Background Check</h2>
            <p>
              I believe that the statements I have made are true and correct. I
              hereby authorize the verification of information I provided,
              communication with any and all names listed on this application
              and for the issuer of this form to conduct a background check to
              obtain additional information on credit history, criminal history
              and all Unlawful Detainers. I understand that any discrepancy or
              lack of information may result in the rejection of this
              application. I understand that this is an application for a home
              or apartment and doesnot constitute a rental or lease agreement in
              whole or in part. I further understand that there is a
              non-refundable fee to cover the cost of processing my application
              and I am not entitled to a refund.{" "}
            </p>
            <div className="signature-section">
              <div>
                <label>Signature:</label> <input type="text" required />
              </div>
              <div>
                <label>Date:</label> <input type="date" required />
              </div>
            </div>
          </section>

          {/*Co-signer */}
          <section>
            <h2>Co-Signer</h2>
            <p>
              By signing this form, Co-signer authorizes the landlord to perform
              a credit check or background check, if necessary. Co-signer forms
              are accepted at the landlord's discretion, and a co-signer form
              does not in any way guarantee an applicant a rental unit. Failure
              ro fully compete a requested co-signer form may result in the
              landlord refusing a rental application.
            </p>
          </section>

          {/*Co-signing for*/}
          <section>
            <h2>Co-signing for</h2>
            <label>Full Name</label>
            <input type="text" required />
            <label>Unit Applied for</label>
            <input type="text" required />
          </section>

          <section>
            <p>
              It is hereby agreed that the aforementioned Co-signer will assume
              any and all responsibilities and/or obligations of the
              Leaseholder's share of expenses if the Leaseholder cannot or will
              not oblige. This Co-signer agreement will remain in force
              throughout the entire term of the Leasholder's tenancy, even if
              the tenancy is extended and/or changed in its terms.
            </p>
            <label>Signature:</label>
            <input type="text" required />
            <label>Date:</label>
            <input type="date" required />
          </section>

          {/*List of proofs*/}

          <p>
            List of Required documents to be submitted for Application
            processing. Copy of each, valid Driver's License OR valid Government
            Identification card, Recent 3 pay stubs or Proof of Income sources
            for past 3 months, Latest Eployment offer letter confirming
            employment. It is require to have tenant's insurance after lease
            signed. Send signed application form and reuired documents to
            email-id:Splendid@gmail.com .
          </p>
          <h3>Applicant 1</h3>
          <label>Driver's License</label>
          <input type="file" required />
          <label>Government ID</label>
          <input type="file" />
          <label>Recent 3 pay stubs</label>
          <input type="file" multiple required />
          <label>Latest employment offer letter</label>
          <input type="file" required />

          <section>
            <button type="submit">Submit Application</button>
          </section>
        </form>
      )}
    </main>
  );
}
