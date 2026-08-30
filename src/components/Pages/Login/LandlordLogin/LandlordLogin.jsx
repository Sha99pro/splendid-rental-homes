import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./LandlordLogin.css";

export default function LandlordLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");
    const savedRole = localStorage.getItem("role");

    if (!email || !password) {
      setMessage("Please enter your email and password.");
    }

    if (email !== savedEmail) {
      setMessage("❌ Invalid email");
      return;
    }

    if (password !== savedPassword) {
      setMessage("❌ Wrong Password");
      return;
    }

    if (savedRole !== "landlord") {
      setMessage("❌ This is not a landlord account");
    }

    navigate("/landlord-dashboard");
  }

  return (
    <div className="landlord-login">
      <h1>Landlord Login</h1>
      <p> Sign in to manage your rental properties</p>

      <form onSubmit={handleSubmit}>
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
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter your password"
          required
        />

        <button type="submit">Login</button>
      </form>
      <p>
        {" "}
        New to Splendid Rental Homes?
        <Link to="/signup">Create an account</Link>
      </p>
      {message && <p>{message}</p>}
    </div>
  );
}
