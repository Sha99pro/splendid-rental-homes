import { Link } from "react-router-dom"


export default function TenantLogin(){
    return(
        <div>
            <h1>Tenant Login</h1>
            <p> Sign in to manage your rental applications</p>

            <form>
                <label>Email</label>
                <input
                    type="email"
                    placeholder="Enter your email"
                />

                <label>Password</label>
                <input
                    type="password"
                    placeholder="Enter your password"
                />

                <button type="submit">
                    Login
                </button>
            </form>
            <p> New to Splendid Rental Homes?
                <Link to="/signup">Create an account</Link>
            </p>
        </div>
    )

}