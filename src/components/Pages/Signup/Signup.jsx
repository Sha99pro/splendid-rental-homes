import { Link } from "react-router-dom"

export default function Signup(){
    return(
        <div>
            <h1>SIGNUP</h1>
            <p> Create your Splendid Rental Homes account</p>

            <form>
                <label>FullName</label>
                <input
                    type="text"
                    placeholder="Enter your Full Name"
                />

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

                <label>Confirm Password</label>
                <input
                    type="password"
                    placeholder="Enter the password again"
                />
            

           <label>I am a:</label>
           <div>
                <label>
                    <input
                        type="radio"
                        name= "role"
                        value="tenant"
                    />
                    TENANT
                </label>

                <label>
                    <input
                        type="radio"
                        name="role"
                        value="landlord"
                    />
                    LANDLORD
                </label>
           </div>

                <label>
                        <input
                            type="checkbox"
                        />
                        I agree to the Terms and Conditions
                </label>
            
                <button type="submit">Create Account</button>
            </form>

            <p> Already have an account?</p>

            <div>
                <Link to="/tenant-login">Tenant Login</Link>
                <Link to="/landlord-login">Landlord Login</Link>
            </div>

        </div>
    )
}