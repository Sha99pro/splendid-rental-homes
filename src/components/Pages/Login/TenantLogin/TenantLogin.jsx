import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function TenantLogin() {
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
      return;
    }

    if (email !== savedEmail) {
      setMessage(" ❌ Invalid Email");
      return;
    }
    if (password !== savedPassword) {
      setMessage(" ❌ Invalid Password");
      return;
    }
    if (savedRole !== "tenant") {
      setMessage("❌ This account is not a tenant account.");
      return;
    }

    navigate("/tenant-dashboard");
  }

  return (
    <div>
      <h1>Tenant Login</h1>
      <p> Sign in to manage your rental applications</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
            minLength="6"
            required
          />
        </div>
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
