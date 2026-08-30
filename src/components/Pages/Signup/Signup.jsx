import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";

export default function Signup() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();
     {/* handling browser default refresh*/}
  function handleSubmit(event) {
    event.preventDefault();
     {/*conditional rendering for the inputs*/}
    if (!name || !email || !password || !confirmPassword) {
      setMessage("Please fill all the details");
      return;
    }
    if (password.length < 6) {
      setMessage("Password must be atleast 6 chaarcters");
      return;
    }
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }
     {/*create localstorage to save the details(email id, password and role*/}
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("role", role);
    {/*conditional rendering and routing based on role selection*/}
    if (role === "tenant") {
      navigate("/tenant-login");
    } else {
      navigate("/landlord-login");
    }
  }
  return (
    <div className="signup">
      <h1>SIGNUP</h1>
      <p> Create your Splendid Rental Homes account</p>

      <form onSubmit={handleSubmit}>
        <label>FullName</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your Full Name"
          required
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          minLength="6"
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter your password"
          required
        />

        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          placeholder="Enter the password again"
          required
        />

        <p>I am a:</p>
        <div>
          <label>
            <input
              type="radio"
              name="role"
              value="tenant"
              onChange={(event) => setRole(event.target.value)}
            />
            TENANT
          </label>

          <label>
            <input
              type="radio"
              name="role"
              value="landlord"
              onChange={(event) => setRole(event.target.value)}
            />
            LANDLORD
          </label>
        </div>

        <label>
          <input type="checkbox" />I agree to the Terms and Conditions
        </label>

        <button type="submit">Create Account</button>
      </form>
      {/* display message only when it exists*/}
      {message && <p>{message}</p>}

      <p> Already have an account?</p>

      <div style={{ display: "flex", gap: "210px" }}>
        <Link to="/tenant-login">Tenant Login</Link>

        <Link to="/landlord-login">Landlord Login</Link>
      </div>
    </div>
  );
}
